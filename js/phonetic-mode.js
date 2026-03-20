// js/phonetic-mode.js

import { Syllabifier, SpeechService } from './utils.js';

/**
 * Gestiona el modo de aprendizaje fonético.
 * Muestra cada sílaba como un bloque visual independiente y resaltable.
 */
export const PhoneticMode = {
    element: null,
    placeholder: '<span class="placeholder-text">Desglose fonético...</span>',
    _syllableSpans: [],
    _rawSyllables: [], // Almacena las sílabas sin capitalizar para la pronunciación
    _wordBoundaries: [], // [{startSylIndex, endSylIndex, wordText}]
    _currentUtterance: null, // Para controlar la reproducción actual

    init(selector) {
        this.element = document.querySelector(selector);
        this.reset();
    },

    reset() {
        window.speechSynthesis.cancel();
        this.element.innerHTML = this.placeholder;
        this._syllableSpans = [];
        this._rawSyllables = [];
        this._wordBoundaries = [];
        this._currentUtterance = null;
    },

    render(text) {
        this.element.innerHTML = '';
        this._syllableSpans = [];
        this._rawSyllables = [];
        this._wordBoundaries = [];

        if (!text) {
            this.reset();
            return;
        }

        const words = text.split(/\s+/).filter(Boolean);
        let sylIndex = 0;

        words.forEach((palabra, wordIdx) => {
            // Contenedor de la palabra
            const wordGroup = document.createElement('span');
            wordGroup.className = 'phonetic-word-group';

            const syllables = Syllabifier.syllabify(palabra);
            const startIdx = sylIndex;

            syllables.forEach((sil, i) => {
                this._rawSyllables.push(sil); // Guardar la sílaba original para la pronunciación

                // Capitalizar la primera sílaba de la primera palabra
                let displaySil = (wordIdx === 0 && i === 0)
                    ? sil.charAt(0).toUpperCase() + sil.slice(1)
                    : sil;

                const sylSpan = document.createElement('span');
                sylSpan.className = 'silaba-chip';
                // Alternar colores para distinguir sílabas dentro de una misma palabra
                sylSpan.dataset.sylColor = i % 2 === 0 ? 'a' : 'b';
                sylSpan.textContent = displaySil;

                wordGroup.appendChild(sylSpan);
                this._syllableSpans.push(sylSpan);
                sylIndex++;
            });

            this._wordBoundaries.push({
                startSylIndex: startIdx,
                endSylIndex: sylIndex - 1,
                wordText: palabra
            });

            this.element.appendChild(wordGroup);

            // Separador de espacio entre palabras (excepto al final)
            if (wordIdx < words.length - 1) {
                const sep = document.createElement('span');
                sep.className = 'phonetic-word-sep';
                sep.textContent = '\u00A0'; // non-breaking space
                this.element.appendChild(sep);
            }
        });
    },

    play(_text) {
        // _text se ignora aquí: usamos _rawSyllables generadas en render()
        if (this._rawSyllables.length === 0) return;

        // Cancelar cualquier reproducción en curso
        window.speechSynthesis.cancel();
        this._currentUtterance = null;
        this._clearHighlights();

        let currentSyllableIndex = 0;

        const speakNextSyllable = () => {
            if (currentSyllableIndex < this._rawSyllables.length) {
                this._clearHighlights();
                const currentSpan = this._syllableSpans[currentSyllableIndex];
                if (currentSpan) {
                    currentSpan.classList.add('silaba-chip--highlight');
                    currentSpan.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
                }

                const syllableToSpeak = this._rawSyllables[currentSyllableIndex];

                // Usar SpeechSynthesisUtterance directamente para no interrumpir la cadena
                const utt = new SpeechSynthesisUtterance(syllableToSpeak);
                utt.lang = 'es-ES';
                utt.rate = 0.8; // Más lento para escuchar cada sílaba claramente

                utt.onend = () => {
                    currentSyllableIndex++;
                    // Pequeña pausa entre sílabas para percibir la separación
                    setTimeout(speakNextSyllable, 90);
                };

                utt.onerror = () => {
                    currentSyllableIndex++;
                    setTimeout(speakNextSyllable, 90);
                };

                window.speechSynthesis.speak(utt);
            } else {
                // Todas las sílabas han sido pronunciadas
                this._clearHighlights();
                this._currentUtterance = null;
            }
        };

        speakNextSyllable(); // Iniciar la secuencia de reproducción sílaba a sílaba
    },

    _clearHighlights() {
        this._syllableSpans.forEach(s => s.classList.remove('silaba-chip--highlight'));
    }
};
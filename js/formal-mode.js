// js/formal-mode.js

import { NumberConverter, SpeechService } from './utils.js';

/**
 * Gestiona el modo de aprendizaje formal (con SVG).
 */
export const FormalMode = {
    element: null,
    placeholder: '<span class="placeholder-text">Representación gráfica...</span>',
    
    init(selector) {
        this.element = document.querySelector(selector);
        this.reset();
    },

    reset() {
        this.element.innerHTML = this.placeholder;
    },

    /**
     * RENDERIZADO DEL SVG MEJORADO
     * - Coordenadas y viewBox ajustados para un diseño más compacto.
     * - Uso de text-anchor="middle" para un centrado de texto robusto.
     * - Lógica de espaciado simplificada.
     */
    render(pEnteraStr, pDecimalStr) {
        this.element.innerHTML = '';
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.element.appendChild(svg);

        // --- CONSTANTES DE DISEÑO ---
        const digitWidth   = 60;   // ancho de cada celda decimal
        const startX       = 40;   // margen izquierdo
        const labelAreaH   = 120;  // altura reservada para etiquetas rotadas (zona superior)
        const numY         = labelAreaH + 80; // línea base de los dígitos (bajo las etiquetas)
        const fontSize     = 72;
        const rectTop      = labelAreaH + 8;  // tope del rectángulo de fondo de dígito
        const rectHeight   = fontSize + 4;
        const viewBoxHeight = numY + 50;       // altura total del SVG

        // Y central de la etiqueta rotada: a mitad de la zona de etiquetas
        const labelPivotY  = labelAreaH / 2;  // 60 — mucho espacio sobre los dígitos

        let currentX = startX;

        // --- PARTE ENTERA ---
        const integerBlockWidth  = pEnteraStr.length * digitWidth;
        const integerBlockCenterX = currentX + (integerBlockWidth / 2);

        // Etiqueta "PARTE ENTERA" centrada sobre el bloque
        svg.innerHTML += `<text x="${integerBlockCenterX}" y="${labelAreaH - 10}" class="svg-etiqueta-principal" text-anchor="middle">PARTE ENTERA</text>`;

        // Rectángulo + número entero
        svg.innerHTML += `<rect x="${currentX - 5}" y="${rectTop}" width="${integerBlockWidth + 10}" height="${rectHeight}" fill="var(--color-fondo)" rx="4"/>`;
        svg.innerHTML += `<text id="svg-entero-texto" x="${integerBlockCenterX}" y="${numY}" class="svg-numero" style="fill: var(--color-entero)" text-anchor="middle">${pEnteraStr}</text>`;

        currentX += integerBlockWidth + 10;

        // Coma decimal
        if (pEnteraStr && pDecimalStr) {
            svg.innerHTML += `<text x="${currentX + 5}" y="${numY - 10}" class="svg-numero" style="fill: var(--color-coma)">,</text>`;
            currentX += 28;
        }

        // --- PARTE DECIMAL ---
        const gDecimales = document.createElementNS("http://www.w3.org/2000/svg", "g");
        gDecimales.id = "svg-decimales-g";
        const gEtiquetas = document.createElementNS("http://www.w3.org/2000/svg", "g");
        gEtiquetas.id = "svg-etiquetas-g";
        svg.appendChild(gDecimales);
        svg.appendChild(gEtiquetas);

        let startDecimalX = currentX;
        const decimalPlaces = NumberConverter._decimalPlaces;

        pDecimalStr.split('').forEach((digit, index) => {
            if (index < decimalPlaces.length - 1) {
                const digitCenterX = currentX + (digitWidth / 2);

                // Rectángulo de fondo + dígito decimal
                gDecimales.innerHTML += `<rect x="${currentX}" y="${rectTop}" width="${digitWidth}" height="${rectHeight}" fill="var(--color-fondo)" rx="4"/>`;
                gDecimales.innerHTML += `<text x="${digitCenterX}" y="${numY}" class="svg-numero" style="fill: var(--color-decimal)" text-anchor="middle">${digit}</text>`;

                // Línea divisoria vertical (corre todo el alto)
                gEtiquetas.innerHTML += `<line x1="${currentX + digitWidth}" y1="20" x2="${currentX + digitWidth}" y2="${viewBoxHeight}" stroke="#ccc" stroke-dasharray="5,5" stroke-width="1.5"/>`;

                // Etiqueta rotada: el texto pivota en (digitCenterX, labelPivotY)
                // Con rotate(-90) queda horizontal-eje-Y, centrado verticalmente en la zona de etiquetas
                gEtiquetas.innerHTML += `<text
                    x="${digitCenterX}"
                    y="${labelPivotY}"
                    class="svg-etiqueta-vertical"
                    text-anchor="middle"
                    dominant-baseline="middle"
                    transform="rotate(-90 ${digitCenterX} ${labelPivotY})"
                >${decimalPlaces[index + 1].replace("_", "")}</text>`;

                currentX += digitWidth;
            }
        });

        // Línea vertical principal separadora entero/decimal
        gEtiquetas.innerHTML += `<line x1="${startDecimalX - 10}" y1="20" x2="${startDecimalX - 10}" y2="${viewBoxHeight}" stroke="var(--color-entero)" stroke-width="3" stroke-dasharray="8,4"/>`;

        // --- VIEWBOX FINAL (dinámico) ---
        svg.setAttribute('viewBox', `0 0 ${currentX + 20} ${viewBoxHeight}`);
    },


    play({ fullText, integerText, decimalText, unitText }) {
        if (!fullText) return;
        
        const enteroSVG = document.getElementById('svg-entero-texto');
        const decimalSVG = document.getElementById('svg-decimales-g');
        const etiquetaSVG = document.getElementById('svg-etiquetas-g');

        const onBoundary = (e) => {
            if (e.name !== 'word') return;

            const currentText = fullText.substring(0, e.charIndex + e.charLength);
            [enteroSVG, decimalSVG, etiquetaSVG].forEach(el => el && el.classList.remove('highlight'));
            if(decimalSVG) Array.from(decimalSVG.children).forEach(el => el.classList.remove('highlight'));

            if (enteroSVG && integerText && currentText.includes(integerText)) {
                enteroSVG.classList.add('highlight');
            }
            if (decimalSVG && decimalText && currentText.includes(decimalText)) {
                decimalSVG.querySelectorAll('text').forEach(el => el.classList.add('highlight'));
            }
            if (etiquetaSVG && unitText && currentText.includes(unitText)) {
                decimalSVG.querySelectorAll('text').forEach(el => el.classList.remove('highlight'));
                etiquetaSVG.classList.add('highlight');
            }
        };
        const onEnd = () => [enteroSVG, decimalSVG, etiquetaSVG].forEach(el => el && el.classList.remove('highlight'));
        
        SpeechService.speak(fullText, 'es-ES', onBoundary, onEnd);
    }
};
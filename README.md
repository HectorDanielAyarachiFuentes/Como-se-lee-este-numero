# Lector de Números

Este proyecto es una aplicación web para leer números en español, con diferentes modos de aprendizaje: lectura simple, modo fonético y modo formal gráfico.

## Características

- Entrada de números con o sin decimales.
- Lectura simple del número.
- Modo de aprendizaje fonético con desglose de sílabas.
- Modo de aprendizaje formal con representación gráfica.
- Botones para escuchar la lectura en cada modo.
- Interfaz moderna y responsiva con SCSS modular.
- Accesibilidad mejorada y animaciones suaves.

## Estructura del Proyecto

- `index.html`: Página principal.
- `scss/`: Estilos SCSS organizados por componentes, base, layout y utilidades.
- `js/`: Código JavaScript modular para lógica y modos de aprendizaje.
- `README.md`: Documentación del proyecto.

## Cómo usar

1. Abrir `index.html` en un navegador moderno.
2. Introducir un número en el campo de texto.
3. Explorar las diferentes lecturas y modos.
4. Usar los botones para escuchar la lectura.

## Recomendaciones

Para evitar problemas de CORS al abrir localmente, se recomienda servir el proyecto con un servidor local simple, por ejemplo:

```bash
# Usando Python 3
python -m http.server 8000
```

Luego abrir `http://localhost:8000` en el navegador.

## Licencia

Este proyecto es de código abierto y libre para uso educativo y personal.

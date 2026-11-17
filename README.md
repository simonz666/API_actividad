# Mini Portal de Colombia con API

Aplicación web informativa que consume datos públicos de Colombia en tiempo real y los renderiza dinámicamente en el navegador.

## Descripción
Este proyecto fue desarrollado como actividad práctica de consumo de APIs REST y manipulación del DOM con JavaScript. Consta de dos páginas conectadas mediante navegación HTML tradicional:
1. **Colombia en Datos (`index.html`):** Presenta la ficha técnica general del país (bandera, capital, población, superficie, moneda, idiomas, fronteras y datos geográficos).
2. **Sabores de Colombia (`sabores.html`):** Muestra una galería con los platos típicos de las distintas regiones del país, incluyendo un contador total de platos registrados.

## Tecnologías usadas
* **HTML5:** Estructura semántica y navegación entre páginas mediante hipervínculos.
* **CSS:** Diseño responsivo con Flexbox, CSS Grid y variables personalizadas.
* **JavaScript (ES6+):** Consumo asíncrono de datos con `fetch`, `async/await`, manejo de errores con `try/catch`, estados de carga y creación dinámica de elementos en el DOM.
* **API Pública:** [API Colombia](https://api-colombia.com/)

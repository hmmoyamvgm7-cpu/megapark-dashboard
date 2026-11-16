# NEWDOCK fictitious interactive dashboard

Dashboard estático preparado para GitHub Pages.

## Publicación
1. Crear un repositorio en GitHub.
2. Subir **todo el contenido** de esta carpeta a la raíz.
3. En GitHub: **Settings > Pages**.
4. En Build and deployment, seleccionar **Deploy from a branch**, rama `main`, carpeta `/(root)`.
5. Abrir la URL que facilite GitHub Pages.

## Estructura
- `index.html`: resumen ejecutivo
- `ventas.html`: ventas y rendimiento
- `arrendamientos.html`: contratos y vencimientos
- `afluencia.html`: footfall
- `detalle.html`: drill-down
- `styles.css`: diseño NEWDOCK
- `app.js`: filtros y cálculos
- `data.js`: carga de datos
- `/data/*.json`: datos ficticios derivados del Excel

No necesita Python, servidor de aplicación ni base de datos. Los filtros se ejecutan en el navegador.

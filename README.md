## Alfonsa - Venta de Bebidas

### Descripción del Proyecto

Alfonsa es una plataforma de venta de bebidas. La pagina proporciona a los usuarios la capacidad de explorar el catálogo de bebidas, buscar los productos y agregar artículos al carrito de compras. Además, cuenta con una sección de carrito de compras que muestra la lista de productos seleccionados, permite la eliminación de elementos y facilita el proceso de compra.

### Tecnologías Utilizadas

- **HTML5:** El lenguaje de marcado se utiliza para la estructura básica de las páginas.
  
- **CSS3:** Se utiliza para el diseño y estilo de la interfaz de usuario.

- **JavaScript:** El lenguaje de programación se utiliza para la lógica dinámica de la aplicación. Se empleó la manipulación del DOM, la gestión del carrito de compras y la interactividad de la interfaz. el uso de LocalStorage y Eventos.

### Estructura del Proyecto

- **index.html:** La página principal que muestra la lista de Bebidas y proporciona la funcionalidad de búsqueda.

- **carrito.html:** La página que muestra el contenido del carrito de compras, permite al usuario eliminar lo seleccionado o completar la compra.

- **main.js:** Contiene la lógica principal de la aplicación, incluida la carga de productos, la gestión del carrito de compras y la interactividad de la interfaz.

- **carrito.js:** Contiene la lógica específica para la página del carrito, incluida la visualización de productos en el carrito, la eliminación de elementos y la funcionalidad de compra.

### Funcionalidades Principales

1. **Carga de Productos:** Se utiliza un bucle `for...of` para recorrer la lista de productos y agregar dinámicamente elementos al DOM.

2. **Búsqueda de Productos:** La función `filtrarBebidas` se activa mediante el evento de entrada (`input`) en la barra de búsqueda. Utiliza el método `filter` para mostrar solo los productos que coinciden con el término de búsqueda.

3. **Gestión del Carrito de Compras:** La función `agregarAlcarrito` se activa al hacer clic en el botón "Agregar al Carrito". Utiliza el método `find` para buscar el producto seleccionado y actualiza la cantidad en el carrito o agrega un nuevo elemento si es necesario.

4. **Carrito de Compras Persistente:** Se utiliza `localStorage` para almacenar y recuperar la información del carrito de compras, lo que permite que los datos persistan incluso después de cerrar y volver a abrir la aplicación.

5. **Eliminación de Productos del Carrito:** En la página del carrito, se utiliza el método `splice` para eliminar productos del carrito cuando se hace clic en el botón "Eliminar".

6. **Compra y Vaciado del Carrito:** Al hacer clic en el botón "Comprar ahora", se vacía el carrito de compras y se muestra un mensaje de agradecimiento.

### Cómo Usar

1. Abre el archivo `index.html` en tu navegador para explorar la lista de productos y realizar búsquedas.

2. Haz clic en el botón "Agregar al Carrito" para añadir productos a tu carrito de compras.

3. Dirígete a la página `carrito.html` para ver y gestionar los productos en tu carrito.

4. Completa la compra haciendo clic en el botón "Comprar ahora".

### Estado del Proyecto

El proyecto está en desarrollo activo 

## Links

Proceso a dejar los links de mi proyecto:
- Github Pages: https://fernandosatti.github.io/2-pre-entrega-javascript/index.html
- Repositorio:  https://github.com/FernandoSatti/2-pre-entrega-javascript
- Netlify:      https://alfonsabebidas.netlify.app
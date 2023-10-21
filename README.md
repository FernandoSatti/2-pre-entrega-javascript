## Alfonsa - Venta de Bebidas

### Descripción del Proyecto

Alfonsa es una plataforma de venta de bebidas. La pagina proporciona a los usuarios la capacidad de explorar el catálogo de bebidas, buscar los productos y agregar artículos al carrito de compras. Además, cuenta con una sección de carrito de compras que muestra la lista de productos seleccionados, permite la eliminación de elementos y facilita el proceso de compra.

### Tecnologías Utilizadas:

- **HTML5:** El lenguaje de marcado se utiliza para la estructura básica de las páginas.
  
- **CSS3:** Se utiliza para el diseño y estilo de la interfaz de usuario.

- **JavaScript:** El lenguaje de programación se utiliza para la lógica dinámica de la aplicación. Se empleó la manipulación del DOM, la gestión del carrito de compras y la interactividad de la interfaz. el uso de LocalStorage y Eventos.

### Frameworks Utilizados:

- **Boostrap:** Se utilizó para la nav del sitio y para el carrousel de la interfaz principal.
  
- **Sass:** Como preprocesador de Csss

- **NodeJs:** se instaló para el uso del npm (Node Package Manager), para la instación de Sass.

### Librerias utilizadas:

- **Toastify:** es una biblioteca que se utilizó en main.js para mostrar notificaciones al usuario cuando se realizó acciones como agregar productos al carrito o eliminarlo haciendo click en la papelera. Proporciona notificaciones visuales atractivas y personalizables, que mejoran la experiencia del usuario.

- **SweetAlert:** es una biblioteca que se emplea en carrito.js para mostrar confirmaciones al usuario en casos como vaciar el carrito y procesar la compra. Ofrece ventanas modales elegantes y personalizables que mejoran la apariencia y usabilidad de las confirmaciones en el sitio web.

### Estructura del Proyecto

- **Carga de Datos iniciales:** Utiliza el método fetch para cargar los datos de bebidas desde un archivo JSON llamado "bebidas.json". Los datos se almacenan en la variable bebidas.

- **index.html:** La página principal que muestra la lista de Bebidas y proporciona la funcionalidad de búsqueda de filtrado.

- **carrito.html:** La página que muestra el contenido del carrito de compras, permite al usuario eliminar lo seleccionado o completar la compra.

- **main.js:** Contiene la lógica principal de la web, incluida la carga de productos, la gestión del carrito de compras y la interactividad de la interfaz.

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

5. No podrás realizar la compra sin antes rellenar el formulario y colocar un email correcto.

## Proceso de Compra y Confirmación

### `carritoComprar.addEventListener("click", function () { ... });`
Cuando el usuario hace clic en el botón "Comprar" en el carrito de compras, se inicia el proceso de compra. Se realiza la validación del formulario y, si es válido, se procede a la confirmación de la compra.

#### `formularioEsValido()`
La función `formularioEsValido()` se utiliza para validar el formulario de compra. Se verifica si los campos requeridos, como nombre, correo y domicilio, están completos y si el correo electrónico tiene un formato válido. Si el formulario es válido, la función retorna `true`.

#### `procesarCompra()`
Si el formulario es válido, se muestra una ventana modal atractiva utilizando la biblioteca `SweetAlert`. La ventana modal pregunta al usuario si desea realizar el pago. Se muestra un botón "Sí, comprar" y un botón de cancelación. Si el usuario hace clic en "Sí, comprar," se confirma la compra y se ejecutan las siguientes acciones:

- Se muestra una ventana  de éxito agradeciendo al usuario por su compra.
- Se eliminan las bebidas del carrito (`bebidasEncarrito` se vacía).
- Se borra el carrito almacenado en `localStorage`.
- Se ajustan las clases de elementos HTML para ocultar el carrito y mostrar un mensaje de compra exitosa.
- Se habilita un botón para regresar a la tienda (`buttonArrow`).
- Se elimina el formulario dejando la pagina del carrito con un unico cartel: "muchas gracias por su compra"

## Links

Dejo los links de acceso al proyecto:

- Github Pages: https://fernandosatti.github.io/2-pre-entrega-javascript/index.html
- Repositorio:  https://github.com/FernandoSatti/2-pre-entrega-javascript
- Netlify:      https://alfonsabebidas.netlify.app









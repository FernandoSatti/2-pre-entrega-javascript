// apartado para la pagina del carrito
const bebidasEncarrito = JSON.parse(localStorage.getItem("bebidas-en-carrito"));
const carritoVacio= document.querySelector("#carrito-vacio");
const tablaDeProductos = document.querySelector("#tabla-de-productos");
const carritoContainer= document.querySelector("#carrito-container");
const CarritoComprado = document.querySelector("#carrito-comprado");
const tablaDeTitulos = document.querySelector(".titulos-tr");
const tablaDeSubTitulos= document.querySelector(".info-titulo-tr");
const eliminarFilaCarrito= document.querySelector(".button-eliminar-producto");


if (bebidasEncarrito) {
    carritoVacio.classList.add("disabled");
    tablaDeProductos.classList.remove("disabled");
    carritoContainer.classList.remove("disabled");
    CarritoComprado.classList.add("disabled");

    
    let contadorFila = 1;  // Inicializar el contador

    bebidasEncarrito.forEach(bebida => {
        const fila = document.createElement("tr");
        fila.classList.add("info-titulo-tr");
        fila.innerHTML = `
            <td class="indicador-td">${contadorFila}</td>
            <td class="bebida-td">${bebida.nombre}</td>
            <td class="cantidad-td">${bebida.cantidad}</td>
            <td class="precio-td">$${bebida.precio}</td>
            <td class="subtotal-td">$${bebida.precio * bebida.cantidad}</td>
            <td class="vaciar-td"><span class="span-eliminar-producto"><img src="../icons/trash.svg" alt="eliminar producto" data-id="${bebida.id}" class="eliminar-producto"></span></td>
        `;
        tablaDeProductos.querySelector('tbody').appendChild(fila);
        
        contadorFila++;  // Aumentar el contador
    });
} else {
    tablaDeProductos.classList.add("disabled")// Hacer algo si no hay elementos en el carrito
}

// <div class="tabla-de-productos" id="tabla-de-productos">
    

// apartado para la pagina del carrito
let bebidasEncarrito = localStorage.getItem("bebidas-en-carrito");
bebidasEncarrito = JSON.parse(bebidasEncarrito)
const carritoVacio = document.querySelector("#carrito-vacio");
const tablaDeProductos = document.querySelector("#tabla-de-productos");
const carritoContainer = document.querySelector("#carrito-container");
const carritoComprar = document.querySelector("#carrito-comprar")
const CarritoComprado = document.querySelector("#carrito-comprado");
const tablaDeTitulos = document.querySelector(".titulos-tr");
const tablaDeSubTitulos = document.querySelector(".info-titulo-tr");
const vaciarCarritoDeCompra = document.querySelector("#vaciar-carrito");
const ptotal= document.querySelector("#total");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

function cargarBebidasEnCarrito() {
    const tbody = tablaDeProductos.querySelector('tbody');
    tbody.innerHTML = "";

    if (bebidasEncarrito && bebidasEncarrito.length > 0) {
        carritoVacio.classList.add("disabled");
        tablaDeProductos.classList.remove("disabled");
        carritoContainer.classList.remove("disabled");
        CarritoComprado.classList.add("disabled");

        bebidasEncarrito.forEach((bebida, index) => {
            const fila = document.createElement("tr");
            fila.classList.add("info-titulo-tr");
            fila.innerHTML = `
                <td class="indicador-td">${index + 1}</td>
                <td class="bebida-td">${bebida.nombre}</td>
                <td class="cantidad-td">${bebida.cantidad}</td>
                <td class="precio-td">$${bebida.precio}</td>
                <td class="subtotal-td">$${bebida.precio * bebida.cantidad}</td>
                <td class="vaciar-td"><button class="carrito-producto-eliminar" id="${bebida.id}"><img src="../icons/trash.svg" alt=""></button></td>
            `;
            tbody.appendChild(fila);
        });
    } else {
        carritoVacio.classList.remove("disabled");
        tablaDeProductos.classList.add("disabled");
        carritoContainer.classList.add("disabled");
        CarritoComprado.classList.add("disabled");
    }

    actualizarBotonesEliminar();
    sumarTotal();
}

cargarBebidasEnCarrito();

function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

function eliminarDelCarrito(e) {
    const idboton = e.currentTarget.id;
    const index = bebidasEncarrito.findIndex(bebida => bebida.id === idboton);
    bebidasEncarrito.splice(index, 1);

    cargarBebidasEnCarrito();
    localStorage.setItem("bebidas-en-carrito", JSON.stringify(bebidasEncarrito));
    
}

//boton vaciar carrito de compra
vaciarCarritoDeCompra.addEventListener("click", vaciarCarrito);
function vaciarCarrito(){
    bebidasEncarrito.length = 0
    
    localStorage.setItem("bebidas-en-carrito", JSON.stringify(bebidasEncarrito));
    cargarBebidasEnCarrito();
}

function sumarTotal(){
    const sumatoriaTotal = bebidasEncarrito.reduce((acumulador, bebida) => acumulador + (bebida.precio * bebida.cantidad),0)
    ptotal.innerText = `$${sumatoriaTotal}`;
}

carritoComprar.addEventListener("click", comprarCarrito);
function comprarCarrito(){
    bebidasEncarrito.length = 0    
    localStorage.setItem("bebidas-en-carrito", JSON.stringify(bebidasEncarrito));
    carritoVacio.classList.add("disabled");
        tablaDeProductos.classList.add("disabled");
        carritoContainer.classList.add("disabled");
        CarritoComprado.classList.remove("disabled");

}
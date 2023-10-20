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
const ptotal = document.querySelector("#total");
const buttonArrow = document.querySelector(".button-arrow");
const formCarrito = document.querySelector(".div-form-container");
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
                <td class="vaciar-td"><button class="carrito-producto-eliminar" id="${bebida.id}"><img src="../icons/trash.svg" alt=""></button></td>`;
            tbody.appendChild(fila);
        });
    } else {
        carritoVacio.classList.remove("disabled");
        tablaDeProductos.classList.add("disabled");
        carritoContainer.classList.add("disabled");
        CarritoComprado.classList.add("disabled");
        formCarrito.classList.add("disabled");
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
    Toastify({
        text: "producto eliminado",
        duration: 2000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, rgb(240, 118, 4), rgb(240, 169, 4))",
            borderRadius: "2rem",
            textShadow: "1px 1px 1px black",
            fontSize: "0.85rem",
            textTransform: "uppercase"
        },
        onClick: function () { }
    }).showToast();
    const idboton = e.currentTarget.id;
    const index = bebidasEncarrito.findIndex(bebida => bebida.id === idboton);
    bebidasEncarrito.splice(index, 1);
    cargarBebidasEnCarrito();
    localStorage.setItem("bebidas-en-carrito", JSON.stringify(bebidasEncarrito));
}

vaciarCarritoDeCompra.addEventListener("click", vaciarCarrito);
function vaciarCarrito() {
    Swal.fire({
        title: 'Estas seguro?',
        text: `se van a borrar ${bebidasEncarrito.reduce((acumulador, bebida) => acumulador + bebida.cantidad, 0)} productos`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'rgb(212, 139, 3)',
        cancelButtonColor: '#d33',
        confirmButtonText: 'si, vaciar Carrito'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'carrito eliminado',
                ' tus productos han sido descartados',
                'success',
                bebidasEncarrito.length = 0,
                localStorage.setItem("bebidas-en-carrito", JSON.stringify(bebidasEncarrito)),
                cargarBebidasEnCarrito(),
            )
        }
    })
}

function sumarTotal() {
    const sumatoriaTotal = bebidasEncarrito.reduce((acumulador, bebida) => acumulador + (bebida.precio * bebida.cantidad), 0)
    ptotal.innerText = `$${sumatoriaTotal}`;
}

carritoComprar.addEventListener("click", function () {
    if (formularioEsValido()) {
        procesarCompra();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'debes completar el formulario',
            confirmButtonColor: 'rgb(212, 139, 3)'
        });
    }
});

function formularioEsValido() {
    const nombreApellido = document.getElementById("nombreApellido").value;
    const correo = document.getElementById("correo").value;
    const domicilio = document.getElementById("domicilio").value;
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return nombreApellido !== "" && emailValido.test(correo) && domicilio !== "";
}

function procesarCompra() {
    Swal.fire({
        title: 'Deseas realizar el pago?',
        text: "Se acreditará automáticamente",
        showCancelButton: true,
        confirmButtonColor: 'rgb(212, 139, 3)',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, comprar'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                '¡Muchas gracias por tu compra!',
                'Estaremos preparando tu producto',
                'success',
                bebidasEncarrito.length = 0,
                localStorage.setItem("bebidas-en-carrito", JSON.stringify(bebidasEncarrito)),
                carritoVacio.classList.add("disabled"),
                tablaDeProductos.classList.add("disabled"),
                carritoContainer.classList.add("disabled"),
                CarritoComprado.classList.remove("disabled"),
                buttonArrow.classList.remove("disabled"),
                formCarrito.classList.add("disabled"),
            );
        }
    });
}

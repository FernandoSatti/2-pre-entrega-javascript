
let bebidas = [];
fetch("./js/bebidas.json")
.then(respuesta => respuesta.json())
.then(dato =>{
  bebidas= dato;
  cargarBebidas(bebidas);
})
const contenedorDeProductos = document.querySelector(".contenedor-de-productos");
const indicadorCantidadCarrito = document.querySelector("#carrito-cantidad");
const searchInput = document.getElementById("searchInput");
let bebidasEncarrito;
let bebidasEncarritoLStorage = localStorage.getItem("bebidas-en-carrito");

if (bebidasEncarritoLStorage) {
  bebidasEncarrito = JSON.parse(bebidasEncarritoLStorage);
  indicadorCarrito();
} else {
  bebidasEncarrito = [];
}

function cargarBebidas() {
  for (const bebida of bebidas) {
    const figure = crearFigura(bebida);
    contenedorDeProductos.append(figure);
  }
}

function agregarAlcarrito(e) {
  
  Toastify({
    text: "Agregado Al Carrito",
    duration: 2000,
    close: true,
    gravity: "top",
    position: "right", 
    stopOnFocus: true, 
    style: {
      background: "linear-gradient(to right, rgb(240, 118, 4), rgb(240, 169, 4))",
      borderRadius: "2rem",
      textShadow: "1px 1px 1px black",
      fontSize:"0.85rem",
      textTransform:"uppercase"
    },
    onClick: function(){} 
  }).showToast();

  const idboton = e.target.id;
  const bebidaAgregada = bebidas.find(bebida => bebida.id === idboton);

  if (bebidasEncarrito.some(bebida => bebida.id === idboton)) {
    const bebidaIndex = bebidasEncarrito.findIndex(bebida => bebida.id === idboton);
    bebidasEncarrito[bebidaIndex].cantidad += 1;
  } else {
    bebidaAgregada.cantidad = 1;
    bebidasEncarrito.push(bebidaAgregada);
  }
  indicadorCarrito();
  localStorage.setItem("bebidas-en-carrito", JSON.stringify(bebidasEncarrito));
}

function indicadorCarrito() {
  const indicador = bebidasEncarrito.reduce((acumulador, bebida) => acumulador + bebida.cantidad, 0);
  indicadorCantidadCarrito.innerText = indicador;
}

function crearFigura(bebida) {
  const figure = document.createElement("figure");
  figure.classList.add("figure-bebida");
  figure.innerHTML = `<img src="${bebida.imagen}" alt="${bebida.nombre}">
    <figcaption>${bebida.nombre}</figcaption>
    <span class="span-price"> $${bebida.precio}</span>
    <button class="boton-al-carrito" id="${bebida.id}">Agregar Al carrito</button>`;
  return figure;
}

function limpiarContenedor() {
  contenedorDeProductos.innerHTML = "";
}

function mostrarBebidasFiltradas(bebidasFiltradas) {
  bebidasFiltradas.forEach(bebida => {
    const figure = crearFigura(bebida);
    contenedorDeProductos.append(figure);
  });
}

function filtrarBebidas() {
  const filtro = searchInput.value.toLowerCase();
  const bebidasFiltradas = bebidas.filter(bebida => bebida.nombre.toLowerCase().includes(filtro));
  limpiarContenedor();
  mostrarBebidasFiltradas(bebidasFiltradas);
}


contenedorDeProductos.addEventListener("click", function (e) {
  if (e.target.classList.contains("boton-al-carrito")) {
    agregarAlcarrito(e);
  }
});
searchInput.addEventListener("input", filtrarBebidas);







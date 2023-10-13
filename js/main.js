
const bebidas = [
  { nombre: 'gancia', volumen: 950 + "ml", precio: 2400, imagen: "./img/bebidas/Aperitivo-Americano-Gancia-950.webp", id: "gancia00" },
  { nombre: "aperol", volumen: 750 + "ml", precio: 2000, imagen: "./img/bebidas/Aperitivo-Aperol-750cc.webp", id: "aperol01" },
  { nombre: 'Smirnoff Rapsberry', volumen: 700 + "ml", precio: 2800, imagen: "./img/bebidas/vodka-smirnoff-raspberry-700-ml.webp", id: "sminrnoff02" },
  { nombre: 'fernet branca', volumen: 750 + "ml", precio: 3900, imagen: "./img/bebidas/fernetbranca.webp", id: "fernet03" },
  { nombre: "blue label", volumen: 750 + "ml", precio: 11400, imagen: "./img/bebidas/blue-label-750cc.webp", id: "bluelable04" },
  { nombre: "coco bongo", volumen: 750 + "ml", precio: 2200, imagen: "./img/bebidas/coco-bongo.webp", id: "cocobongo05" },
  { nombre: "Bombey sapphire gin", volumen: 750 + "ml", precio: 4800, imagen: "./img/bebidas/bombay-sapphire-gin-750-ml.webp", id: "bombay06" },
  { nombre: "cerveza corona", volumen: 710 + "ml", precio: 980, imagen: "./img/bebidas/cerveza_corona-7101ml.webp", id: "corona07" },
  { nombre: "sernova rapsberry", volumen: 750 + "ml", precio: 1350, imagen: "./img/bebidas/Sernova.webp", id: "sernova08" },
  { nombre: "tres plumas", volumen: 700 + "ml", precio: 1900, imagen: "./img/bebidas/tres-plumas-kiwi-700cc.webp", id: "tresplumas9" },
  { nombre: "absolut original", volumen: 750 + "ml", precio: 9800, imagen: "./img/bebidas/absolut-original 750ml.webp", id: "absolut10" },
  { nombre: "campari", volumen: 750 + "ml", precio: 2500, imagen: "./img/bebidas/campari-750ml.webp", id: "campari11" },
];

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

cargarBebidas();





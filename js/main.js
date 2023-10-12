
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
const indicadorCantidadCarrito= document.querySelector("#carrito-cantidad");
const tablaDeProductos = document.querySelector("#tabla-de-productos")
let bebidasEncarrito;

const bebidasEncarritoLStorage=localStorage.getItem("bebidas-en-carrito");

if(bebidasEncarritoLStorage){
  bebidasEncarrito = JSON.parse(bebidasEncarritoLStorage);
  indicadorCarrito()
}else{
  bebidasEncarrito = []
}


function cargarBebidas() {

  bebidas.forEach(bebida => {

    const figure = document.createElement("figure");
    figure.classList.add("figure-bebida")
    figure.innerHTML = `<img src="${bebida.imagen}" alt="${bebida.nombre}">
<figcaption>${bebida.nombre}</figcaption>
<span class="span-price"> $${bebida.precio}</span>
<button class="boton-al-carrito" id="${bebida.id}">Agregar Al carrito</button> `;

    contenedorDeProductos.append(figure);
  })
}
cargarBebidas()
const figureBebida = document.querySelector(".figure-bebida");
let botonAgregarAlCarrito = document.querySelectorAll(".boton-al-carrito");
const buttonsubmit = document.querySelector(".button-submit")


botonAgregarAlCarrito.forEach(boton => {
  boton.addEventListener("click", agregarAlcarrito)

})


function agregarAlcarrito(e) {
  const idboton = e.currentTarget.id;

  const bebidasagregadas = bebidas.find(bebida => bebida.id === idboton)

  if (bebidasEncarrito.some(bebida => bebida.id === idboton)) {
    const bebidaIndex= bebidasEncarrito.findIndex(bebida => bebida.id=== idboton);
    bebidasEncarrito[bebidaIndex].cantidad+=1

  } else {
    
    bebidasagregadas.cantidad = 1;
    bebidasEncarrito.push(bebidasagregadas);
  }

  indicadorCarrito();

  localStorage.setItem("bebidas-en-carrito",JSON.stringify(bebidasEncarrito))
}


function indicadorCarrito(){
  let indicador = bebidasEncarrito.reduce((acumulador,bebida) => acumulador + bebida.cantidad, 0);
  indicadorCantidadCarrito.innerText = indicador; 
  console.log(indicador)
}














// buttonSubmit.addEventListener("click", (e) => {
//     // Alternar la clase "active" en el botón
//     e.currentTarget.classList.toggle("active");

//     // Cambiar el texto del botón dependiendo de si tiene la clase "active"
//     if (e.currentTarget.classList.contains("active")) {
//         e.currentTarget.innerHTML = "Pedido confirmado";
//     } else {
//         e.currentTarget.innerHTML = "confirmar pedido";
//     }
// });

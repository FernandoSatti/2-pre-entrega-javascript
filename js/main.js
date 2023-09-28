
const bebidas = [
  { nombre: 'fernet branca', volumen: 750 + "ml", precio: 3900 },
  { nombre: 'Smirnoff Rapsberry', volumen: 700 + "ml", precio: 2800 },
  { nombre: 'gancia', volumen: 950 + "ml", precio: 2400 },
  { nombre: "aperol", volumen: 750 + "ml", precio: 2000 },
  { nombre: "blue label", volumen: 750 + "ml", precio: 11400 },
  { nombre: "coco bongo", volumen: 750 + "ml", precio: 2200 },
  { nombre: "sapphire gin", volumen: 750 + "ml", precio: 4800 },
  { nombre: "cerveza corona", volumen: 710 + "ml", precio: 980 },
  { nombre: "sernova rapsberry", volumen: 750 + "ml", precio: 1350 },
  { nombre: "tres plumas", volumen: 700 + "ml", precio: 1900 },
  { nombre: "absolut original", volumen: 750 + "ml", precio: 9800 },
  { nombre: "campari", volumen: 750 + "ml", precio: 2500 },
];

function mostrarListaDeProductos() {
  let MostrarProductos = confirm("deseas ver la lista de productos?") 
  if (MostrarProductos) {
    bebidas.forEach((bebida) => console.log(bebida.nombre));
  }
}
mostrarListaDeProductos();

function agregarBebidasAlCarrito() {
  let carrito = [];
  totalPrecio = 0;
  dineroDisponible= 20000;
  continuarBuscando = true
  while (continuarBuscando) {
    let bebidaElegida = prompt("Ingrese la bebida que deseas agregar al carrito");
    let bebidaEncontrada = bebidas.find(bebida =>
      bebida.nombre.toLowerCase().includes(bebidaElegida.toLowerCase()));
    
    if(bebidaEncontrada){
      console.log(bebidaEncontrada.nombre + " " + bebidaEncontrada.volumen + " Precio: $" + bebidaEncontrada.precio);
      carrito.push(bebidaEncontrada);
      alert("bebida agregada al carrito")
      totalPrecio+=bebidaEncontrada.precio
    }else {
      alert("Bebida no encontrada. 😔");
    }
    continuarBuscando = confirm("¿Quieres seguir buscando?");
  }
  console.log("contenido del carrito");
carrito.forEach(bebida => {
  console.log('Nombre:', bebida.nombre, '- Volumen:', bebida.volumen, '- Precio:', '$' + bebida.precio);
});
console.log("TOTAL DEL CARRITO: "+ totalPrecio + "$");
alert("total del carrito: "+ totalPrecio + "$");
pagar()
}

//metodo de pago
function pagar(){
  let metodoDePago= prompt("ingrese el metodo de pago").toUpperCase();
  switch(metodoDePago.toUpperCase()){
    case "VISA": alert("usted paga con " + metodoDePago);
    break;
    case "MASTERCARD": alert("usted paga con " + metodoDePago);
    break;
    case "MERCADO PAGO": alert("usted paga con " + metodoDePago);
    break;
  }
  if(totalPrecio>dineroDisponible){
    alert("saldo insuficiente")
  }else{
    alert("la compra se realizó con exito")
  }
  
}
agregarBebidasAlCarrito()


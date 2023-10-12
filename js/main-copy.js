
const bebidas = [
    { nombre: 'fernet branca', volumen: 750 + "ml", cantidad: 50, precio: 3900 },
    { nombre: 'Smirnoff Rapsberry', volumen: 700 + "ml", cantidad: 300, precio: 2800 },
    { nombre: 'gancia', volumen: 950 + "ml", cantidad: 15, precio: 2400 },
    { nombre: "aperol", volumen: 750 + "ml", cantidad: 50, precio: 2000 },
    { nombre: "blue label", volumen: 750 + "ml", cantidad: 13, precio: 11400 },
    { nombre: "coco bongo", volumen: 750 + "ml", cantidad: 100, precio: 2200 },
    { nombre: "Bombey sapphire gin", volumen: 750 + "ml", cantidad: 10, precio: 4800 },
    { nombre: "cerveza corona", volumen: 710 + "ml", cantidad: 200, precio: 980 },
    { nombre: "sernova rapsberry", volumen: 750 + "ml", cantidad: 45, precio: 1350 },
    { nombre: "tres plumas", volumen: 700 + "ml", cantidad: 15, precio: 1900 },
    { nombre: "absolut original", volumen: 750 + "ml", cantidad: 20, precio: 9800 },
    { nombre: "campari", volumen: 750 + "ml", cantidad: 30, precio: 2500 },
];

function agregarBebidasAlCarrito() {
    let carrito = [];
    totalPrecio = 0;
    continuarBuscando = true
    while (continuarBuscando) {
        let bebidaElegida = prompt("Ingrese la bebida que deseas agregar al carrito");
        let bebidaEncontrada = bebidas.find(bebida =>
            bebida.nombre.toLowerCase().includes(bebidaElegida.toLowerCase()));

        if (bebidaEncontrada) {
            console.log(bebidaEncontrada.nombre + " " + bebidaEncontrada.volumen + " Precio: $" + bebidaEncontrada.precio);
            carrito.push(bebidaEncontrada);
            alert("bebida agregada al carrito")
            totalPrecio += bebidaEncontrada.precio
        } else {
            alert("Bebida no encontrada. 😔");
        }
        continuarBuscando = confirm("¿Quieres seguir buscando?");
    }
    console.log("contenido del carrito");
    carrito.forEach(bebida => {
        console.log('Nombre:', bebida.nombre, '- Volumen:', bebida.volumen, '- Precio:', '$' + bebida.precio);
    });
    console.log("TOTAL DEL CARRITO: " + totalPrecio + "$");
    alert("total del carrito: " + totalPrecio + "$");
    pagar()
}

agregarBebidasAlCarrito()


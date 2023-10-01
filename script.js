"strict mode"

//Se creará un simulador de una tienda online de Café, ya que formará parte de mi proyecto final.

//Creo mi ARRAY con productos que tendrá la categoría "Cafe de Especialidad"

const CafeDeEspecialidad = [
    {nombre: "Fiesta de Cafes", precio: 119},
    {nombre: "SABA Cafe Geisha", precio: 57},
    {nombre: "Specialty Coffee", precio: 70},
    {nombre: "Cafe Peruano PREMIUM", precio: 49}
]

//Creo un ARRAY vacío para que posteriormente ingresen los productos que el usuario seleccione.

let carrito = []

//Creo un mensaje de bienvenida para el usuario

alert("¡Bienvenidx a The Coffee Shop! Haz click en 'Aceptar' para que puedas ver nuestros productos disponibles");

//Creo una función para que el cliente indique cuáles de los productos disponibles desea comprar y también nos indique la cantidad de cada uno de estos

function Productos(){
    let TodosLosProductos = CafeDeEspecialidad.map((CafeDeEspecialidad) => CafeDeEspecialidad.nombre + " (Precio: " + "S/" + CafeDeEspecialidad.precio + ")" + "");
    let producto = prompt("Elige el producto a comprar:  " + TodosLosProductos.join(" - ") + ". IMPORTANTE: Recueda escribir el nombre del producto respetando las mayúsculas y minúsculas (Por Ejemplo 'Fiesta de Cafes')");
    let precio = 0;
    
    while(producto.trim() === "") {
        producto = prompt("No ingreses espacios vacíos. Por favor, solo uno de estos productos: " + TodosLosProductos.join(" - ") + ". IMPORTANTE: Recueda escribir el nombre del producto respetando las mayúsculas y minúsculas (Por Ejemplo 'Fiesta de Cafes')")

    }
    
    if (producto == "Fiesta de Cafes" || producto == "SABA Cafe Geisha" || producto == "Specialty Coffee"  || producto == "Cafe Peruano PREMIUM"){
        alert("Producto ingresado correctamente")
        switch(producto){
            case "Fiesta de Cafes" :
                precio = 119
                break;

            case "SABA Cafe Geisha":
                precio = 57
                break;
                
            case "Specialty Coffee":
                precio =70
                break;

            case "Cafe Peruano PREMIUM":
                precio = 49
                break;

            default:
                break;

        }
        
        let unidades = parseInt(prompt("¿Cuántas unidades desea llevar?"))
        carrito.push({producto, unidades, precio})
        let productosElegidos = carrito.map((carrito) => "Producto: " + carrito.producto + " - Precio: S/ " + carrito.precio + " - Unidades: " + carrito.unidades + " ");
        alert (productosElegidos.join(" | "));

        console.log(carrito)

        } else{
            alert("Lo sentimos. No contamos con este producto")
        }
}

//En esta segunda parte se pregunta al cliente si desea comprar otro producto y cuando se finalice la compra se mostrarán todos los productos elegidos (el nombre, el precio y la cantidad) 

let continuarComprando = true;

while(continuarComprando){
        Productos()
        continuarComprando = confirm("¿Desea agregar otro producto?")

    if(!continuarComprando){
        alert("¡Gracias por comprar con nosotros! Haz click en 'Aceptar' para finalizar tu compra.") 
        carrito.forEach ((carritoFinal) => {
            console.log(`Productos:  ${carritoFinal.producto} , unidades ${carritoFinal.unidades} , total a pagar: ${carritoFinal.unidades*carritoFinal.precio}`);
            })
        break;
     }
    }

//Al final se sumarán los precios de los productos elegidos para mostrar el total. Encontré que con "reduce" puedo sumar estos valores dentro de un ARRAY
const valorInicial = 0;
const total = carrito.reduce((acumulador, valorActual) => acumulador + valorActual.precio*valorActual.unidades, 0);

alert("El total de su compra es S/ " + total + ". Recuerda que te ganaste un 30% de DESCUENTO en tu siguiente compra. Solo debes ingresar el código 'DSCTO30'.");
console.log("El total por su compra es S/" + total);

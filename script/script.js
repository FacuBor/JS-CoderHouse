
const productos = [
        {nombre:"Coca Cola" , precio:500 },
        {nombre:"Sprite" , precio:480},
        {nombre:"Fanta", precio:480},
        {nombre:"Pasos de los toros" , precio:450},
        {nombre:"Pepsi" , precio:450},
        {nombre:"Agua mineral" , precio:300},
];
console.log (productos);
let carroDeCompras = [];
    
alert ("Bienvenido")
let compra = prompt ("Desea realizar una compra... (si - no)");
    while(compra != "si" && compra != "no"){
        alert ("Dato erroneo, ingrese nuevamente... (si - no)")
        compra = prompt ("Desea realizar una compra... (si - no)")
    }
    if(compra == "si"){
        alert("Eliga su bebida...");
        let todoLosProductos = productos.map((productos)=> productos.nombre + " " +"$"+ productos.precio);
        alert(todoLosProductos.join(" - "));
        } 
    else if (compra == "no"){
        alert("gracias por pasar, hasta pronto!")
    }  
while (compra != "no"){
    let producto = prompt ("Nombre del producto... (Coca cola, Sprite, Fanta, Pasos de los toros, Pepsi, Agua mineral ")
    let precio = 0

    if(producto == "coca cola" || producto == "sprite" || producto == "fanta" || producto == "pasos de los toros" || producto == "pepsi" || producto == "agua mineral"){
        switch (producto) {
            case "Coca cola", "coca cola":
                precio = 500;
                break;
            case "Sprite", "sprite":
                precio = 480;
                break;
            case  "Fanta", "fanta":
                precio = 480;
                break;
            case "Pasos de los toros", "pasos de los toros":
                precio = 450;
                break;
            case "Pepsi", "pepsi":
                precio = 450;
                break;
            case "Agua mineral", "agua mineral":
                precio = 300;
                break; 
            default :
                alert ("Dato erróneo")
        }
        let unidades = parseInt(prompt("cuantas unidades queres llevar?"))
        carroDeCompras.push({producto, unidades, precio})
        console.log(carroDeCompras)
    }
    else {
        alert("Dato erróneo")
    }
    compra = prompt("Desea seguir comprando? (si o no)")
    while(compra == "no"){
        alert("gracias por la compra")
        carroDeCompras.forEach((carroTotal) =>{
            console.log(`Producto: ${carroTotal.producto}, Unidades: ${carroTotal.unidades}, Total a pagar por producto es: ${carroTotal.unidades * carroTotal.precio}`)
        })
        break;
    }
}
const total = carroDeCompras.reduce((acumulador, el)=> acumulador + el.precio * el.unidades, 0)

console.log(`Su total a pagar es: ${total}`)
document.getElementById ('divTotal').innerHTML = `Su total a pagar es: $${total} pesos.`;















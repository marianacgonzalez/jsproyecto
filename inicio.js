let nombre= prompt ("Ingrese su nombre")
bienvenida ();

function bienvenida() { alert( "Bienvenido" + " " +
    nombre + " " + "¡¡Iniciemos la compra!!"
)
}

let opciones=  prompt("Elije una remera: \n 1: Remera Pink \n 2: Remera Black \n 3: No quiero comprar")

if (opciones==="1") {
    remerapink()
}
else if (opciones==="2") {
    remerablack()
}

else if (opciones==="3") {
    alert("Te esperamos la proxima")
}

function remerapink() { alert("Elegiste Remera Pink $2000")
    
}
function remerablack() { alert("Elegiste Remera Black $2000")
    
}

let comprar= prompt("¿Como deseas abonar? \n 1:Tarjeta \n2: Efectivo(10%off)")

if (comprar==="1") {
    tarjeta()
}
else if(comprar==="2"){
    alert("Elegiste efectivo presiona aceptar para ver tu %:")
}

function tarjeta() { alert("Felicidades Abonaste con tarjeta")
    
}

let total= Number(alert("Tu descuento es de $" + 2000*10/100))

alert("Gracias por tu compra, te esperamos la próxima")




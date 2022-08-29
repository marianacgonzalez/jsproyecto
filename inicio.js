
let nombre= prompt  ("Ingrese su nombre")
let apellido= prompt ("Ingrese su apellido")
bienvenida()


function bienvenida() { alert( `Bienvenido ${nombre} ${apellido} ¡¡Iniciemos la compra!!`)
}

let opciones=  prompt("Elije una remera: \n 1: Remera Pink \n 2: Remera Black \n 3: No quiero comprar")

while(opciones != 3){
    if (opciones==="1") {
        remerapink()
        break
    }
    else if (opciones==="2") {
        remerablack()
        break
    }
    
    else if (opciones==="3") {
        alert("Te esperamos la proxima")
    }else {
        opciones = prompt("Opcion incorrecta, vuelva a intentarlo. \n 1: Remera Pink \n 2: Remera Black \n 3: No quiero comprar")
    }
}

function remerapink() { alert("Elegiste Remera Pink $2000")
let comprar= prompt("¿Como deseas abonar? \n 1:Tarjeta \n2: Efectivo(10%off)")
if (comprar==="1") { alert("Abonaste con tarjeta, Gracias por tu compra :)")
}
else if(comprar==="2"){
    alert("Elegiste efectivo, presiona aceptar para ver tu %:")
    let total= Number(alert("Tu descuento es de $ "+ 2000*10/100+" "+ "Gracias por tu compra, te esperamos la próxima"))
}

}
function remerablack() { alert("Elegiste Remera Black $2000")
let comprar= prompt("¿Como deseas abonar? \n 1:Tarjeta \n2: Efectivo(10%off)")
if (comprar==="1") { alert("Abonaste con tarjeta, Gracias por tu compra, te esperamos la próxima")
}
else if(comprar==="2"){
    alert("Elegiste efectivo presiona aceptar para ver tu descuento:")
    let total= Number(alert("Tu descuento es de $" + 2000*10/100 + "Gracias por tu compra, te esperamos la próxima"))
}
}











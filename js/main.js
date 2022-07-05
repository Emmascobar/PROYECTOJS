
let Gastos = [950, 2100, 4800];


let TotalGastos = 0;
for (let i = 0; i < 3; i++) {
    TotalGastos = TotalGastos + Gastos[i];
    console.log(TotalGastos);
}


let promedioGastos = TotalGastos / 3;
console.log(promedioGastos);

let limiteMensual = 5000

let netoMensual = (TotalGastos - limiteMensual);
console.log(netoMensual)

if (promedioGastos > 5000) {
    console.log("Has superado tu limite mensual de gastos")
} else {
    console.log("Aun te quedan $ " + (netoMensual) + " " + "para gastar")
}

// -----------------------------------------------------------

const ElColorFavoritoDeEmma = prompt("Ingresar un color");

switch (ElColorFavoritoDeEmma) {
    case "Azul":
        console.log("Incorrecto, aunque es otro primario!");
        break;
    case "Verde ":
        console.log("Incorrecto, casi!");
        break;
    case "Amarillo":
        console.log("Incorrecto!");
        break;
    case "Rojo":
        console.log("Felicitaciones acertaste!");
        break;
    default:
        console.log("No me conoces nada");
        break;
}

// ---------------------------------------------------

let numero = prompt("Ingresar un numero");
while (numero != "Esc") {
    alert("El usuario ingresó " + numero);
    numero = prompt("Ingresar otro color");
}


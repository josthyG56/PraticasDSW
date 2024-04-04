//variable
var numero=0;

//capturar numero en el prompt
numero = parseInt(prompt("Ingresar un numero"));

// Declaración de funcion parOimpart
function parOimpar(n) {
    if (isNaN(n)) {
        alert("El valor que capturaste (" + n + ") no es un número.");
    } else if (n % 2 === 0) {
        alert("El número " + n + " es Par.");
    } else {
        alert("El número " + n + " es Impar.");
    }
}

//Desplegar funcion parOimpar con paramentro
parOimpar(numero);
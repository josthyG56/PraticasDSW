/* Fausto Joshua Ramirez Meza */

// Mensaje que se muestra al usuario para solicitar la operacion
const message = "Escribe una de las operaciones que se muestran en el menu;" +
    "\n* Suma" +
    "\n* Resta" +
    "\n* Multiplicar" +
    "\n* Dividir" +
    "\n* Residuo" +
    "\n* Exit";

let opcion;

// Ciclo que se ejecuta hasta que el usuario ingrese "exit"
do {
    opcion = prompt(message);
    if (opcion.toLowerCase() !== "exit") {
        let numero1 = parseInt(prompt("Ingresar el primer numero"));
        let numero2 = parseInt(prompt("Ingresar el segundo numero"));

        // Validar si numero1 y numero2 son numericos
        if (!isNaN(numero1) && !isNaN(numero2)) {
            OperacionesMatematicas(opcion, numero1, numero2);
        } else {
            alert("Por favor ingrese numeros validos.");
        }
    }

} while (opcion.toLowerCase() !== "exit");

// Funcion que realiza las operaciones matematicas
function OperacionesMatematicas(operacion, a, b) {
    // Convertir la operacion a minusculas para evitar problemas de mayusculas/minisculas
    switch (operacion.toLowerCase()) { 
        case "sumar":
        case "suma":
            let suma = a + b;
            alert("La sumatoria de a y b; (" + a + ") + (" + b + ") = " + suma);
            break;

        case "restar":
        case "resta":
            let resta = a - b;
            alert("La diferencia de a y b; (" + a + ") - (" + b + ") = " + resta);
            break;

        case "multiplicar":
        case "multiplicacion":
            let multiplicar = a * b;
            alert("La multiplicacion de a y b; (" + a + ") * (" + b + ") = " + multiplicar);
            break;

        case "dividir":
        case "division":
            if (b !== 0) {
                let dividir = a / b;
                alert("La fraccion de a y b; (" + a + ") / (" + b + ") = " + dividir);
            } else {
                alert("¡No se puede dividir por cero!");
            }
            break;

        case "residuo":
            let r0 = a % b;
            alert("El residuo de a y b; (" + a + ") % (" + b + ") = " + r0);
            break;

        default:
            alert("La operacion ingresada no es valida.");
    }
}

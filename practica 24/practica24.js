//Definir la funcion de aviso de Huracan con if y else
function avisoHuracan(hayUnHuracan) {
    if (hayUnHuracan) {
        alert("Hay un Huracán");
    } else {
        alert("Está Soleado");
    }
}

// Solicitar al usuario que ingrese un valor booleano
var opcion = prompt("¿Hay un huracán? (responde sí o no)").toLowerCase();

// Switch para manejar las diferentes opciones
switch (opcion) {
    case "si":
    case "sí":
    case "yes":
      avisoHuracan(true);
      break;
    case "no":
    case "not":
      avisoHuracan(false);
      break;
    default:
      alert("No respondió correctamente con sí o no.");
  }

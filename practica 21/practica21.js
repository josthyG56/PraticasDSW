/*Alumno= Fausto Joshua Ramirez Meza
Grupo= 372 */

var peso=0;
var option=0;
var peso_tierra=9.80;
var peso_marte=3.71;
var peso_jupiter=24.79;
var resultado;

peso = parseInt(prompt("Ingrese el valor de tu peso"));

option = parseInt(prompt("Ingresar la opcion 1(Marte) o 2(Jupiter)"));

if (option==1) {
    switch (option) {
        case 1:
            resultado = (peso*peso_marte)/peso_tierra;
            alert("Su peso en el planeta marte: "+resultado);
            break;
        default:
            alert("No haz selecionado la opcion correcta.")
            break;
    }
} else {
    if (option==2) {
        switch (option) {
                case 2:
                    resultado = (peso*peso_jupiter)/peso_tierra;
                    alert("Su peso en el planeta jupiter: "+resultado);
                    break;
            default:
                alert("No haz selecionado la opcion correcta.")
                break;
        }
    } else {
        alert("No existe esta opcion.");
    }
}


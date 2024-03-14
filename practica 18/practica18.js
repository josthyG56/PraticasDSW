/*Alumno= Fausto Joshua Ramirez Meza
Grupo= 372 */

var diasSemana = [];

for (var i = 0; i < 7; i++) {
   var dia = prompt("Ingrese un día de la semana:");
   diasSemana.push(dia);
}

alert("Los días de la semana son: " + diasSemana.join(", "));
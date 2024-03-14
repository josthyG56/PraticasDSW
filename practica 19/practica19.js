var valores = [true,10,false,"codigo","herramientas",7];

/*A partir del array que se me proporciono realizar 
lo siguientes;

- Determinar cual de los dos elementos de texto es mayor.
- Utilziando exclusivamente los dos valores booleanos del array,
 determinar los opradores necesarios para obtener un realizado true ,
 y otro resultado en false.
- Determinar el resultado de las 5 operaciones matematicas(+,-,*,^,dividir) realziadas,
  con los dos elementos numericos.
*/

var valores = [true, 10, false, "codigo", "herramientas", 7];

// 1. Determinar cuál de los dos elementos de texto es mayor.
var texto1 = valores[3];
var texto2 = valores[4];
var mayorTexto = texto1.length > texto2.length ? texto1 : texto2;
alert("El texto mayor es: " + mayorTexto);

// 2. Utilizar exclusivamente los dos valores booleanos del array para obtener un resultado true y otro resultado false.
var bool1 = valores[0];
var bool2 = valores[2];
var resultadoTrue = bool1 || bool2;
var resultadoFalse = bool1 && bool2;
alert("Resultado True: " + resultadoTrue);
alert("Resultado False: " + resultadoFalse);

// 3. Realizar las 5 operaciones matemáticas con los dos elementos numéricos.
var num1 = valores[1];
var num2 = valores[5];
var suma = num1 + num2;
var resta = num1 - num2;
var multiplicacion = num1 * num2;
var potencia = Math.pow(num1, num2);
var division = num1 / num2;

alert("Suma: " + suma);
alert("Resta: " + resta);
alert("Multiplicación: " + multiplicacion);
alert("Potencia: " + potencia);
alert("División: " + division);
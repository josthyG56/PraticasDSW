/*Alumno= Fausto Joshua Ramirez Meza 
Grupo= 372 */
var numero1=0;
var numero2=0;

numero1 = 15;
numero2 = 25;

alert("Tus numero son A) ={"+numero1+"} y B) ={"+numero2+"}");
var suma =parseInt(numero1)+parseInt(numero2);
var resta =parseInt(numero1)-parseInt(numero2);
var divide =parseInt(numero1)/parseInt(numero2);
var multiplica =parseInt(numero1)*parseInt(numero2);

alert("Operaciones realizadas;"+
"\n1. Sumar (x) ="+"{"+numero1+"} + {"+numero2+"} = "+suma+
"\n2. Restar (y) ="+"{"+numero1+"} - {"+numero2+"} = "+resta+
"\n3. Multiplicar (z) ="+"{"+numero1+"} x {"+numero2+"} = "+multiplica+
"\n4. Dividir (w) ="+"{"+numero1+"} / {"+numero2+"} = "+divide
); 

numero1=0;
numero2=0;

alert("Bienvenido a la calculadora de usuario maximo");

numero1 = parseInt(prompt("Ingrese un numero"));

alert("Muy bien ahora vamos por el segundo valor");

numero2 = parseInt(prompt("Ingrese el otro numero"));


alert("Ahora vamos escoger la operacion que deseas realziar");

var option = prompt("Menu de opciones:"+
"\n1. Sumar (x)"+
"\n2. Restar (y)"+
"\n3. Multiplicar (z)"+
"\n4. Dividir (w)"+
"\n5. Todas juntas (all)"
); 

var valor = parseInt(option);

switch (valor) {
    case 1:
        var x = numero1+numero2;
        //var x = parseInt(numero1)+parseInt(numero2);
        alert("El resultado de {"+numero1+" + "+numero2+"} = "+x);
        break;
        case 2:
            var y =numero1-numero2;
            alert("El resultado de {"+numero1+" - "+numero2+"} = "+y);
            break;
            case 3:
                var z =numero1*numero2;
                alert("El resultado de {"+numero1+" * "+numero2+"} = "+z);
                break;
                case 4:
                    var w =numero1/numero2;
                    alert("El resultado de {"+numero1+" / "+numero2+"} = "+w);
                    break;
                    case 5:
                        var suma =parseInt(numero1)+parseInt(numero2);
                        var resta =parseInt(numero1)-parseInt(numero2);
                        var divide =parseInt(numero1)/parseInt(numero2);
                        var multiplica =parseInt(numero1)*parseInt(numero2);
                            alert("Operaciones realizadas;"+
                            "\n1. Sumar (x) ="+"{"+numero1+"} + {"+numero2+"} = "+suma+
                            "\n2. Restar (y) ="+"{"+numero1+"} - {"+numero2+"} = "+resta+
                            "\n3. Multiplicar (z) ="+"{"+numero1+"} x {"+numero2+"} = "+multiplica+
                            "\n4. Dividir (w) ="+"{"+numero1+"} / {"+numero2+"} = "+divide
                            ); 
                        break;             
    default:
        alert("No haz selecionado ninguna de la opciones del menu.");
        break;
}
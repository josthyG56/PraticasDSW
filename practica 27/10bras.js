/*
Alumno: Fausto Joshua Ramirez Meza
*/
// Se declararán los arreglos se define el nombre de la imagen junto con su formato
let obras = ["el-nacimiento-de-venus.jpg", "joven-de-la-perla.jpg", "el-grito.jpg", "noche-estrellada.jpg", "las-meninas.jpg","guernica.jpg","ultima-cena.jpg","mona-lisa.jpg","el-beso.jpg","creación-de-Adán.jpg"];

/* Aquí se declaró otro arreglo donde se utilizara 4 números 
para hacer su respuesta afirmativa (del 0 al 3 porque solo se 
muestran 4 valores en pantalla) durante la selección de opciones en el juego */
let correcta = [0,2,1,3,1,0,1,2,3,0];

// Se declaró un arreglo tipo let
let opciones = [];

// Se definen los arreglos en valores de 3 y se despliegan las (opciones)
opciones.push(["Nacimiento de Venus", "Las Meninas", "Guernica","Creación de Adán"]);
opciones.push(["El Beso", "La Mona lisa", "La Joven de la perla","El Grito"]);
opciones.push(["Joven de la perla", "El Grito", "Noche estrellada","Mona Lisa"]);
opciones.push(["La ultima cena", "Guernica", "La Mona Lisa","Noche estrellada"]);
opciones.push(["El beso", "Las Meninas", "El Grito","Creacion de Adan"]);
opciones.push(["Guernica", "Nacimiento de Venus", "El Beso","Joven de la Perla"]);
opciones.push(["Mona Lisa", "La ultima cena", "Creacion de Adan","El Beso"]);
opciones.push(["Noche Estrellada", "Las Meninas", "La Mona Lisa","La Joven de la Perla"]);
opciones.push(["El Grito", "Las Meninas", "Ultima Cena","El Beso"]);
opciones.push(["Creación de Adán", "Nacimiento de Venus", "La Ultima Cena","Noche Estrallada"]);

// Variable para seguir la posición actual en el juego
let posActual = 0;

// Variable para mantener la cantidad de respuestas correctas
let cantidadAcertadas = 0;

// Función para comenzar el juego, oculta la pantalla inicial y muestra la pantalla del juego
function comenzarJuego(){
    posActual = 0;
    cantidadAcertadas = 0;
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarMaravilla();
}

// Función para cargar la maravilla actual y sus opciones
function cargarMaravilla(){
    if(obras.length <= posActual){
        terminarJuego();
    }
    else{
        limpiarOpciones();

        document.getElementById("imgPintura").src = "image/" + obras[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
        document.getElementById("n3").innerHTML = opciones[posActual][3];

    }
}

/* Función para limpiar las opciones, restaurando las clases de los elementos a su estado original */
function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";
    document.getElementById("n3").className = "nombre";

    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
    document.getElementById("l3").className = "letra";
}

// Función para comprobar si la respuesta elegida es correcta o no
function comprobarRespuesta(opElegida){
    if(opElegida == correcta[posActual]){// Acertó
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    }else{ // No acertó
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    setTimeout(cargarMaravilla, 1000);
}

// Función para terminar el juego y mostrar los resultados
function terminarJuego(){
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = obras.length - cantidadAcertadas;
}

// Función para volver al inicio del juego
function volverAlInicio(){
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}


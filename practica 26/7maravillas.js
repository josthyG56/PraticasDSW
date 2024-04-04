// Se declararán los arreglos se define el nombre de la imagen junto con su formato
let maravillas = ["chichen-itza.jpg", "coliseo.jpg", "cristo-redentor.jpg", "machu-picchu.jpg", "muralla-china.jpg","petra.jpg","taj-mahal.jpg"];

/* Aquí se declaró otro arreglo donde se utilizara 3 números 
para hacer su respuesta afirmativa (del 0 al 2 porque solo se 
muestran 3 valores en pantalla) durante la selección de opciones en el juego */
let correcta = [1,0,2,1,2,0,1];

// Se declaró un arreglo tipo let
let opciones = [];

// Se definen los arreglos en valores de 3 y se despliegan las (opciones)
opciones.push(["Machu Picchu", "Chichen Itza", "Coliseo"]);
opciones.push(["Coliseo", "Petra", "Cristo Redentor"]);
opciones.push(["Muralla China", "Taj Mahal", "Cristo Redentor"]);
opciones.push(["Petra", "Machu Picchu", "Taj Mahal"]);
opciones.push(["Chichen Itza", "Petra", "Muralla China"]);
opciones.push(["Petra", "Machu Pichu", "Chichen Itza"]);
opciones.push(["Coliseo", "Taj Mahal", "Cristo Redentor"]);

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
    if(maravillas.length <= posActual){
        terminarJuego();
    }
    else{
        limpiarOpciones();

        document.getElementById("imgMaravilla").src = "img/" + maravillas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

/* Función para limpiar las opciones, restaurando las clases de los elementos a su estado original */
function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";
    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
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
    document.getElementById("numIncorrectas").innerHTML = maravillas.length - cantidadAcertadas;
}

// Función para volver al inicio del juego
function volverAlInicio(){
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}

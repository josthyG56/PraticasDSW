<?php
// Datos para iniciar la sesión
$server = "localhost";
$user = "root";
$password = "";
$bd = "formato"; // Nombre correcto de la base de datos

// Conectar a la base de datos
$con = mysqli_connect($server, $user, $password, $bd);

// Verificar la conexión
if (!$con) {
    die("Error de conexión: " . mysqli_connect_error());
}

// Validar el acceso a la base de datos y Insertar los datos
if (isset($_POST['submit'])) {
    // Obtener los datos del formulario
    $Nombre = $_POST['nombre'];
    $Apellidos = $_POST['apellidos'];
    $Edad = $_POST['edad'];
    $Sexo = $_POST['sexo'];
    $Ciudad = $_POST['ciudad'];
    $Correo = $_POST['correo'];
    $Comentarios = $_POST['comentarios'];
    $Telefono = $_POST['telefono'];
    $Camisa = $_POST['camisa'];
    $Transporte = $_POST['transporte'];
    $Talla = $_POST['talla'];

    // Consulta preparada para evitar inyección SQL
    $guardar = "INSERT INTO registro (Nombre, Apellidos, Edad, Sexo, Ciudad, Correo, Comentarios, Telefono, Camisa, Transporte, Talla) VALUES ('$Nombre', '$Apellidos', '$Edad', '$Sexo', '$Ciudad', '$Correo', '$Comentarios', '$Telefono', '$Camisa', '$Transporte', '$Talla')";
    $ejecutar = mysqli_query($con, $guardar);
    $ejecutar;
    
}

// Cerrar la conexión
mysqli_close($con);
?>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <title>Registro de Contactos</title>
  <style>
    body {
      font-family: 'Crimson Pro', serif;
      height: 600px;
      width: 400px;
      margin: 50px auto;
      color: rgb(0, 0, 0);
      background-image: url(image/space.png);
      border: 2px solid #03000e;
      border-radius: 20px;
      padding: 15px;
      text-align: center;
      font-size: 20px;
    }

    div {
      font-family: 'Trebuchet MS', sans-serif;
      background-color: beige;
      border: 2px solid #03000e;
      border-radius: 20px;
      color: black;
      box-sizing: border-box;
      text-align: center;
      background-repeat: no-repeat;
      background-position: center;
      font-size: auto;
    }
  </style>
</head>

<body>
  <div>
    <h1>Registro ya Completado</h1>

    <p>Gracias por completar el formulario.</p>

    <button><a href="practica30.html">Regresar</a></button>
  </div>
</body>

</html>
<!DOCTYPE html>
<?php
  $servidor = "localhost";
  $usuario = "root";
  $clave = "";
  $bd = "registrocontactos";

  $conexion = mysqli_connect($servidor, $usuario, $clave, $bd);
 ?>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Registro de Contactos</title>
    <style>
      form {
        margin: 0 auto;
        width: 400px;
        padding: 1em;
        border: 1px solid #CCC;
        border-radius: 1em;
        background-color: #f5f5f5;
        color: #333;
      }
    </style>
  </head>
  <body>
    <form action="#" name="registrocontactos" method="post">
      <input type="text" name="Nombre" placeholder="nombre">
      <input type="text" name="Telefono" placeholder="telefono">
      <input type="text" name="Correo" placeholder="correo">
      <input type="text" name="Comentarios" placeholder="comentarios"	>
      
      <input type="submit" name="submit" value="Guardar">
    </form>
    <?php

    if (isset($_POST['submit'])) {
      
      $Nombre = $_POST['Nombre'];
      $Telefono = $_POST['Telefono'];
      $Correo = $_POST['Correo'];
      $Comentarios = $_POST['Comentarios'];
      
      $guardar = "INSERT INTO contactos (Nombre, Telefono, Correo, Comentarios) VALUES ('$Nombre', '$Telefono', '$Correo', '$Comentarios')";
      $ejecutar = mysqli_query($conexion, $guardar);
    }
    ?>
  </body>
</html>

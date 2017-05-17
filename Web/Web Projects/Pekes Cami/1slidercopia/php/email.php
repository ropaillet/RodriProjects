<?php
if($_POST){
    $name = $_POST['nombre'];
    $email = $_POST['email'];
    $message = $_POST['mensaje'];

	$texto = "La persona" + $name + ", cuyo email es " + $email + " te ha envíado el siguiente mensaje: " + $message; 
	
	//send email
	mail("consultas@pekes-eventos.com.ar", "Mensaje de pagina", $texto);
}
?>
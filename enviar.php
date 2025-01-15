<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recolectar y limpiar los datos del formulario
    $nombre = htmlspecialchars($_POST['nombre']);
    $email = htmlspecialchars($_POST['email']);
    $mensaje = htmlspecialchars($_POST['mensaje']);

    // Configurar el correo
    $to = "poeta@dichosopoeta.com";  // Cambia
    $subject = "Nuevo mensaje desde el formulario";
    $body = "Nombre: $nombre\nEmail: $email\nMensaje: $mensaje";
    $headers = "From: $email";

    // Enviar el correo
    if (mail($to, $subject, $body, $headers)) {
        echo "Mensaje enviado con éxito. Estaré en contacto pronto.";
    } else {
        echo "Hubo un error al enviar el mensaje. Inténtalo de nuevo.";
    }
}
?>

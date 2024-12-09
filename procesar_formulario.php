<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Configuración
    $destinatario = 'tu_correo@gmail.com'; // Cambia esto por tu correo de Gmail
    $asunto = 'Mensaje desde tu página web';
    
    // Obtener datos del formulario
    $categoria = htmlspecialchars($_POST['categoria']);
    $mensaje = htmlspecialchars($_POST['mensaje']);
    
    // Crear el cuerpo del correo
    $cuerpo = "Has recibido un mensaje desde tu página web:\n\n";
    $cuerpo .= "Categoría: $categoria\n\n";
    $cuerpo .= "Mensaje:\n$mensaje\n";
    
    // Cabeceras del correo
    $cabeceras = "From: no-reply@tu-dominio.com\r\n"; // Cambia esto por un dominio configurado, si tienes
    $cabeceras .= "Reply-To: $destinatario\r\n";
    
    // Enviar el correo
    if (mail($destinatario, $asunto, $cuerpo, $cabeceras)) {
        echo "Mensaje enviado correctamente.";
    } else {
        echo "Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.";
    }
} else {
    echo "Método no permitido.";
}
?>

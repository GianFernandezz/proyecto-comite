<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';

// if(isset($_POST['send'])){
    $nombre = htmlentities($_POST['nombre']);
    $email = htmlentities($_POST['email']);
    $phone = htmlentities($_POST['phone']);

    
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'no-reply@iteprevengo.com';
    $mail->Password = '#@no-Reply-iteprevengo*123'; 
    $mail->Port = 465;
    $mail->SMTPSecure = 'ssl';
    $mail->CharSet = 'UTF-8';
    $mail->isHTML(true);
    $mail->setFrom($email, $nombre);
    $mail->addAddress('marketing@iteprevengo.com');
    // $mail->addCC('kalberca@iteprevengo.com');
    
    // Asunto
    $mail->Subject = ("Contacto Landing Comité: $email ($phone)");
    $mail->Body = 'Nombre: '.$nombre. '<br>Email: '.$email. '<br>Phone: '.$phone;
    $mail->send();
    // header('Location: ./presentacion.php');
// }


?>
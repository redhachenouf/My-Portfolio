<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Mail details
    $to = "r.chenouf@outlook.com";
    $subject = "Nouveau message de votre portfolio";
    $body = "Nom: $name\nEmail: $email\nMessage:\n$message";

    // Send mail
    if (mail($to, $subject, $body)) {
        echo "Message envoyé avec succès !";
    } else {
        echo "Échec de l'envoi du message.";
    }
}
?>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    $to = "r.chenouf@outlook.com"; // Ton adresse email
    $subject = "Nouveau message depuis le portfolio";
    $headers = "From: $email";

    $body = "Nom : $name\n";
    $body .= "Email : $email\n\n";
    $body .= "Message :\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message envoyé avec succès !";
    } else {
        echo "Erreur lors de l'envoi du message. Veuillez réessayer.";
    }
} else {
    echo "Méthode non autorisée.";
}
?>

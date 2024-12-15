<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "r.chenouf@outlook.com"; // Remplace par ton adresse email
    $subject = "Nouveau message du formulaire de contact";
    $body = "Nom : $name\n";
    $body .= "Email : $email\n\n";
    $body .= "Message :\n$message\n";

    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Votre message a bien été envoyé.";
    } else {
        echo "Une erreur s'est produite. Veuillez réessayer.";
    }
} else {
    echo "Méthode non autorisée.";
}
?>

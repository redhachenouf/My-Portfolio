<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    // Vérifie si les champs sont remplis
    if (!empty($name) && !empty($email) && !empty($message)) {
        $to = "r.chenouf@outlook.com"; // Remplace par ton adresse email
        $subject = "Nouveau message depuis le portfolio";
        $body = "Nom: $name\nEmail: $email\nMessage:\n$message";
        $headers = "From: $email";

        // Envoi de l'email
        if (mail($to, $subject, $body, $headers)) {
            echo "Message envoyé avec succès.";
        } else {
            echo "Erreur lors de l'envoi du message. Réessayez plus tard.";
        }
    } else {
        echo "Veuillez remplir tous les champs du formulaire.";
    }
} else {
    echo "Méthode non autorisée.";
}
?>

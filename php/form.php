<?php
// Vérifie si la méthode POST a été utilisée
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Récupération et nettoyage des champs du formulaire
    $name = isset($_POST['name']) ? htmlspecialchars(trim($_POST['name'])) : null;
    $email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL) : null;
    $message = isset($_POST['message']) ? htmlspecialchars(trim($_POST['message'])) : null;

    // Vérifie que tous les champs sont remplis
    if (!empty($name) && !empty($email) && !empty($message)) {
        // Prépare le message de confirmation
        echo "<h2>Merci pour votre message, $name !</h2>";
        echo "<p>Votre email : <strong>" . $email . "</strong></p>";
        echo "<p>Votre message :</p>";
        echo "<blockquote>" . nl2br($message) . "</blockquote>";

        // Optionnel : Vous pouvez ajouter ici l'envoi de l'email (via mail() ou une autre bibliothèque)
        /*
        mail('ton-email@example.com', "Nouveau message de $name", $message, "From: $email");
        */
    } else {
        // Affiche un message d'erreur si un champ est vide
        echo "<h2>Erreur :</h2>";
        echo "<p>Tous les champs sont obligatoires. Veuillez remplir correctement le formulaire.</p>";
    }
} else {
    // Si la méthode n'est pas POST
    echo "<h2>Accès refusé</h2>";
    echo "<p>Cette page accepte uniquement des requêtes POST.</p>";
}
?>

<?php
// Vérifie si la méthode POST a été utilisée
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Récupère et nettoie les données envoyées via POST
    $userData = isset($_POST['variable']) ? htmlspecialchars(trim($_POST['variable'])) : null;

    // Vérifie si la variable n'est pas vide
    if (!empty($userData)) {
        echo "<h2>Merci pour votre message !</h2>";
        echo "<p>Vous avez saisi : <strong>" . $userData . "</strong></p>";
    } else {
        echo "<h2>Erreur :</h2>";
        echo "<p>Le champ ne peut pas être vide. Veuillez réessayer.</p>";
    }
} else {
    // Si la méthode n'est pas POST
    echo "<h2>Accès refusé</h2>";
    echo "<p>Cette page n'accepte que des requêtes POST.</p>";
}
?>

function sendMail() {
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (email && message) {
        // Intégration avec Elastic Email ou autre service SMTP
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "ton-email@example.com",
            Password: "TON_MOT_DE_PASSE_SMTP",
            To: 'ton-email@example.com',
            From: 'ton-email@example.com',
            Subject: "Nouveau message du portfolio",
            Body: `Message de : ${email} <br> Contenu : ${message}`
        }).then(
            response => {
                alert("Message envoyé avec succès !");
                document.getElementById('contact-form').reset(); // Réinitialise le formulaire
            }
        ).catch(error => {
            alert("Une erreur est survenue. Veuillez réessayer !");
            console.error(error);
        });
    } else {
        alert("Merci de remplir tous les champs du formulaire.");
    }
}

function sendMail() {
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (email && message) {
        // Intégration avec un service SMTP sécurisé
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "ton-email@example.com",
            Password: "TON_MOT_DE_PASSE_SMTP", // Remplace par une variable d'environnement
            To: 'ton-email@example.com',
            From: email,
            Subject: "Nouveau message du portfolio",
            Body: `Message de : ${email} <br> Contenu : ${message}`
        }).then(
            () => {
                alert("Message envoyé avec succès !");
                document.getElementById('contact-form').reset();
            }
        ).catch(error => {
            alert("Une erreur est survenue. Veuillez réessayer !");
            console.error(error);
        });
    } else {
        alert("Merci de remplir tous les champs du formulaire.");
    }
}

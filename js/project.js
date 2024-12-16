// Liste des projets
const mes_projets = [
    ['Paris Caretaker Services', 'img/pcs.png', ['Réseaux', 'Sécurité'], 'Mars, 2024', '', 'https://github.com/RedhaChenouf/pcs'],
    ['Audit de Sécurité', 'img/audit.jpg', ['Nmap', 'Metasploit'], 'Avril, 2024', '', 'https://github.com/RedhaChenouf/audit-securite'],
    ['Jeu My Navy', 'img/navy.jpg', ['C', 'Réseau'], 'Février, 2024', '', 'https://github.com/RedhaChenouf/my-navy'],
];

// Variables HTML
const projets_row = document.getElementById('projets-row');
const previewPicture = document.getElementById('preview-img');
const githubLink = document.getElementById('github-link');
const technoBox = document.getElementById('techno-box');
let currentPictureId = 'default';

// Initialisation
if (mes_projets.length > 0) changePreview(0);

// Boucle pour générer dynamiquement les projets
mes_projets.forEach((projet, i) => {
    const projetBlock = document.createElement('div');
    projetBlock.className = 'projet-block';
    projetBlock.onclick = () => changePreview(i);

    projetBlock.innerHTML = `
        <p class="btn-project">${projet[0]}</p>
        <img src="${projet[1]}" class="preview-mobile" alt="${projet[0]}">
        <div class="flexbox row-balises">
            <p style="margin-right:auto;">${projet[3]}</p>
        </div>
    `;

    projets_row.appendChild(projetBlock);
});

// Fonction pour changer l'aperçu
function changePreview(projet_id) {
    if (currentPictureId !== projet_id) {
        previewPicture.src = mes_projets[projet_id][1];
        previewPicture.style.animation = 'slideInFromLeft 0.5s ease-out';
        githubLink.href = mes_projets[projet_id][5];
        currentPictureId = projet_id;

        createTechnoBalises(projet_id);
    }
}

// Fonction pour les balises de technologies
function createTechnoBalises(projet_id) {
    technoBox.innerHTML = '';
    mes_projets[projet_id][2].forEach(techno => {
        const span = document.createElement('span');
        span.className = 'techno';
        span.textContent = techno;
        technoBox.appendChild(span);
    });
}

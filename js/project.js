// Liste des projets
const mes_projets = [
    ['Paris Caretaker Services', 'images/pcs.png', ['Réseaux', 'Sécurité'], 'Mars, 2024', 'https://example.com/pcs', 'https://github.com/RedhaChenouf/pcs'],
    ['Audit de Sécurité', 'images/audit.png', ['Nmap', 'Metasploit'], 'Avril, 2024', '', 'https://github.com/RedhaChenouf/audit-securite'],
    ['Jeu My Navy', 'images/navy.png', ['C', 'Réseau'], 'Février, 2024', '', 'https://github.com/RedhaChenouf/my-navy'],
];

// Variables pour les éléments HTML
const projets_row = document.getElementById('projets-row');
const previewPicture = document.getElementById('preview-img');
const githubLink = document.getElementById('github-link');
const previewBox = document.getElementById('preview-box');
const technoBox = document.getElementById('techno-box');
let currentPictureId = 'default';

// Initialisation de la première image
changePreview(0);

// Boucle pour générer dynamiquement les projets
for (let i = 0; i < mes_projets.length; i++) {
    const projetBlock = document.createElement('div');
    const title = document.createElement('p');
    const image = document.createElement('img');
    const rowBalises = document.createElement('div');
    const date = document.createElement('p');

    projetBlock.setAttribute('class', 'projet-block');
    rowBalises.setAttribute('class', 'flexbox row-balises');
    title.classList.add('btn-project');
    image.classList.add('preview-mobile');

    // Ajout des attributs et contenus
    title.innerHTML = mes_projets[i][0];
    image.src = mes_projets[i][1];
    date.innerHTML = mes_projets[i][3];
    date.style.marginRight = 'auto';

    projetBlock.setAttribute('onclick', `changePreview(${i})`);

    // Assemblage des éléments
    rowBalises.appendChild(date);
    projetBlock.appendChild(title);
    projetBlock.appendChild(image);
    projetBlock.appendChild(rowBalises);

    projets_row.appendChild(projetBlock);
}

// Fonction pour changer l'aperçu des projets
function changePreview(projet_id) {
    if (currentPictureId !== projet_id) {
        // Supprime et recrée l'image pour l'animation
        previewPicture.src = mes_projets[projet_id][1];
        previewPicture.style.animation = 'slideInFromLeft 0.5s ease-out';
        previewPicture.onclick = () => redirectToProject(projet_id);

        // Actualise le lien GitHub
        githubLink.href = mes_projets[projet_id][5];
        currentPictureId = projet_id;

        // Mise à jour des technologies affichées
        createTechnoBalises(projet_id, technoBox);
    }
}

// Fonction pour créer des balises de technologies
function createTechnoBalises(projet_id, div) {
    div.innerHTML = ''; // Nettoie le conteneur
    for (let t = 0; t < mes_projets[projet_id][2].length; t++) {
        const techno = document.createElement('span');
        techno.innerHTML = mes_projets[projet_id][2][t];
        techno.classList.add('techno');
        div.appendChild(techno);
    }
}

// Redirection vers les liens des projets
function redirectToProject(projet_id) {
    const url = mes_projets[projet_id][4];
    if (url) window.open(url, '_blank');
}

let firstCard = null;
let secondCard = null;
let lockBoard = true;
let moves = 0;
let matchedCount = 0;

let dimension = 150;
let imgStart = 0;

let rematch = false;
let cards = [];

let timer = null;
let elapsedSeconds = 0;

const contenant = document.getElementById("contenant");
contenant.style.display="none";
const play = document.getElementById("play");
const temps = document.getElementById("temps");

play.addEventListener('click', function () {
    play.style.display = 'none';
    initGame();
});

let temps_total;

function startTimer() {
    clearInterval(timer);
    elapsedSeconds = 0;
    temps.textContent = `Temps écoulé: 0 secondes`;

    timer = setInterval(() => {
        elapsedSeconds++;
        temps_total = elapsedSeconds;
        temps.textContent = `Temps écoulé: ${elapsedSeconds} secondes`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// --- MODIFICATION ICI : Utilisation de l'ID Picsum pour garder la même image ---
function createImages() {
    const images = [];
    for (let i = 0; i < 8; i++) {
        const randomId = Math.trunc(Math.random() * 100) + 1;
        images.push(`https://picsum.photos/id/${randomId}/${dimension}/${dimension}`);
    }
    return images;
}

function hideCard(card) {
    card.style.backgroundColor = '#ffaa00';
    card.style.backgroundImage = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23ffb100'/%3E%3Cpath d='M0 200 L200 0 L200 200 Z' fill='%23ffb800'/%3E%3C/svg%3E\")";
    card.style.backgroundAttachment = 'scroll';
    card.style.backgroundPosition = 'center';
}

function revealCard(card) {
    card.style.backgroundColor = 'transparent';
    card.style.backgroundImage = `url(${card.dataset.value})`;
}

function creation_images(url) {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.value = url;
    card.dataset.matched = 'false';
    hideCard(card);
    card.role = "button";
    card.tabIndex = '0';
    card.addEventListener('click', () => handleCardClick(card));
    contenant.appendChild(card);
}

function initGame() {
    contenant.style.display = 'grid';
    while(contenant.firstChild){
        contenant.removeChild(contenant.firstChild);
    }

    firstCard = null;
    secondCard = null;
    lockBoard = false;
    moves = 0;
    matchedCount = 0;

    if(rematch === false){
        let images = createImages();
        cards = [...images, ...images];
    }

    shuffle(cards);
    cards.forEach(creation_images);
    startTimer();
    actualize();
}

function handleCardClick(card) {
    if (lockBoard || card.dataset.matched === 'true' || card === firstCard || card === secondCard) {
        return;
    }

    if (firstCard === null) {
        firstCard = card;
        revealCard(card);
        return;
    }

    if (secondCard === null) {
        secondCard = card;
        revealCard(card);
        lockBoard = true;
        moves++;

        setTimeout(function () {
            if (firstCard.dataset.value === secondCard.dataset.value) {
                matchedCount++;
                firstCard.dataset.matched = 'true';
                secondCard.dataset.matched = 'true';
                firstCard = null;
                secondCard = null;
                lockBoard = false;
            } else {
                hideCard(firstCard);
                hideCard(secondCard);
                firstCard = null;
                secondCard = null;
                lockBoard = false;
            }

            actualize();
        }, 700);
    }
}

function actualize() {
    const textmoves = document.getElementById("moves");
    const textmatched = document.getElementById("matched");

    textmoves.textContent = `Coups joués: ${moves}`;
    textmatched.textContent = `Paires trouvées: ${matchedCount}`;

    if (matchedCount === 8) {
        victoire();
    }
}

function victoire() {
    stopTimer();

    temps.textContent = `Bravo ! Vous avez gagné en ${temps_total} secondes!`;

    play.style.display = 'block';
    play.textContent = 'Rejouer';
    lockBoard = true;
    rematch = true;
}
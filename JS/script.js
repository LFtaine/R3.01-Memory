let firstCard = null;
let secondCard = null;
let lockBoard = true;
let moves = 0;
let matchedCount = 0;

let dimension = 150;
let imgStart = 0;

let rematch= false;
let cards = [];

const contenant = document.getElementById("contenant");
const play = document.getElementById("play");

play.addEventListener('click', function () {
    play.style.display = 'none';
    initGame();
});


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createImages() {
    const images = [];
    for (let i = 0; i < 8; i++) {
        imgStart = Math.trunc(Math.random() * 100);
        images.push(`https://picsum.photos/${imgStart}/${dimension}`);
    }
    return images;
}


function hideCard(card) {
    card.style.backgroundColor = 'black';
    card.style.backgroundImage = 'none';
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
        }, 1000);
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
    play.style.display = 'block';
    play.textContent = 'Rejouer';
    lockBoard = true;
    rematch = true;
}
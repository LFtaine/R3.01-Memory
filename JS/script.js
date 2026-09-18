let firstCard =null;
let secondCard= null;
let lockBoard= false;
let moves =0;
let matchedCount=0;




let dimension= 150;
let imgStart= Math.trunc(Math.random()*100);

let images=[];
for(let i=0; i<8;i++){
    imgStart= Math.trunc(Math.random()*100);
    images[i]=`https://picsum.photos/${imgStart}/${dimension}`;

}

let cards= [...images,...images];

let contenant=document.getElementById("contenant");

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // On échange les deux places
    }
}

function initGame(){
    shuffle(cards);
    cards.forEach(creation_images);
}


function creation_images(url){
    let card=document.createElement("div");
    card.className="card";
    card.style.backgroundImage=`url(${url})`;
    card.dataset.value=url;
    card.role="button";
    card.tabIndex='0';
    card.addEventListener('click', () => handleCardClick(card));

    contenant.appendChild(card);
}

function handleCardClick(card){
    if(lockBoard){
        return;
    }

}


initGame();
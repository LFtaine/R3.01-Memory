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
    let img=document.createElement("div");
    img.className="card";
    img.style.backgroundImage=`url(${url})`;
    img.dataset.value=url;
    img.role="button";
    img.tabIndex='0';

    contenant.appendChild(img);
}

initGame();
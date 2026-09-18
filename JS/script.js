let dimension= 150;
let imgStart= Math.trunc(Math.random()*100);

let images=[];
for(let i=0; i<8;i++){
    images[i]=`https://picsum.photos/${imgStart}/${dimension}`;
}

let cards= [...images,...images];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // On échange les deux places
    }
}
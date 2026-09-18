let dimension= 150;
let imgStart= Math.trunc(Math.random()*100);

let images=[];
for(let i=0; i<8;i++){
    images[i]=`https://picsum.photos/${imgStart}/${dimension}`;
}

let cards= [...images,...images];

function shuffle(array){
    
}
const canvas = document.getElementById("game");
const enemyImg = new Image();
enemyImg.src = "assets/enemy.png";

const grassImg = new Image();
grassImg.src = "assets/grass.png";

const wallImg = new Image();
wallImg.src = "assets/wall.png";

const tile = 32;

const map = [
[1,1,1,1,1,1,1,1,1,1],
[1,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,1],
[1,1,1,1,1,1,1,1,1,1]
];

const player = {
 x:64,
 y:64,
 speed:4
};

const enemy = {
 x:320,
 y:224
};

addEventListener("keydown", e=> keys[e.key]=true);
addEventListener("keyup", e=> keys[e.key]=false);

function update(){
 if(keys["ArrowLeft"]) player.x -= player.speed;
 if(keys["ArrowRight"]) player.x += player.speed;
 if(keys["ArrowUp"]) player.y -= player.speed;
 if(keys["ArrowDown"]) player.y += player.speed;
}

function drawMap(){
 for(let y=0;y<map.length;y++){
   for(let x=0;x<map[y].length;x++){
     const img = map[y][x]===1 ? wallImg : grassImg;
     ctx.drawImage(img,x*tile,y*tile,tile,tile);
   }
 }
}

function draw(){
 ctx.clearRect(0,0,canvas.width,canvas.height);
 drawMap();
 ctx.drawImage(enemyImg,enemy.x,enemy.y,32,32);
 ctx.drawImage(playerImg,player.x,player.y,32,32);
}

function loop(){
 update();
 draw();
 requestAnimationFrame(loop);
}

loop();

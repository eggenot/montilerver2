const canvas=
 document.getElementById("game");

const ctx=
 canvas.getContext("2d");

canvas.width=640;
canvas.height=480;

const keys={};

addEventListener(
 "keydown",
 e=>keys[e.key]=true
);

addEventListener(
 "keyup",
 e=>keys[e.key]=false
);

loadGame();

function update(){

 if(keys.ArrowLeft)
   player.x-=player.speed;

 if(keys.ArrowRight)
   player.x+=player.speed;

 if(keys.ArrowUp)
   player.y-=player.speed;

 if(keys.ArrowDown)
   player.y+=player.speed;

 if(Math.random()<0.01)
   randomBattle();

}

function draw(){

 ctx.clearRect(
   0,0,
   canvas.width,
   canvas.height
 );

 ctx.fillStyle="green";

 ctx.fillRect(
   player.x,
   player.y,
   32,
   32
 );

}

function loop(){

 update();
 draw();
 showInventory();

 requestAnimationFrame(loop);

}

loop();

setInterval(
 saveGame,
 5000
);

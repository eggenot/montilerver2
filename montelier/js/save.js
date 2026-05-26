function saveGame(){

 localStorage.setItem(
   "monsterSave",
   JSON.stringify(player)
 );

}

function loadGame(){

 const data=
   localStorage.getItem("monsterSave");

 if(data){

   Object.assign(
     player,
     JSON.parse(data)
   );

 }

}

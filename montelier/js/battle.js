function randomBattle(){

 const wild=
   monsters[
     Math.floor(Math.random()*monsters.length)
   ];

 const fight=confirm(
   "Monster liar muncul: "+wild.name+
   "\\nTangkap?"
 );

 if(fight){

   if(Math.random()<wild.catchRate){

     player.party.push(wild);

     alert("Berhasil menangkap!");
   }else{
     alert("Kabur!");
   }

 }

}

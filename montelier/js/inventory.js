function showInventory(){

 document.getElementById(
   "inventoryUI"
 ).innerHTML=
 player.party
   .map(m=>m.name)
   .join("<br>");

}

function hasCollided(bullet,wall) {
 if(bullet.x+bullet.width >= wall.x){
   return true;
 }
}
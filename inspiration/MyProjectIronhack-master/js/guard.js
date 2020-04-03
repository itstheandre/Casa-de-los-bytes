class Guard{
  constructor(x,y,img){
    this.x = x;
    this.y = y;
    this.guardImg = img;
  }


  draw(){
    image(this.guardImg,this.x * 50,this.y * 50,45,45);
    this.move()
    this.checkCollision()
  }
  move(){
    if (frameCount%30 == 3){
      let randomX =Math.round(random(-1,1))
      let randomY =Math.round(random(-1,1))
      if(game.map[this.y +randomY][this.x + randomX] !==0){
        this.x += randomX
        this.y += randomY      
      }
    }
  }

  checkCollision(){
    if(this.x===player.positionY && this.y===player.positionX){
    gameover()
    }
  }

}

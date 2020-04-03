
class Player {

  setup(){
    this.image = playerImg
    this.positionX = 0;
    this.positionY = 1;
    this.hasKey = false;
  }

  draw(){
  image(this.image,this.positionY*50,this.positionX*50,50,50)
  this.keyCollision()
  this.openDoor()
  }

  moveLeft(){
    if (this.positionY > 1) this.positionY -=1
  }

  moveRight(){
    if (this.positionY < 10) this.positionY +=1
  }

  moveUp(){
    if (this.positionX > 0) this.positionX -=1
  }

  moveDown(){
    if (this.positionX < 10) this.positionX +=1
  }

  keyCollision(){
    if (this.positionX === 1 && this.positionY === 10){
     gotKey()
    }
  }
  openDoor(){
    if (this.positionX === 5 && this.positionY === 6 && this.hasKey ==true){
      soundsBGM.stop();
      noLoop();
      soundsDoor.play();
      setTimeout(() => {
        win()
        }, 2000);
      
     
    }
  }

  
}

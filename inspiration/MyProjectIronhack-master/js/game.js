
class Game {
  constructor(){
    this.map = [
      [0,1,0,0,0,0,0,0,0,0,0,0],
      [0,1,1,1,1,1,1,1,0,1,1,0],
      [0,1,0,1,1,1,0,1,1,1,1,0],
      [0,1,0,0,1,0,1,1,0,1,0,0],
      [0,1,0,1,1,0,0,0,0,1,1,0],
      [0,1,1,1,1,0,1,1,1,0,0,0],
      [0,1,1,0,0,0,0,0,1,1,1,0],
      [0,1,1,1,1,1,1,1,0,1,1,0],
      [0,0,0,1,1,0,1,0,1,1,1,0],
      [0,1,0,0,1,0,1,1,1,1,1,0],
      [0,1,1,1,1,0,1,1,0,1,1,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
    ];
    

  }

  setup(){
    this.guard1 = new Guard(7,1, imgGuard1)
    this.guard2 = new Guard(1,7, imgGuard2)
    this.guard3 = new Guard(10,10, imgGuard3)
    this.key = createSprite(525,75,40,20)
    this.key.addAnimation("key", imgKey)
    // this.key.debug = true
    this.key.setCollider("rectangle", 0, 0, 50, 50)


  }

  
  draw(){
    for (var y=0; y<this.map.length; y++) {
      for (var x=0; x<this.map[y].length; x++) {
        if ( this.map[y][x] === 0 ) image(imgWall,50*x,50*y,50,50);
        if ( this.map[y][x] === 1 ) image(imgPath,50*x,50*y,50,50);

      }
    }
    image(imgDoor,300,250,50,50);
    

    drawSprites()
    player.draw()
    this.guard1.draw()
    this.guard2.draw()
    this.guard3.draw()
    
        
  }
}
 
   
  
  




let player = new Player();
let game = new Game();
let playerImg
let gameOn = false
let gameOver = false
var timelimit = 60;

   


function setup() {

  cnv = createCanvas(600, 600);
  cnv.parent("gameCanvas")
  startButton = createImg("assets/game-controller.png");
  startButton.size(355, 355)
  startButton.position(265, 360)
  startButton.mousePressed(startGame)
  playerImg = loadImage("assets/kisspng-superman-spider-man-superhero-clip-art-minion-superhero-cliparts-5aac447537d083.6932852915212391572286.png")
  game.setup();
  player.setup(); 
}
function startGame(){
  soundsBGM.play();
  soundsBGM.loop();

  if(!gameOn && gameOver){
    gameOn = true
    location.reload()
    gameOver = false
  }else {
    gameOn = true
  }
  
}

  function draw() {
    document.querySelector('#countdown').innerHTML = `Time Left : ${timelimit}`   
  

if(gameOn === true){
 game.draw();
 player.draw();

if (frameCount % 60 == 0 && timelimit >= 0) { 
  timelimit --;
}
if (timelimit == 0) {
  gameover()
}
}
}

function keyPressed() {
  if (keyCode === 37 && game.map[player.positionX][player.positionY-1] ===1) {
    player.moveLeft()
  }else if (keyCode === 38 && game.map[player.positionX-1][player.positionY] ===1) {
    player.moveUp();
  }else if (keyCode === 39 && game.map[player.positionX][player.positionY+1] ===1){
    player.moveRight();
  }else if (keyCode === 40 && game.map[player.positionX+1][player.positionY] ===1){
    player.moveDown();
  }}


  function gameover(){
   soundsBGM.stop();
   
   soundsGameOver.play();
   textSize(80);
   text("GAME OVER", 50, 300)
   gameOn = false
   gameOver = true
  }
  
  function gotKey(){
    soundsKey.play();
    game.key.remove();
    player.hasKey = true
    }
    
 function win(){
  soundsBGM.stop();
  noLoop();
  soundsWIN.play();
    textSize(47);
    fill(255, 211, 0);
    text("YOU WIN BANANAAAA!!!!!!!", 0, 300)
   let gif_loadImg = loadImage("assets/banana.gif");
   let gif_createImg = createImg("assets/banana.gif");
    image(gif_loadImg, 50, 50);
    gif_createImg.position(150, 100);
   noLoop();
  setTimeout(() => {
    location.reload()
    }, 9000);

 }

document.onkeydown = function(event) {
  event.returnValue = false
}







  
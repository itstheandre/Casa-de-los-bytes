
let imgGuard1,
    imgGuard2,
    imgGuard3,
    imgKey,
    imgDoor,
    imgDiamond ,
    gif_loadImg,
    gif_createImg,
    imgButton,
    soundsKey,
    soundsBGM,
    soundsWIN,
    soundsGameOver,
    soundsDoor



function preload() {
 imgWall = loadImage("assets/platform_tile_021.png");
 imgPath = loadImage("assets/platform_tile_011.png");
 imgDiamond = loadImage("assets/diamond.png");
 imgDoor = loadImage("assets/door.png");
 imgKey = loadAnimation("assets/key.png");
 imgGuard1 = loadImage("assets/guard1.png");
 imgGuard2 = loadImage("assets/guard2.png");
 imgGuard3 = loadImage("assets/guard3.png");
 imgButton = loadImage("assets/game-controller.png");
 soundsBGM = loadSound('assets/bgmnew.mp3');
 soundsKey = loadSound('assets/key1.mp3');
 soundsWIN = loadSound('assets/win.mp3');
 soundsGameOver = loadSound('assets/gameover.mp3');
 soundsDoor = loadSound('assets/door.mp3');

}








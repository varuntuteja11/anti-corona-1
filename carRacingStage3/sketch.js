var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3

var track, car1_img, car2_img, car3_img

function preload(){
  track = loadImage("../images/bg1.jpeg");
//  car1_img = loadImage("../images/player.png");
 // car2_img = loadImage("../images/player.png");
 // car3_img = loadImage("../images/player.png");
 // car4_img = loadImage("../images/player.png");

  obstacle_1=loadImage("../images/corona1.png")
  obstacle_2=loadImage("../images/corona2.png")
  obstacle_3=loadImage("../images/corona3.png")
  car1_img=loadAnimation("../images/b1.png","../images/b2.png","../images/b3.png","../images/b4.png","../images/b5.png","../images/b6.png","../images/b7.png","../images/b8.png","../images/b9.png")
  car2_img=loadAnimation("../images/b1.png","../images/b2.png","../images/b3.png","../images/b4.png","../images/b5.png","../images/b6.png","../images/b7.png","../images/b8.png","../images/b9.png")
  car3_img=loadAnimation("../images/b1.png","../images/b2.png","../images/b3.png","../images/b4.png","../images/b5.png","../images/b6.png","../images/b7.png","../images/b8.png","../images/b9.png")
}

function setup(){
  canvas = createCanvas(displayWidth*5, displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 3){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}

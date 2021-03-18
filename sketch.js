var loginImg, logoImg, bg, playerImg, enemy1Img, enemy2Img, enemy3Img

var player, name, enemyGroup, fire, fireImg, bullet, bulletImg

var playImg

var  starImg

var form, game;
var gameState = 0, score = 0 

var startSound



function preload(){
  //bg = loadImage("images/background.jpg");
  loginImg = loadImage("images/login.jpg");
  playerImg = loadImage("images/player.png");
  playImg = loadImage("images/Playnow.png");
  logoImg = loadImage("images/logo.png");
  starImg = loadImage("images/star.png");
  startSound = loadSound("sounds/start.mp3")

}




function setup(){

  createCanvas(windowWidth,windowHeight);

  player = createSprite(width/2, windowHeight-20);
  player.addImage(playerImg);

  form = new Form()

  
}

function draw(){
  
 

  if(gameState === 0){
      form.display();
  }else if(gameState === 1){
      start();

  }else if(gameState ===2){
      end();
  }   
  
}

function start(){

  drawSprites();

}

function end(){

}


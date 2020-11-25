var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var passFinished = false;
var form, player, game;
var car1Img,car2Img,car3img,car4Img;
var trackImg;
var finishedPlayers = 0;
var goldImage,silverImage,bronzeImage;
var cars, car1, car2, car3, car4;
function preload(){
  goldImage = loadImage("images/gold.png");
  silverImage = loadImage("images/silver.png");
  bronzeImage = loadImage("images/bronze.png");
  car1Img =  loadImage("images/car1.png");
  car2Img =  loadImage("images/car2.png");
  car3Img =  loadImage("images/car3.png");
  car4Img =  loadImage("images/car4.png");
  trackImg =  loadImage("images/track.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(finishedPlayers === 4){
    game.update(2);
  }
  if(gameState === 2 && finishedPlayers === 4){
   game.displayRanks();
  }
}

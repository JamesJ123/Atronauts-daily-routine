var eat, eatImg;
var brush, brushImg;
var bath, bathImg;
var drink, drinkImg;
var gym, gymImg;
var BG, BGImg;
var move, moveImg;
var sleep, sleepImg;

function preload(){
  eatImg = loadAnimation("images/eat1.png", "images/eat2.png");
  brushImg = loadAnimation("images/brush.png");
  bathImg = loadAnimation("images/bath1.png", "images/bath2.png");
  drinkImg = loadAnimation("images/drink1.png", "images/drink2.png");
  gymImg = loadAnimation("images/gym1.png", "images/gym2.png");
  BGImg = loadImage("images/iss.png");
  moveImg = loadAnimation("images/move.png", "images/move1.png");
  sleepImg = loadAnimation("images/sleep.png");
}

function setup() {

  BG = createSprite(250,250,400,400);
  BG.addImage(BGImg);

  createCanvas(500,500);
  eat = createSprite(250,250,10,10);
  eat.addImage("eatImg");

  brush = createSprite(250,250,10,10);
  brush.addImage("brushImg");

  bath = createSprite(250,250,10,10);
  bath.addAnimation("bath", bathImg);

  drink = createSprite(250,250,10,10);
  drink.addAnimation("drinking", dinkImg);

  gym = createSprite(250,250,10,10);
  gym.addAnimation("exercising", gym.png);

  move = createSprite(250,250,10,10);
  move.addAnimation("moving", moveImg);

  sleep = createSprite(250,250,10,10);
  sleep.addImage("sleepImg")
}

function draw() {
  background("BG");  
  drawSprites();
}










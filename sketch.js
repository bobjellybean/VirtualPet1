var dog, database, happydog, foodstock, foodS, dog1, happydog1

function preload()
{
  dog = loadImage("images/Dog.png");
  happydog = loadImages("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  
  dog1 = createSprite(100,100);
  dog1 = addImage(happydog);

  happydog1 = createSprite(200,200);
  happydog1 = addImage(dogImg1.png);

  foodstock = database.ref('Food');
  foodstock.on("value,readstock");
}


function draw() {  
background(46,187,87);

if (keyWentDown("UP_ARROW")) {
  writeStock(foodS);
  dog1.addImage(happydog1);
}

text ("Note: Press UP_ARROW key To Feed Drago Milk!", 100, 10);
textSize(14);
fill("Neon");

  drawSprites();
}

function readStock (data) {
  foodS = data.val();
}

function writeStock(x) {
  database.ref('/').update ({
  Food : x
})
}




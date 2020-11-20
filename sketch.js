var dog, happyDog, database, foodS, foodStock, database;

function preload()
{
  database = firebase.database();
  Dog = loadImage("Dog.png");
  happyDog = loadImage("happydog.png");
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function setup() {
	createCanvas(500,500);
  dog = createSprite(240,240);
  dog.addImage(Dog);
  dog.scale = 0.09;
}


function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
    foodS = foodS-1;
  } 
  drawSprites();
  
  textSize(15);
  fill("black");
  text("food stock:"+foodS,150,350);
  
  if(foodS===0){
    text("press down arrow for more 20 bottes",150,390);
  }
  if(keyWentDown(DOWN_ARROW)){
    foodS = 20;
  }
}


function readStock(data){
    foodS = data.val();
}

function writeStock(x){

  database.ref('/').update({
    food:x
  })
}
//Variaveis//

var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

//Função setup e preload//

function preload(){
 pathImg = loadImage("path.png");
 boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,700);

 //Caminho//

 path = createSprite(200,300);
 path.addImage(pathImg);
 path.velocityY = 4;
 path.scale = 1.2;

 //Menino//

 boy = createSprite(200,350);
 boy.addAnimation("running",boyImg);
 boy.scale = 0.06;

 //Boundary esquerdo//

 leftBoundary=createSprite(0,200,25,400);
 leftBoundary.visible = false;

 //Boundary direito//

 rightBoundary = createSprite(400,200,25,400);
 rightBoundary.visible = false;
}

//Função draw//

function draw() {
   
 background(200);
 path.velocityY = 4;

 //Mouse x é colisões//

 boy.x = World.mouseX;

 edges= createEdgeSprites();
 boy.collide(edges[3]);
 boy.collide(rightBoundary);
 boy.collide(leftBoundary);

 //Reiniciar o fundo

 if (path.y > 605)
 {
   path.y = path.width / 2;
 }
 
 drawSprites();

 }





var people
var peoplegroup,gamestate=0
var playsound, plays
var nextslide,ns
var owlrules,or
var E,M,H
var start,Hu,o,s,Hw,p


function preload(){


  people=loadImage("im.jpg") ;
  plays=loadSound("sound.mp3");
  ns=loadImage("Check.jpeg") ;
  or=loadImage("rules.png") ;
  E=loadImage("easy.png");
  M=loadImage("madium.png");
  H=loadImage("hard.png");

  
  
  
  }

function setup() {
  createCanvas(displayWidth,displayHeight);
  
  
  peoplegroup=createSprite (displayWidth/2,displayHeight/2,displayWidth,displayHeight)
 
  peoplegroup.addImage(people)
  peoplegroup.scale=3
  nextslide=createSprite (displayWidth/4,displayHeight/4,100,100)
 
  nextslide.addImage(ns)
  
  

  //plays.play()
}



function draw() {
  background(255,255,255); 
  console.log(mouseX+","+mouseY) 

  if(gamestate==0){
    if(mousePressedOver(nextslide)){
      gamestate=1
    
    }
 
  }
  if(gamestate==1){
    nextslide.destroy()
    peoplegroup.destroy()
    
    //var owlrules
    owlrules=createSprite (displayWidth/2+200,displayHeight/2+200,150,200)
  owlrules.addImage(or)
  easy=createSprite(displayWidth/2+200,displayHeight/4+300,50,50)
  easy.addImage(E)
  medium=createSprite(displayWidth/2+200,displayHeight/2+200,50,50)
  medium.addImage(M)
  hard=createSprite(displayWidth/2+200,displayHeight/2+300)
  hard.addImage(H)
    if(mousePressedOver(easy)){
      //owlrules .destroy()
     // owlrules.visible=false
     
    
     gamestate=2


      //console.log("Hello")
    }
  }
  if(gamestate==2){
   owlrules.destroy()
   easy.destroy()
   medium.destroy()
   hard.destroy()
   background("black")
   var yo=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
   yo.shapeColor="black"
   start1=createSprite(74,280,5,300)
   start1.shapeColor="white"
   start2=createSprite(170,125,200,5)
   start2.shapeColor="white"
   start3=createSprite(170,430,200,5)
   start3.shapeColor="white"
   start4=createSprite(271,426,5,200)
   start4.shapeColor="white"
   Hu1=createSprite(351,280,5,300)
  Hu1.shapeColor="white"
  Hu2=createSprite(454,300,200,5)
  Hu2.shapeColor="white"
  Hu3=createSprite(551,280,5,300)
  Hu3.shapeColor="white"
  o1=createSprite(640,280,5,300)
  o1.shapeColor="white"
  o2=createSprite(845,280,5,300)
  o2.shapeColor="white"
  o3=createSprite(743,430,200,5)
  o3.shapeColor="white"
  o4=createSprite(743,125,200,5)
  o4.shapeColor="white"
  s1=createSprite(1028,122,200,5)
  s1.shapeColor="white"
  s2=createSprite(928,222,5,200)
  s2.shapeColor="white"
  s3=createSprite(1028,322,200,5)
  s3.shapeColor="white"
  s4=createSprite(1128,422,5,200)
  s4.shapeColor="white"
  s1=createSprite(1028,522,200,5)
  s1.shapeColor="white"
  Hw1=createSprite(1216,280,6,300)
  Hw1.shapeColor="white"
  Hw2=createSprite(1319,300,200,5)
  Hw2.shapeColor="white"
  Hw3=createSprite(1416,280,5,300)
  Hw3.shapeColor="white"
  p1=createSprite(542,801,5,150)
  p1.shapeColor="white"
  p2=createSprite(690,801,5,150)
  p2.shapeColor="white"
  }
  

  
 
  drawSprites();
}


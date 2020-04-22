//NameSpacing Matter.js functions
  const Engine = Matter.Engine;
  const World= Matter.World;
  const Bodies = Matter.Bodies;
//Creating Empty Arrays to store raindrops
  var rainA=[];
  var rainB=[];
  var rainC=[];
  var rainD=[];
var count
function setup() {
  //Create Canvas of 800 width and 800 height
    createCanvas(800,800);
  count=0;
  //Create Engine and world
    engine = Engine.create();
    world = engine.world;
  //creating first set of raindrops
    rainA[count]=new ARain((random(0,800)),0);
    rainB[count]=new BRain((random(0,800)),0);
    rainC[count]=new CRain((random(0,800)),0);
    rainD[count]=new DRain((random(0,800)),0);
}
function draw() {
  //Update the matter.js engine
    Engine.update(engine);
  background("black");  
  //Call Spawn Rain feature, defined after function draw
    spawnRain();
  //Display, the now full arrays with a for loop
  for(i=0;i<count;i++){
    rainA[i].display();
    rainB[i].display();
    rainC[i].display();
    rainD[i].display();
  }
}
//Defining a function called spawnRain
  function spawnRain(){
  //Spawning rain in every 10 frames
    if(frameCount%10==0){
      count++;
      //filling the array
        rainA[count]=new ARain((random(0,800)),0);
        rainB[count]=new BRain((random(0,800)),0);
        rainC[count]=new CRain((random(0,800)),0);
        rainD[count]=new DRain((random(0,800)),0);
    }
  }
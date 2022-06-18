
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var piso;
var rotator1;




function setup(){
    var canvas = createCanvas(1050,800);
    engine = Engine.create();
    world = engine.world;
    angleMode(DEGREES);
    angle = 0;


    
    var particle_options = {
      restitution:0.4,
      friction:0.02
    }
    button = createImg('New Piskel-1.png.png');
    button.position(20,30);
    button.size(50,50);
    button.mouseClicked(rotorangulo());

    
    piso = new barra(525,790,1050,10,angle);

    rotator1 = new barra(525,400,100,30,angle);
   

    

    

 
    fill("brown");
    rectMode(CENTER);
    ellipseMode(RADIUS);

}

function draw(){
  background("lightgreen");
    

  Engine.update(engine);
  piso.show();
  rotator1.show();

 
  
  
    
}
function rotorangulo(){
  rotator1.giro();
}


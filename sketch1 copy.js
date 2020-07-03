const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig1,log1,box2;
var box3,pig2,log2,box4,box5,log3,log4,bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(900,320,70,70);
    ground = new Ground(600,height,1200,20);
    pig1= new pig (810,350);
    log1 = new log(810,260,300,PI/2);

    box4 = new Box(700,240,70,70);
    box3 = new Box(900,240,70,70);
    pig2= new pig (810,220);
    log2 = new log(800,180,300,PI/2);

    box5= new Box(810,160,70,70);
    log4= new log(760,120,150,PI/7);
    log5= new log(870,120,150,-PI/7);

    bird1= new bird(220,200);

}

function draw(){
    background(0);
    Engine.update(engine);
 bird1.velocityX=10;
   
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    //box2.display();
    pig2.display();
    log2.display();
    box5.display();
    log4.display();
    log5.display();
    ground.display();
    bird1.display();
}

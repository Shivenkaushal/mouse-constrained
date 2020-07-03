
const{Engine,World,Bodies} = Matter


var engine, world,constraint=Matter.constraint,
MouseConstraint=Matter.MouseConstraint,
Mouse=Matter.Mouse;
var box1,pig1,log1,box2;
var box3,pig2,log2,box4,box5,log3,log4,bird1,birdsprite;
var mConstraint;

function setup(){
    var canvas = createCanvas(1200,400);
    
    engine = Engine.create();
    world = engine.world;
   Matter.MouseConstraint.create(engine)
  
  
    
   
    

    ground = new Ground(600,height,1200,20);
   
    log1 = new log(810,350,20,150);
 

  bird1 = new bird(80,80,100,100)
    log4= new log(550,350,20,150);
    log5= new log(680,380,250,20);
    var birdsprite_options ={
        restitution: 1,
        
    }
   

    birdsprite= Bodies.rectangle(80,80,50,50,birdsprite_options);
    World.add(world, birdsprite);
    var canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio=pixelDensity();
    console.log(canvasmouse)
    var options = {
mouse: canvasmouse
    }
   
     mConstraint=MouseConstraint.create(engine,options); 
     World.add(world, mConstraint);
}

function draw(){
    background(0);
    Engine.update(engine);
 
 MouseConstraint.mouse
ellipse (birdsprite.position.x,birdsprite.position.y,50,50);



    
    log1.display();
 
    

    log4.display();
    log5.display();
    ground.display();
}
 
   

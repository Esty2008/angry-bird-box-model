const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var plank1,plank2,plank3,plank4;
var angryBird;

function setup(){
    var canvas = createCanvas(1500,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1200,750,100,100);
    box2 = new Box(800,750,100,100);
    box3 = new Box(1200,680,100,100);
    box4 = new Box(800,680,100,100);
    box5 = new Box(1000,640,100,100);
    pig1 = new Pig(1000,750,55,55);
    pig2 = new Pig(1000,680,55,55);
    plank1 = new Log(1000,730,550,30,PI)
    plank2 = new Log(1000,660,550,30,PI)
    plank3 = new Log(840,610,200,30,PI/-3)
    plank4 = new Log(1000,610,250,30,PI/3)
    angryBird = new Bird(100,100,70,70);
    ground = new Ground(825,height,1700,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    plank1.display();
    plank2.display();
    plank3.display();
    plank4.display();
    angryBird.display();
    ground.display();
}
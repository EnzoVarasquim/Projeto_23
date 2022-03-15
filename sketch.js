const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var angle1, angle2, angle3;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();

  world = engine.world;

   var ball_options = {
    restitution: 0.99,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };

   var rotator_options ={
    isStatic: true
  };
  
  ground = Bodies.rectangle(200,400,400,20,ground_options);
  World.add(world,ground);

  wall1 = Bodies.rectangle(0,200,20,400,ground_options);
  World.add(world,wall1);
  wall2 = Bodies.rectangle(400,200,20,400,ground_options);
  World.add(world,wall2);

  block1 = Bodies.rectangle(100,250,100,10,ground_options);
  World.add(world,block1);
  block2 = Bodies.rectangle(300,250,100,10,ground_options);
  World.add(world,block2);
  block3 = Bodies.rectangle(200,150,100,20,ground_options);
  World.add(world,block3);

  ball1 = Bodies.circle(50,10,20,ball_options);
  World.add(world,ball1);
  ball2 = Bodies.circle(75,10,20,ball_options);
  World.add(world,ball2);
  ball3 = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball3);
  ball4 = Bodies.circle(150,10,20,ball_options);
  World.add(world,ball4);
  ball5 = Bodies.circle(180,10,20,ball_options);
  World.add(world,ball5);
  ball6 = Bodies.circle(220,10,20,ball_options);
  World.add(world,ball6);
  ball7 = Bodies.circle(250,10,20,ball_options);
  World.add(world,ball7);
  ball8 = Bodies.circle(300,10,20,ball_options);
  World.add(world,ball8);
  ball9 = Bodies.circle(325,10,20,ball_options);
  World.add(world,ball9);
  ball10 = Bodies.circle(350,10,20,ball_options);
  World.add(world,ball10);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background("white");
  Engine.update(engine);

  ellipse(ball1.position.x,ball1.position.y,10);
  ellipse(ball2.position.x,ball2.position.y,10);
  ellipse(ball3.position.x,ball3.position.y,10);
  ellipse(ball4.position.x,ball4.position.y,10);
  ellipse(ball5.position.x,ball5.position.y,10);
  ellipse(ball6.position.x,ball6.position.y,10);
  ellipse(ball7.position.x,ball7.position.y,10);
  ellipse(ball8.position.x,ball8.position.y,10);
  ellipse(ball9.position.x,ball9.position.y,10);
  ellipse(ball10.position.x,ball10.position.y,10);

  rect(ground.position.x,ground.position.y, 400,20);

  rect(wall1.position.x,wall1.position.y, 20,400);
  rect(wall2.position.x,wall2.position.y, 20,400);

  rect(block1.position.x,block1.position.y, 100,10);
  rect(block2.position.x,block2.position.y, 100,10);
  rect(block3.position.x,block3.position.y, 150,10);
  
}


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snow1, snow2, snow3, snow4, snow5, snow6, snow7, snow8, snow9, snow10;
var background1;

function setup() {
  createCanvas(500,500);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  background1 = loadImage('snow1.jpg')

  snow1 = new snowfall(400, 200, 10);
  snow2 = new snowfall(350, 230, 10);
  snow3 = new snowfall(210, 220, 10);
  snow4 = new snowfall(120, 210, 10);
  snow5 = new snowfall(430, 280, 10);
  snow6 = new snowfall(340, 290, 10);
  snow7 = new snowfall(260, 300, 10);
  snow8 = new snowfall(170, 310, 10);
  snow9 = new snowfall(280, 240, 10);
  snow10 = new snowfall(490, 250, 10);
}

function draw() {
  background(background1);  

  
  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
  snow8.display();
  snow9.display();
  snow10.display();

}
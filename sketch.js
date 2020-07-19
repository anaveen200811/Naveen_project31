const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var world,engine;
var particles = [];
var plinkos = [];
var divitions = [];
var divitionHight = 300;


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
 
}

function draw() {
  background(255);  
  Engine.update(engine);

  if(Count%60 === 0) {
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
  for (var k = 0;k<width; k = k+80) {
    divitions.push(new Division(k,height-divitionHight/2,10,divitionHight));
  }
  for (var j = 40;j<width;j=j+50) {
    plinkos.push(new Plinko(j,75));
  }
  for (var j = 15;j<width;j=j+50) {
    plinkos.push(new Plinko(j,175));
  }
  for (var j = 0;j<particles.length; j++) {
    particles[j].display();
  }
  for (var k = 0;k<divitions.length; k++) {
    divitions[k].display();
  }
  plinkos.display();

  particle.display();
  drawSprites();
}
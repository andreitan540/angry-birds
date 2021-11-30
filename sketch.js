const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1 , box2, box3 , box4, box5;
var ground;
var porco1 , porco2;
var tronco1, tronco2, tronco3, tronco4;
var passarinho;
var fundo;
var plataforma;
var estilingue;

    
function preload(){
fundo = loadImage("sprites/bg.png")
}


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 390, 1200, 20)

    plataforma = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    porco1 = new Porco(810, 350)
    tronco1 = new Tronco(810, 260, 300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    porco2 = new Porco(810, 220)
    tronco2 = new Tronco(810, 180, 300, PI/2);

    box5 = new Box(810,160,65,65);
    tronco3 = new Tronco(760, 120, 150, PI/7);
    tronco4 = new Tronco(870, 120, 150, -PI/7);

    passarinho = new Bird(100, 100)
   
    estilingue = new Estilingue(passarinho.body, { x: 200, y: 50 })

}

function draw(){
    background(fundo);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    porco1.display();
    tronco1.display();

    box3.display();
    box4.display();
    porco2.display();
    tronco2.display();

    box5.display();
    tronco3.display();
    tronco4.display();

    passarinho.display();

    plataforma.display();

    estilingue.display();

    
}

function mouseDragged(){
Matter.Body.setPosition(passarinho.body,{x: mouseX, y: mouseY} );

}

function mouseReleased(){
estilingue.lanca()

}

function keyPressed(){
if (keyCode === 32) {
estilingue.anexa(passarinho.body)


}

}

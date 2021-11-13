class Ground {

constructor(x, y, largura, altura){
var options = {
    isStatic: true
}

this.body = Bodies.rectangle(x, y, largura, altura, options);
    this.largura = largura;
    this.altura = altura;
    
    World.add(world, this.body);
}

display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(pos.x, pos.y, this.largura, this.altura);
  }

}
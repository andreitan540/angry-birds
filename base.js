class Base {
    constructor(x, y, width, height, angle) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;

      this.imagem = loadImage("sprites/base.png")
      
      World.add(world, this.body);
    }
  
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.imagem, 0, 0, this.width, this.height);
        pop();
        
      }
  };
  
class Tronco extends Base {
    constructor(x, y, height, angle) {
      super(x ,y ,20, height, angle );
  
      Matter.Body.setAngle(this.body, angle);
      this.imagem = loadImage("sprites/wood2.png")

    }
  };
  
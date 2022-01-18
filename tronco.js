class Tronco extends Base {
    constructor(x, y, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.5,
            'density':1.0
        }
        super(x ,y ,20, height, options);
    
        Matter.Body.setAngle(this.body, angle);
        this.imagem = loadImage("sprites/wood2.png")
    }
};
  
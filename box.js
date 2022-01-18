class Box extends Base {
     constructor(x, y, width, height) {
          var options = {
               'restitution':0.8,
               'friction':1.5,
               'density':1.0
           }
          super(x, y, width, height, options);
    
          this.imagem = loadImage("sprites/wood1.png")
     }
};

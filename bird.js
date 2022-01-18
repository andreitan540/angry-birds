class Bird extends Base {
    constructor(x, y) {
        var options = {
            'restitution':0.5,
            'friction':1.0,
            'density':1.5
        }
        super(x, y, 50, 50, options);
        this.imagem = loadImage("sprites/bird.png")
        this.fumaca = loadImage("sprites/smoke.png")
        this.trajetoria = []
    }
  
    display(){
        var posicao =this.body.position;
        
        if (this.body.velocity.x >10 && posicao.x > 300 && estado === "jogando") {
            var posicaoPassaro = [posicao.x, posicao.y]
            this.trajetoria.push(posicaoPassaro)
        }
     
        for (var item = 0; item < this.trajetoria.length; item++) {
            image(this.fumaca, this.trajetoria[item][0],this.trajetoria[item][1])
        }
        
        super.display()
    }
};
  
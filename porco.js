class Porco extends Base {
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        super(x, y, 50, 50, options);
        this.imagem = loadImage("sprites/enemy.png")
        this.visibilidade = 255
    }   

    display() {
        if (this.body.speed >4){
            this.visibilidade = this.visibilidade -5
            push()
            World.remove(world,this.body)
            tint(255,this.visibilidade)
            image(this.imagem,this.body.position.x, this.body.position.y, 50, 50)
            pop()
        } else{
            super.display()
        }
    }

    placar () {
        if (this.visibilidade < 0 && this.visibilidade > -500) {
            pontuacao = pontuacao + 1
        }
    }
  }
  
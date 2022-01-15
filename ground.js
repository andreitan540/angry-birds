class Ground {
    constructor(x, y, largura, altura){
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, largura, altura, options);
        this.largura = largura;
        this.altura = altura;
        this.imagem = loadImage("sprites/base.png")
        World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        push()
        imageMode(CENTER);
        image(this.imagem, pos.x, pos.y, this.largura, this.altura);
        pop()
    }
}
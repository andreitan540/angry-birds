class Porco extends Base {
    constructor(x, y) {
      super(x, y, 50, 50);
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
  }
  
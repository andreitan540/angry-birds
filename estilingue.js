class Estilingue {
constructor(bodyA, pontoB){
    var opcoes = {
        bodyA: bodyA, 
        pointB: pontoB,
        stiffness: 0.04,
        length: 10
   
       }
       this.restricao = Constraint.create(opcoes)
       this.estilingue1 = loadImage("sprites/sling1.png")
       this.estilingue2 = loadImage("sprites/sling2.png")
       this.estilingue3 = loadImage("sprites/sling3.png")
       this.pontoB = pontoB 
       World.add(world, this.restricao);

}
lanca() {
this.restricao.bodyA = null

}
display(){
    image(this.estilingue1, 200, 20)
    image(this.estilingue2, 170, 20)
    strokeWeight(10)
    stroke(48, 22, 8)
    if (this.restricao.bodyA) {
        line(this.restricao.bodyA.position.x +25, this.restricao.bodyA.position.y, this.pontoB.x -10, this.pontoB.y);

        line(this.restricao.bodyA.position.x +25, this.restricao.bodyA.position.y, this.pontoB.x +30, this.pontoB.y -3);
    }
  

}



}
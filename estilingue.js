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

anexa(body) {
this.restricao.bodyA = body


}
display(){

   
    image(this.estilingue1, 200, 20)
    image(this.estilingue2, 170, 20)
    if (this.restricao.bodyA) {

        var corpoA = this.restricao.bodyA.position;
        push()
        
        stroke(48, 22, 8)
       // console.log(corpoA.x)
        if (corpoA.x <250 && corpoA.x >150) {
        strokeWeight(10)
        //console.log(corpoA.x)
        image(this.estilingue3, corpoA.x -30, corpoA.y -10, 15, 30)

        } else{
            console.log(corpoA.x)    
        strokeWeight(3)

        }
        line(corpoA.x +25, corpoA.y, this.pontoB.x -10, this.pontoB.y);

        line(corpoA.x +25, corpoA.y, this.pontoB.x +30, this.pontoB.y -3);

        pop()
    }
  

}



}
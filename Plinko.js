class Plinko {
    constructor(x,y,r) {
      var options = {
          isStactic:true
      }
      this.r = r;
      this.body = Bodies.circle(x,y,this.r,options)
      World.add(world,this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        noStroke();
        fill("white");
        ellipse(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
   };
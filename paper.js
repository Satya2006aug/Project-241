class Paper {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
          isStatic: false
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.x=x;
      this.y=y;
      this.r=radius;
      
      World.add(world, this.body);
    }
    display(){
      var paperpos=this.body.position;
      push();
      translate(paperpos.x, paperpos.y);
      fill("white");
      ellipse(0,0,this.r);
      pop();
      
    }
  };
  
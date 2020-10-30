
class Bin{

constructor(x, y,width, height) {
    var options = {
        isStatic : true
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    Body.setAngle(this.body,angle)
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("green");    
    rect(pos.x,pos.y,this.width,this.height);
    pop();
  }
}
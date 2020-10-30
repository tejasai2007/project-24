class Paper{

    constructor(x,y){
        this.body = Bodies.circle(x,y,20);
        this.radius = 20;
        World.add(world,this.body);



    }

    display(){
        var pos = this.body.position;
        
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius);
        pop();
        
    }


}
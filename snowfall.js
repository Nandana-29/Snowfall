class snowfall
{
    constructor(x,y,r)
    {
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 0.5,
            density: 1.2
        }

        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, this.r/2, options);
        
        var snow;

        World.add(world, this.body);
    }
    
    display()

    {
        var snowpos = this.body.position;

        push()
        translate(snowpos.x, snowpos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill(255, 0, 255);
        ellipse(0, 0, this.r, this.r);
        pop()
    }

}


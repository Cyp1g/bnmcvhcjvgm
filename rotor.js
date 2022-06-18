class barra{
    constructor(x, y, w,h,angle)
    {
        let options = {
            isStatic: true
        };

        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        this.angle = angle;
        World.add(world, this.body); 
    }
    show() {
        let pos = this.body.position;
        push();
        rotate(this.angle);
        rectMode(CENTER);
        noStroke();
        fill(148,127,146);
        rect(pos.x,pos.y, this.w, this.h);
        pop();
      }
   giro(){
       this.angle += 45;
   }
}


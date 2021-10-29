class Player{
constructor(x,y,w,h,angle) {
    var option = {
        isStatic : true
    };
    this.body = Bodies.rectagle(x, y , w , h ,angle, options);
    this.image = loadImage("./assets/player.png");
    World.add(world, this.body);
}

display () {
    
        if(keyIsDown(RIGHT_ARROW)&& this.angle<70){
          this.angle += 1 
        }
    
        if(keyIsDown(LEFT_ARROW)&& this.angle>-30){
          this.angle -= 1 
        }


    push();
    translate(this.x, this.y, this.w, this.h);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.cannon_image, 0, 0, this.width, this.height);
    pop();
    image(this.cannon_base, 70, 20, 200, 200);
    noFill();
}
}

  
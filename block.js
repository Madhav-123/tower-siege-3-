class Block{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.4,
            friction :1.0,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visibility=255;
        World.add(world, this.body);
      }
      display(){
        
      if(this.body.speed <7){
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width, this.height);
      pop();
    }else{
      push();
      World.remove(world, this.body);
      tint(255,this.Visiblity);
      
      this.visibility = this.visibility -5;
      
      pop();
      
    }
        
      }
}
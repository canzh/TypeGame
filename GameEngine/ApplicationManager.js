function ApplicationManager() {
 this.startupApplicationManager=function() {
  this.bounce=new Bounce().startupBounce(g_image);   
  return this;
 };
}

function Bounce() {
    this.xDirection=1;
    this.yDirection=1;
    this.speed=10;
    
    this.startupBounce=function(image) {
      this.startupVisualGameObject(image, 0, 0, 0);
      return this;
    };
    
    this.update=function(dt, context, xScroll, yScroll) {
     this.x+=dt*this.speed*this.xDirection;
     this.y+=dt*this.speed*this.yDirection;
     
     if(this.x>=450) {
      this.x=450;
      this.xDirection=-1;
     }
     else if(this.x<=0) {
      this.x=0;
      this.xDirection=1;
     }
     
     if(this.y>=250) {
      this.y=250;
      this.yDirection=-1;
     }
     else if(this.y<=0) {
      this.y=0;
      this.yDirection=1;
     }
    };
}

Bounce.prototype=new VisualGameObject();
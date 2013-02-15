function GameObject() {
 this.zOrder=0;
 this.x=0;
 this.y=0;
 
 this.startupGameObject=function(x,y,z) {
  this.zOrder=z;
  this.x=x;
  this.y=y;
  g_GameObjectManager.addGameObject(this);
  
  return this;
 };
 
 this.shutdownGameObject=function() {
  g_GameObjectManager.removeGameObject(this);   
 };
}

function VisualGameObject() {
 this.image=null;
 
 this.draw=function(dt, context, xScroll, yScroll) {
     context.drawImage(this.image, this.x-xScroll, this.y-yScroll);
 };
 
 this.startupVisualGameObject=function(image, x, y, z) {
     this.startupGameObject(x,y,z);
     this.image=image;
     return this;
 };
 
 this.shutdownVisualGameObject=function() {
   this.shutdownGameObject();  
 };
}

VisualGameObject.prototype=new GameObject();
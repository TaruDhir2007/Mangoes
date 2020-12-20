class Stone{
    constructor(x, y, width , height, options){
        var options ={
        isStatic : true
        }
    
    this.image = loadImage("stone.png");    
    this.body = Bodies.rectangle(120, 680, 40, 40, options)
    this.x = 600;
    this.y = 450;
    World.add(world, this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image , 120, 680, 40, 40);
    }}
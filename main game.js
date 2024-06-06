let birdy;

function setup(){

    createCanvas(900, 600);
    birdy = createSprite(
      400, 540, 50, 50);
    birdy.shapeColor = color(0);

}

function draw(){
    background(250, 219, 216);
    if (keyIsPressed === true ) {
        birdy.position.y -= 20
    }




drawSprites();
}
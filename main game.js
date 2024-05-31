let birdy;

function setup(){

    createCanvas(900, 600);
    birdy = createSprite(
      400, 540, 50, 50);
    birdy.shapeColor = color(0);

}

function draw(){
    background(250, 219, 216);
    if (keyIsDown(87) === true || (keyIsDown(KEY_DOWN) === true)) {
        birdy.position.y -= 10
      }
drawSprites();
}
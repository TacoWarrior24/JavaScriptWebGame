const canvas = document.getElementById("gameArea")
const ctx = canvas.getContext("2d");

let x = 100;
let y = 100;

let red_x = 300;
let red_y = 300;

let radius = 50;
let speed = 5;

let downPressed = false;
let upPressed = false;
let leftPressed = false;
let rightPressed = false;

//Game Loop
function drawGame() {
    requestAnimationFrame(drawGame);
    clearScreen();
    inputs();
    boundryCheck();
    drawRedBlob();
    drawGreenBlob();
}

function boundryCheck(){
    //up
    if (y < radius){
        y = radius;
    }
    //down
    if (y > canvas.height - radius){
        y = canvas.height - radius;
    }
    //left
    if (x < radius){
        x = radius;
    }
    //right
    if (x > canvas.width - radius){
        x = canvas.width - radius;
    }
}

function inputs(){
    if (downPressed) {
        y = y + speed;
    }
    if (upPressed) {
        y = y - speed;
    }
    if (leftPressed) {
        x = x - speed;
    }
    if (rightPressed) {
        x = x + speed;
    }
}

function drawGreenBlob() {
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(x,y, radius,0, Math.PI * 2);
    ctx.fill();
}

function drawRedBlob() {
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(red_x,red_y, radius/2 ,0, Math.PI * 2);
    ctx.fill();
}

function clearScreen() {
    ctx.fillStyle = "black";
    ctx.fillRect(0,0, canvas.width, canvas.height);
}

document.body.addEventListener('keydown', keyDown)
document.body.addEventListener('keyup', keyUp)

function keyDown(event){
    //down
    if(event.keyCode == 40){
        downPressed = true;
    }
    //up
    if(event.keyCode == 38){
        upPressed = true;
    }
    //left
    if(event.keyCode == 37){
        leftPressed = true;
    }
    //right
    if(event.keyCode == 39){
        rightPressed = true;
    }
}

function keyUp(event){
    //down
    if(event.keyCode == 40){
        downPressed = false;
    }
    //up
    if(event.keyCode == 38){
        upPressed = false;
    }
    //left
    if(event.keyCode == 37){
        leftPressed = false;
    }
    //right
    if(event.keyCode == 39){
        rightPressed = false;
    }
}


drawGame();
//setInterval(drawGame,1000/60);
const canvas = document.getElementById("gameArea")
const ctx = canvas.getContext("2d");

let x = 100;
let y = 100;
let radius = 50;
let speed = 10;

let downPressed = false;
let upPressed = false;
let leftPressed = false;
let rightPressed = false;

//Game Loop
function drawGame() {
    requestAnimationFrame(drawGame);
    clearScreen();
    inputs();
    drawGreenBlob();
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
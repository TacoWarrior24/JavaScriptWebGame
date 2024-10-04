const canvas = document.getElementById("gameArea")
const ctx = canvas.getContext("2d");

const neonColors = [
    '#39FF14', // Neon Green
    '#FF073A', // Neon Red
    '#0FF0FC', // Neon Cyan
    '#FF77FF', // Neon Pink
    '#FFD700', // Neon Yellow
    '#FF1493', // Neon Deep Pink
    '#32CD32', // Neon Lime Green
    '#8A2BE2', // Neon Purple
    '#00CED1', // Neon Turquoise
    '#FF4500'  // Neon Orange Red
];

let x = 100;
let y = 100;

let radius = 50;
let speed = 5;

let red_radius = 25;
let red_x = randomNumber(red_radius, canvas.width - red_radius);
let red_y = randomNumber(red_radius, canvas.height - red_radius);

let currentScore = 0;

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
    gameLoop();
    drawRedBlob();
    drawGreenBlob();
    gameLoop();
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

function gameLoop() {
    let dx = x - red_x;
    let dy = y - red_y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    let sumOfRaddii = radius + red_radius

    if (distance + 15 < sumOfRaddii){
        red_x = randomNumber(red_radius, canvas.width - red_radius);
        red_y = randomNumber(red_radius, canvas.height - red_radius);

        const scoreElement = document.getElementById('score');
        currentScore++;
        scoreElement.textContent = `Score: ${currentScore}`;

        const randomColor = neonColors[Math.floor(Math.random() * neonColors.length)];
        document.body.style.backgroundColor = randomColor;

    } else if (distance == sumOfRaddii){
        //perfect edge
    } else if (distance > sumOfRaddii){
        //no collision
    }

};

function drawRedBlob() {
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(red_x,red_y, red_radius ,0, Math.PI * 2); //update this if red circle changes size
    ctx.fill();
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

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

drawGame();
//setInterval(drawGame,1000/60);
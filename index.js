const canvas = document.getElementById("gameArea")
const ctx = canvas.getContext("2d");

let x = 100;
let y = 100;
let radius = 50;

//Game Loop
function drawGame() {
    clearScreen();
    drawGreenBlob();
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

drawGame();
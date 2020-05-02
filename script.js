var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var bullet = 1;
var mposX;
var mposY;
var targetX;
var targetY;
var targetRadius;
var distance;
var score = 0;
var lives = 10;
var color = "blue";

document.addEventListener("click", mousePosition);

function mousePosition(event) {
   if (lives != 0 && bullet == 1) {
      //getting coordinates of mouse click
      mposX = event.clientX ;
      mposY = event.clientY ;
      detectHits();
   }else {
     document.getElementById('score').innerHTML = "Game Over";
     clearInterval(game);
   }
}

function detectHits() {
  //calculating distance between target center and mouse click to detect hits
  distance = Math.round(Math.sqrt(Math.pow((targetX - mposX), 2) + Math.pow((targetY - mposY), 2)));
  if (distance <= targetRadius) {
      bullet = 0;
      if (distance < 3) {
          drawTarget("red");
          score = score + 10;
      }else {
          drawTarget("#fb6901");
          score = score + 5;
      }
  }else {
      drawTarget("yellow");
      lives--;
  }
  document.getElementById('score').innerHTML = "Score: " + score;
}

function target() {
  //setting target coordinates
  bullet = 1;
  ctx.clearRect(0, 0, 1000, 600);
  targetX = Math.floor((Math.random() * 800) + 20);
  targetY = Math.floor((Math.random() * 500) + 20);
  targetRadius = Math.floor((Math.random() * 20) + 8);
  drawTarget("blue");
}

function drawTarget(color) {
  //drawing target
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(targetX,targetY,targetRadius,0,2 * Math.PI);
  ctx.closePath();
  ctx.fill();
}

var game = setInterval(target ,1100);

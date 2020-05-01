var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var mposX;
var mposY;
var targetX;
var targetY;
var targetRadius;
var distance;
var score = 0;

function target() {
  ctx.clearRect(0, 0, 1000, 600);
  targetX = Math.floor((Math.random() * 800) + 20);
  targetY = Math.floor((Math.random() * 500) + 20);
  targetRadius = Math.floor((Math.random() * 20) + 8);
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(targetX,targetY,targetRadius,0,2 * Math.PI);
  ctx.closePath();
  ctx.fill();

  function mousePosition(event) {
     mposX = event.clientX ;
     mposY = event.clientY ;
     detectHits();
  }

  function detectHits() {
    distance = Math.round(Math.sqrt(Math.pow((targetX - mposX), 2) + Math.pow((targetY - mposY), 2)));
    if (distance <= targetRadius) {
      /*if (distance < 2) {
        score = score + 5;
      }else {
        score = score + 1;
      }*/
      score++;
      document.getElementById('score').innerHTML = "Score: " + score;
    }
  }

  document.addEventListener("click", mousePosition);

  setTimeout(target ,2000);
}

target();

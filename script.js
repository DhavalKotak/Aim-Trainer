var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var height = 600;
var width = 1000;

function target() {
  ctx.clearRect(0, 0, width, height);
  var targetX = Math.floor((Math.random() * 800) + 20);
  var targetY = Math.floor((Math.random() * 500) + 20);
  var targetRadius = Math.floor((Math.random() * 20) + 7);
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(targetX,targetY,targetRadius,0,2* Math.PI);
  ctx.closePath();
  ctx.fill();
  setTimeout(target ,900);
}
target();

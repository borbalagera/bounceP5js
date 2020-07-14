var ballx = 320;
var bally = 180;
var xspeed = 6;
var yspeed = 2;
var r = 15;

var oppy = 250;
var playerX = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  stroke(51);
  strokeWeight(10);
  rect(playerX, mouseY - 50, 10, 100);
  stroke(51);
  strokeWeight(10);
  rect(windowWidth - 10, oppy, 10, 100);

  strokeWeight(1);
  ellipse(ballx, bally, r * 2, r * 2);
  ballMove();
  moveOpp();

  function ballMove() {
    ballx += xspeed;
    bally += yspeed;

    if (ballx < 25 && mouseY - 50 < bally && mouseY + 50 > bally) {
      re = random(0, 255);
      g = random(0, 255);
      b = random(0, 255);
      fill(re, g, b);
      stroke(re, g, b);
      xspeed *= -1;
    }
    if (ballx < 0) {
      resetBall();
    }
    if (ballx > windowWidth - 25 && bally > oppy && bally < oppy + 100) {
      xspeed *= -1;
      re = random(0, 255);
      g = random(0, 255);
      b = random(0, 255);
      fill(re, g, b);
      stroke(re, g, b);
    }

    if (ballx > windowWidth) {
      resetBall();
    }
    if (bally < 10) {
      yspeed *= -1;
    }

    if (bally > windowHeight) {
      yspeed *= -1;
    }
  }

  function moveOpp() {
    let middle = oppy + 100 / 2;
    if (middle < bally + 25) {
      oppy += 4;
    }
    if (middle > bally - 25) {
      oppy -= 4;
    }
  }
}

function resetBall() {
  ballx = width / 2;
  bally = height / 2;
  re = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  fill(re, g, b);
  stroke(re, g, b);
  xspeed *= -1;
}

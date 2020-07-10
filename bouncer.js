let x = 320;
let y = 180;
let xspeed = 6;
let yspeed = 2;
let r = 15;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  ellipse(x, y, r * 2, r * 2);
  x += xspeed;
  y += yspeed;
  if (x > width - r || x < r) {
    xspeed = -xspeed;
    re = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
    fill(re, g, b);
    stroke(re, g, b);
  }
  if (y > height - r || y < r) {
    yspeed = -yspeed;
    re = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
    fill(re, g, b);
    stroke(re, g, b);
  }
}

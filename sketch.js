var sketch = function (p) {
  p.x = 150;
  p.y = 150;
  p.asset;
  p.asset2;
  p.asset3;
  p.preload = function () {
    p.asset = p.loadModel("models/metaverse.obj");
    p.asset2 = p.loadModel("models/ground.obj");
    p.asset3 = p.loadModel("models/sky.obj");
  };
  p.setup = function () {
    p.createCanvas(p.x, p.y, p.WEBGL);
  };
  p.draw = function () {
    p.background("#007c85");

    p.noStroke();
    p.smooth();
    p.translate(0, 21, 0);
    p.push();
    p.translate(-4, 1, 0);
    p.fill(250);
    p.model(p.asset3);
    p.pop();
    p.fill(255);
    p.lights();
    p.push();
    p.ambientMaterial(255);
    p.rotateY(p.frameCount * 0.01);
    p.model(p.asset);
    p.pop();
    p.fill(0);
    p.model(p.asset2);
  };
};
var p5Instance = new p5(sketch, "logo");

var sketch2 = function (q) {
  q.x = 300;
  q.y = 300;
  q.cx;
  q.cy;
  q.c2x;
  q.c2y;
  q.radius;

  q.setup = function () {
    q.createCanvas(q.x, q.y);
    q.colorMode(q.HSL);
    q.cx = q.width / 2;
    q.cy = q.height / 2;
    q.c2x = q.width / 2;
    q.c2y = q.height / 2;
    q.radius = q.width / 5;
  };
  q.draw = function () {
    q.clear();
    q.cx = q.mouseX;
    q.cy = q.mouseY;
    if (
      q.sqrt(
        (q.mouseX - q.c2x) * (q.mouseX - q.c2x) +
          (q.mouseY - q.c2y) * (q.mouseY - q.c2y)
      ) > q.radius
    ) {
      q.c2x = q.c2x + (q.cx - q.c2x) / 32;
      q.c2y = q.c2y + (q.cy - q.c2y) / 32;
    }

    q.steps = 32;

    for (i = 0; i < q.steps; i++) {
      q.alpha = (2 * q.PI * i) / q.steps;
      q.stroke(100, 100, 90);
      q.line(
        q.cx,
        q.cy,
        q.c2x + q.radius * q.cos(q.alpha),
        q.c2y + q.radius * q.sin(q.alpha)
      );
    }
  };
};
var p5Instance2 = new p5(sketch2, "p5Sphere");

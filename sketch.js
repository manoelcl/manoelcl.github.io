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

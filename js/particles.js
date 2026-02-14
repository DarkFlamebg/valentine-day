export class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.baseX = x;
    this.baseY = y;

    this.size = Math.random() * 4 + 10;
    this.alpha = 0;
    this.appearSpeed = Math.random() * 0.02 + 0.01;

    this.offset = Math.random() * Math.PI * 2;
  }

  update(time, mouse) {
    if (this.alpha < 1) {
      this.alpha += this.appearSpeed;
    }

    let dx = this.baseX - mouse.x;
    let dy = this.baseY - mouse.y;
    let distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < mouse.radius) {
      let force = (mouse.radius - distance) / mouse.radius;
      this.x += dx * force * 0.03;
      this.y += dy * force * 0.03;
    } else {
      this.x += (this.baseX - this.x) * 0.05;
      this.y += (this.baseY - this.y) * 0.05;
    }

    // micro latido individual
    this.x += Math.sin(time * 0.002 + this.offset) * 0.5;
    this.y += Math.cos(time * 0.002 + this.offset) * 0.5;
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.scale(this.size / 10, this.size / 10);
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = '#e63946';

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(-5, -5, -10, 2, 0, 10);
    ctx.bezierCurveTo(10, 2, 5, -5, 0, 0);
    ctx.fill();

    ctx.restore();
  }
}
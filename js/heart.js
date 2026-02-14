import { Particle } from './particles.js';

const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');

let particles = [];
let time = 0;

const mouse = {
  x: undefined,
  y: undefined,
  radius: 100
};

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

window.addEventListener('mousemove', e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

window.addEventListener('touchmove', e => {
  mouse.x = e.touches[0].clientX;
  mouse.y = e.touches[0].clientY;
});

window.addEventListener('mouseleave', () => {
  mouse.x = undefined;
  mouse.y = undefined;
});

function heartEquation(t) {
  return {
    x: 16 * Math.pow(Math.sin(t), 3),
    y:
      13 * Math.cos(t) -
      5 * Math.cos(2 * t) -
      2 * Math.cos(3 * t) -
      Math.cos(4 * t)
  };
}

function createHeart() {
  particles = [];
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2 - 40;

  for (let t = 0; t < Math.PI * 2; t += 0.045) {
    const pos = heartEquation(t);
    particles.push(
      new Particle(
        centerX + pos.x * 12,
        centerY - pos.y * 12
      )
    );
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  time++;

  const pulse = 1 + Math.sin(time * 0.03) * 0.03;

  ctx.save();
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.scale(pulse, pulse);
  ctx.translate(-canvas.width / 2, -canvas.height / 2);

  particles.forEach(p => {
    p.update(time, mouse);
    p.draw(ctx);
  });

  ctx.restore();

  requestAnimationFrame(animate);
}

createHeart();
animate();

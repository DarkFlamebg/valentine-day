// Elementos del DOM
const buttons = document.querySelectorAll('button[data-target]');
const sections = document.querySelectorAll('.section');
const canvas = document.getElementById('heartCanvas');
const goFlowers = document.getElementById('goFlowers');

// Navegación entre secciones
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target;

    // Si el target es "goPoems", redirigir a poema.html
    if (target === 'goPoems') {
      window.location.href = 'poemas.html';
      return; // Detener la ejecución aquí
    }

    // Remover clase active de todas las secciones
    sections.forEach(sec => sec.classList.remove('active'));

    // Manejar el canvas según la sección
    if (target === 'hero') {
      // Mostrar canvas en hero
      canvas.style.opacity = '1';
      canvas.style.transform = 'translateY(0) scale(1)';
    } else {
      // Ocultar canvas en otras secciones
      canvas.style.opacity = '0';
      canvas.style.transform = 'translateY(-40px) scale(0.95)';
    }

    // Activar la sección destino
    const targetSection = document.getElementById(target);
    if (targetSection) {
      targetSection.classList.add('active');
    }
  });
});

// Botón de flores
if (goFlowers) {
  goFlowers.addEventListener('click', () => {
    window.location.href = 'flowers.html';
  });
}

// Detectar movimiento del mouse para interacción con el canvas
document.addEventListener('mousemove', (e) => {
  if (canvas && canvas.style.opacity === '1') {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    // Efecto parallax sutil en el canvas
    const moveX = (x - 0.5) * 10;
    const moveY = (y - 0.5) * 10;
    
    canvas.style.transform = `translate(${moveX}px, ${moveY}px)`;
  }
});

console.log('✅ Navigation loaded successfully');
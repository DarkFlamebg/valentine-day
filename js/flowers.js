// Seleccionar todas las flores
const flowers = document.querySelectorAll('.flower');

// Animación de crecimiento al cargar
window.addEventListener('load', () => {
  flowers.forEach((flower, index) => {
    setTimeout(() => {
      flower.style.opacity = '1';
      flower.style.transform = 'scale(1)';
    }, index * 300);
  });
});

// Efecto de movimiento con el mouse
document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;

  flowers.forEach((flower, i) => {
    // Calcular offset basado en la posición del mouse
    const offsetX = (mouseX - 0.5) * (i + 1) * 4;
    const offsetY = (mouseY - 0.5) * (i + 1) * 2;
    
    // Aplicar transformación suave
    const rotation = offsetX * 1.5;
    const tilt = offsetY * 0.5;
    
    flower.style.transform = `
      rotate(${rotation}deg) 
      rotateX(${tilt}deg)
      scale(1)
    `;
  });
});

// Efecto de inclinación en dispositivos móviles (si está disponible)
if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', (e) => {
    const tiltX = e.gamma; // Inclinación izquierda-derecha (-90 a 90)
    const tiltY = e.beta;  // Inclinación adelante-atrás (-180 a 180)

    flowers.forEach((flower, i) => {
      const rotation = (tiltX / 90) * 10 * (i + 1);
      const tilt = (tiltY / 180) * 5 * (i + 1);
      
      flower.style.transform = `
        rotate(${rotation}deg) 
        rotateX(${tilt}deg)
        scale(1)
      `;
    });
  });
}

// Resetear posición al salir del área
document.addEventListener('mouseleave', () => {
  flowers.forEach(flower => {
    flower.style.transform = 'rotate(0deg) rotateX(0deg) scale(1)';
  });
});

// Inicializar opacidad
flowers.forEach(flower => {
  flower.style.opacity = '0';
  flower.style.transition = 'all 0.3s ease-out';
});

console.log('🌸 Flowers script loaded - ' + flowers.length + ' flowers found');
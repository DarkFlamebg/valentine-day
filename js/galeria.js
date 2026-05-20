document.addEventListener('DOMContentLoaded', () => {
  createFloatingHearts();
  
  // Efecto de entrada suave
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.8s ease-in';
    document.body.style.opacity = '1';
  }, 100);

  // Lightbox functionality
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  const images = document.querySelectorAll('.image-item img');

  images.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      // Pequeño timeout para asegurar que display:flex aplique antes de añadir la clase active (para la animación)
      setTimeout(() => {
        lightbox.classList.add('active');
      }, 10);
      lightboxImg.src = img.src;
      document.body.style.overflow = 'hidden';
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    setTimeout(() => {
      lightbox.style.display = 'none';
      lightboxImg.src = '';
    }, 300); // Coincide con la transición CSS
    document.body.style.overflow = '';
  };

  lightboxClose.addEventListener('click', closeLightbox);
  
  lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
});

function createFloatingHearts() {
  const container = document.getElementById('floatingHearts');
  if (!container) return;
  
  const hearts = ['❤️', '💕', '💖', '💗', '💓', '💞', '✨'];
  
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDelay = Math.random() * 15 + 's';
    heart.style.animationDuration = (12 + Math.random() * 12) + 's';
    heart.style.fontSize = (1.5 + Math.random() * 2) + 'rem';
    
    container.appendChild(heart);
  }
}

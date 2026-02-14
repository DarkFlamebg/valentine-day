// ===================================
// POEMAS - Sistema Interactivo
// ===================================

// Contenido de los poemas
const poemas = {
  1: {
    icon: '💕',
    title: 'Tu Sonrisa',
    content: `
      <p class="verse">Tu risa es la melodía que mi alma espera,</p>
      <p class="verse">un susurro de primavera en medio del invierno.</p>
      <p class="verse">En tus ojos encuentro constelaciones,</p>
      <p class="verse">universos enteros de posibilidades.</p>
      <br>
      <p class="verse">Cada palabra tuya es un poema sin escribir,</p>
      <p class="verse">cada silencio, una sinfonía por descubrir.</p>
      <p class="verse">Me gustas en cada instante que respiro,</p>
      <p class="verse">en cada latido que tu presencia inspira.</p>
    `
  },
  2: {
    icon: '🌹',
    title: 'Como una Rosa',
    content: `
      <p class="verse">Eres el jardín donde mi alma florece,</p>
      <p class="verse">la rosa más bella que el amor merece.</p>
      <p class="verse">Tus pétalos suaves como terciopelo,</p>
      <p class="verse">son el refugio de mi anhelo.</p>
      <br>
      <p class="verse">En tu fragancia encuentro la paz,</p>
      <p class="verse">en tu belleza, mi verdad.</p>
      <p class="verse">Como la rosa necesita del sol,</p>
      <p class="verse">yo te necesito a ti, mi amor.</p>
    `
  },
  3: {
    icon: '✨',
    title: 'Eternidad',
    content: `
      <p class="verse">En cada instante contigo, el tiempo se detiene,</p>
      <p class="verse">la eternidad cabe en un abrazo que me sostiene.</p>
      <p class="verse">No necesito más que este momento,</p>
      <p class="verse">donde tu amor es mi firmamento.</p>
      <br>
      <p class="verse">Los relojes pueden seguir corriendo,</p>
      <p class="verse">pero yo aquí estaré, siempre creyendo</p>
      <p class="verse">que lo nuestro trasciende el espacio y tiempo,</p>
      <p class="verse">es un amor eterno, puro y sincero.</p>
    `
  },
  4: {
    icon: '💝',
    title: 'Mi Universo',
    content: `
      <p class="verse">Eres la estrella que ilumina mis noches,</p>
      <p class="verse">el sol que calienta mis días.</p>
      <p class="verse">En ti encuentro mi galaxia completa,</p>
      <p class="verse">mi universo de alegrías.</p>
      <br>
      <p class="verse">Gravitas en mi corazón constantemente,</p>
      <p class="verse">como la luna al mar, inevitablemente.</p>
      <p class="verse">Eres el cosmos que siempre soñé,</p>
      <p class="verse">el infinito en el que me perdí y me encontré.</p>
    `
  },
  5: {
    icon: '🦋',
    title: 'Mariposas',
    content: `
      <p class="verse">En mi pecho revolotean mil alas,</p>
      <p class="verse">mariposas que tú despertaste.</p>
      <p class="verse">Con cada mirada tuya, vuelan más alto,</p>
      <p class="verse">con cada sonrisa, el cielo se hace más vasto.</p>
      <br>
      <p class="verse">Son testigos de este amor que siento,</p>
      <p class="verse">transforman mi mundo en un cuento.</p>
      <p class="verse">Y aunque son frágiles, son eternas,</p>
      <p class="verse">como este amor que por ti se gobierna.</p>
    `
  },
  6: {
    icon: '🌙',
    title: 'Luna y Mar',
    content: `
      <p class="verse">Como la luna al mar, me atraes,</p>
      <p class="verse">con una fuerza que no puedo explicar.</p>
      <p class="verse">Mis olas se alzan con tu presencia,</p>
      <p class="verse">y bajan con tu ausencia.</p>
      <br>
      <p class="verse">Eres mi marea alta y mi calma,</p>
      <p class="verse">la que mueve las corrientes de mi alma.</p>
      <p class="verse">Y así como el mar necesita la luna,</p>
      <p class="verse">yo te necesito a ti, mi fortuna.</p>
    `
  },
  7: {
    icon: '📩',
    title: 'Ábrelo cuando dejemos de hablar',
    content: `
      <p class="verse">Si un día el silencio se instala entre nosotros,</p>
      <p class="verse">y las palabras ya no cruzan el puente,</p>
      <p class="verse">abre esto.</p>
      <br>
      <p class="verse">No para buscar culpables,</p>
      <p class="verse">ni para reescribir lo que fue,</p>
      <p class="verse">sino para recordar que existimos</p>
      <p class="verse">de una manera que fue verdadera.</p>
      <br>
      <p class="verse">Me gustaste incluso en los días simples,</p>
      <p class="verse">en las conversaciones sin importancia,</p>
      <p class="verse">en los silencios compartidos</p>
      <p class="verse">que decían más que cualquier promesa.</p>
      <br>
      <p class="verse">Si dejamos de hablar,</p>
      <p class="verse">quiero que sepas que no fue indiferencia.</p>
      <p class="verse">Fue miedo, fue tiempo, fue destino...</p>
      <p class="verse">pero nunca fue falta de sentir.</p>
      <br>
      <p class="verse">Y si alguna vez dudas,</p>
      <p class="verse">recuerda que hubo alguien</p>
      <p class="verse">que te miró como quien encuentra algo</p>
      <p class="verse">que no se repite dos veces en la vida.</p>
    `
  }

};

// ===================================
// Elementos del DOM
// ===================================
const poemCards = document.querySelectorAll('.poem-card');
const poemPopup = document.getElementById('poemPopup');
const popupOverlay = document.getElementById('popupOverlay');
const popupClose = document.getElementById('popupClose');
const popupIcon = document.getElementById('popupIcon');
const popupTitle = document.getElementById('popupTitle');
const popupBody = document.getElementById('popupBody');

// ===================================
// Funciones
// ===================================

// Abrir popup
function openPoem(poemId) {
  const poema = poemas[poemId];
  
  if (!poema) return;
  
  // Actualizar contenido
  popupIcon.textContent = poema.icon;
  popupTitle.textContent = poema.title;
  popupBody.innerHTML = poema.content;
  
  // Mostrar popup
  poemPopup.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  // Crear corazones flotantes
  createPopupHearts();
  if (poemId === "7") {
  poemPopup.classList.add('special-poem');
}

}

// Cerrar popup
function closePoem() {
  poemPopup.classList.remove('active');
  document.body.style.overflow = '';
}

// Crear corazones flotantes en el popup
function createPopupHearts() {
  const hearts = ['❤️', '💕', '💖', '💗', '💓', '💞'];
  const popupContent = document.querySelector('.popup-content');
  
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      heart.style.position = 'absolute';
      heart.style.fontSize = '1.5rem';
      heart.style.pointerEvents = 'none';
      heart.style.left = Math.random() * 100 + '%';
      heart.style.bottom = '0';
      heart.style.opacity = '0';
      heart.style.zIndex = '1';
      
      popupContent.appendChild(heart);
      
      // Animar
      const animation = heart.animate([
        {
          transform: 'translateY(0) scale(0.5)',
          opacity: 0
        },
        {
          transform: 'translateY(-100px) scale(1)',
          opacity: 1
        },
        {
          transform: 'translateY(-200px) scale(0.5)',
          opacity: 0
        }
      ], {
        duration: 2000,
        easing: 'ease-out'
      });
      
      animation.onfinish = () => heart.remove();
    }, i * 300);
  }
}

// ===================================
// Event Listeners
// ===================================

// Click en cards
poemCards.forEach(card => {
  card.addEventListener('click', () => {
    const poemId = card.getAttribute('data-poem');
    openPoem(poemId);
    
    // Efecto de partículas al hacer click
    createClickParticles(card);
  });
  
  // Efecto hover con partículas
  card.addEventListener('mouseenter', (e) => {
    createHoverSparkle(card);
  });
});

// Cerrar popup
popupClose.addEventListener('click', closePoem);
popupOverlay.addEventListener('click', closePoem);

// Cerrar con ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && poemPopup.classList.contains('active')) {
    closePoem();
  }
});

// ===================================
// Efectos Visuales
// ===================================

// Partículas al hacer click en card
function createClickParticles(card) {
  const rect = card.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  for (let i = 0; i < 8; i++) {
    const particle = document.createElement('div');
    particle.textContent = '✨';
    particle.style.position = 'fixed';
    particle.style.left = centerX + 'px';
    particle.style.top = centerY + 'px';
    particle.style.fontSize = '1.5rem';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '9999';
    
    document.body.appendChild(particle);
    
    const angle = (Math.PI * 2 * i) / 8;
    const distance = 80;
    const endX = centerX + Math.cos(angle) * distance;
    const endY = centerY + Math.sin(angle) * distance;
    
    const animation = particle.animate([
      {
        transform: 'translate(0, 0) scale(0)',
        opacity: 1
      },
      {
        transform: `translate(${endX - centerX}px, ${endY - centerY}px) scale(1)`,
        opacity: 0
      }
    ], {
      duration: 800,
      easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
    });
    
    animation.onfinish = () => particle.remove();
  }
}

// Brillo al pasar el mouse
function createHoverSparkle(card) {
  const sparkle = document.createElement('div');
  sparkle.textContent = '💫';
  sparkle.style.position = 'absolute';
  sparkle.style.fontSize = '2rem';
  sparkle.style.pointerEvents = 'none';
  sparkle.style.left = Math.random() * 100 + '%';
  sparkle.style.top = Math.random() * 100 + '%';
  sparkle.style.opacity = '0';
  sparkle.style.transform = 'scale(0)';
  
  card.appendChild(sparkle);
  
  const animation = sparkle.animate([
    {
      opacity: 0,
      transform: 'scale(0) rotate(0deg)'
    },
    {
      opacity: 1,
      transform: 'scale(1) rotate(180deg)'
    },
    {
      opacity: 0,
      transform: 'scale(0) rotate(360deg)'
    }
  ], {
    duration: 1000,
    easing: 'ease-out'
  });
  
  animation.onfinish = () => sparkle.remove();
}

// ===================================
// Corazones flotantes de fondo
// ===================================
function createFloatingHearts() {
  const container = document.getElementById('floatingHearts');
  if (!container) return;
  
  const hearts = ['❤️', '💕', '💖', '💗', '💓', '💞'];
  
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDelay = Math.random() * 15 + 's';
    heart.style.animationDuration = (10 + Math.random() * 10) + 's';
    heart.style.fontSize = (1.5 + Math.random() * 1.5) + 'rem';
    
    container.appendChild(heart);
  }
}

// ===================================
// Inicialización
// ===================================
document.addEventListener('DOMContentLoaded', () => {
  createFloatingHearts();
  
  // Efecto de entrada suave
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.8s ease-in';
    document.body.style.opacity = '1';
  }, 100);
});

// Efecto de parallax suave con el mouse
document.addEventListener('mousemove', (e) => {
  const cards = document.querySelectorAll('.poem-card');
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;
  
  cards.forEach((card, index) => {
    const speed = (index + 1) * 2;
    const x = (mouseX - 0.5) * speed;
    const y = (mouseY - 0.5) * speed;
    
    card.style.transform = `translate(${x}px, ${y}px)`;
  });
});
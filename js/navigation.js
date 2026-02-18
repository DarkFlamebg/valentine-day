// ─────────────────────────────────────────────
//  navigation.js  ·  Navegación + transiciones
// ─────────────────────────────────────────────

// Rutas externas (se abren con transición de salida)
const EXTERNAL_ROUTES = {
  goPoems:  'poemas.html',
  thoughts: 'pensamientos.html',
};

// Elementos del DOM
const buttons   = document.querySelectorAll('button[data-target]');
const sections  = document.querySelectorAll('.section');
const canvas    = document.getElementById('heartCanvas');
const goFlowers = document.getElementById('goFlowers');

// ── Transición de salida hacia otra página ──────────────────────────────────
function navigateTo(url) {
  document.body.classList.add('page-exit');
  // Espera a que termine la animación CSS (300 ms) y luego navega
  setTimeout(() => { window.location.href = url; }, 320);
}

// ── Inyectar estilos de transición dinámicamente ────────────────────────────
// (así no dependemos de un CSS externo para esta funcionalidad)
const transitionStyles = document.createElement('style');
transitionStyles.textContent = `
  body {
    animation: pageEnter .45s cubic-bezier(.4,0,.2,1) both;
  }
  @keyframes pageEnter {
    from { opacity: 0; transform: translateY(14px) scale(.995); }
    to   { opacity: 1; transform: translateY(0)    scale(1);    }
  }

  body.page-exit {
    animation: pageExit .32s cubic-bezier(.4,0,.2,1) both;
    pointer-events: none;
  }
  @keyframes pageExit {
    from { opacity: 1; transform: translateY(0)    scale(1);    }
    to   { opacity: 0; transform: translateY(-12px) scale(.995); }
  }
`;
document.head.appendChild(transitionStyles);

// ── Navegación entre secciones / páginas ────────────────────────────────────
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target;

    // ¿Es una ruta externa?
    if (EXTERNAL_ROUTES[target]) {
      navigateTo(EXTERNAL_ROUTES[target]);
      return;
    }

    // Navegación interna entre secciones
    sections.forEach(sec => sec.classList.remove('active'));

    if (target === 'hero') {
      canvas.style.opacity   = '1';
      canvas.style.transform = 'translateY(0) scale(1)';
    } else {
      canvas.style.opacity   = '0';
      canvas.style.transform = 'translateY(-40px) scale(0.95)';
    }

    const targetSection = document.getElementById(target);
    if (targetSection) targetSection.classList.add('active');
  });
});

// ── Botón de flores ──────────────────────────────────────────────────────────
if (goFlowers) {
  goFlowers.addEventListener('click', () => navigateTo('flowers.html'));
}

// ── Parallax sutil en el canvas ─────────────────────────────────────────────
document.addEventListener('mousemove', (e) => {
  if (canvas && canvas.style.opacity !== '0') {
    const moveX = (e.clientX / window.innerWidth  - 0.5) * 10;
    const moveY = (e.clientY / window.innerHeight - 0.5) * 10;
    canvas.style.transform = `translate(${moveX}px, ${moveY}px)`;
  }
});

console.log('✅ Navigation loaded successfully');
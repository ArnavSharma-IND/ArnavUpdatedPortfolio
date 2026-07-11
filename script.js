/* 
 * ARNAV SHARMA - PORTFOLIO JAVASCRIPT
 * Interactions: Custom Cursor, Theme Switching, Reveal Animations, Lightbox, Counters
 */

document.addEventListener('DOMContentLoaded', () => {
  initCustomCursor();
  initThemeToggle();
  initScrollAnimations();
  initLightbox();
  initMobileMenu();
  initContactForm();
  initScrollProgress();
  initCounters();
});

/* 1. CUSTOM CURSOR */
function initCustomCursor() {
  const dot = document.querySelector('.custom-cursor-dot');
  const ring = document.querySelector('.custom-cursor-ring');
  
  if (!dot || !ring) return;

  let mouseX = 0;
  let mouseY = 0;
  let ringX = 0;
  let ringY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Direct position for dot
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  // Smooth animation loop for outer ring
  function tick() {
    // Linear interpolation for smooth trailing effect
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
    
    requestAnimationFrame(tick);
  }
  tick();

  // Hover states
  const hoverElements = 'a, button, input, textarea, .theme-toggle, .mobile-menu-btn, .certificate-preview-box, .project-card, .job-sim-card, .cert-card, .achievement-card';
  
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverElements)) {
      document.body.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverElements)) {
      document.body.classList.remove('cursor-hover');
    }
  });
}

/* 2. THEME SWITCHING (Midnight Blue / Warm Off-White) */
function initThemeToggle() {
  const toggleBtn = document.querySelector('.theme-toggle');
  if (!toggleBtn) return;

  const icon = toggleBtn.querySelector('i');
  
  // Check local storage or system preference
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateToggleIcon(savedTheme);

  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateToggleIcon(newTheme);
  });

  function updateToggleIcon(theme) {
    if (!icon) return;
    if (theme === 'light') {
      icon.className = 'fa-regular fa-moon';
      toggleBtn.setAttribute('title', 'Switch to Dark Mode');
    } else {
      icon.className = 'fa-regular fa-sun';
      toggleBtn.setAttribute('title', 'Switch to Light Mode');
    }
  }
}

/* 3. SCROLL REVEAL ANIMATIONS */
function initScrollAnimations() {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Unobserve after revealing to prevent repeated triggering
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(el => revealObserver.observe(el));

  // Navbar background change on scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/* 4. PREMIUM CERTIFICATE LIGHTBOX OVERLAY */
function initLightbox() {
  const lightbox = document.querySelector('.lightbox');
  if (!lightbox) return;

  const lightboxImg = lightbox.querySelector('.lightbox-image');
  const lightboxCaption = lightbox.querySelector('.lightbox-caption');
  const closeBtn = lightbox.querySelector('.lightbox-close');

  const triggers = document.querySelectorAll('[data-lightbox]');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      
      const imgSrc = trigger.getAttribute('href') || trigger.querySelector('img')?.getAttribute('src');
      const captionText = trigger.getAttribute('data-title') || trigger.getAttribute('data-caption') || 'Certificate View';
      
      if (imgSrc && lightboxImg) {
        lightboxImg.src = imgSrc;
        if (lightboxCaption) {
          lightboxCaption.textContent = captionText;
        }
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Stop page scrolling behind lightbox
      }
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
  }

  // Close when clicking outside content (on the blurred background overlay)
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
}

/* 5. MOBILE MENU DRAWER NAVIGATION */
function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (!menuBtn || !navLinks) return;

  const icon = menuBtn.querySelector('i');

  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-active');
    
    // Toggle menu icon
    if (navLinks.classList.contains('mobile-active')) {
      icon.className = 'fa-solid fa-xmark';
    } else {
      icon.className = 'fa-solid fa-bars';
    }
  });

  // Close menu drawer when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('mobile-active');
      icon.className = 'fa-solid fa-bars';
    });
  });
}

/* 6. CONTACT FORM SUBMISSION MOCK */
function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  const statusContainer = document.createElement('div');
  statusContainer.className = 'form-status';
  form.appendChild(statusContainer);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Simple verification
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const message = form.querySelector('#message').value.trim();

    if (!name || !email || !message) {
      statusContainer.className = 'form-status error';
      statusContainer.textContent = 'Please fill out all fields.';
      return;
    }

    // Processing animation state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    statusContainer.textContent = '';

    setTimeout(() => {
      // Success response state
      statusContainer.className = 'form-status success';
      statusContainer.textContent = 'Thank you, your message has been sent successfully!';
      form.reset();
      
      // Clear inputs labels focus styles
      form.querySelectorAll('.form-input').forEach(input => {
        input.dispatchEvent(new Event('blur'));
      });
      
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }, 1500);
  });
}

/* 7. SCROLL PROGRESS INDICATOR BAR */
function initScrollProgress() {
  const progress = document.querySelector('.scroll-progress');
  if (!progress) return;

  window.addEventListener('scroll', () => {
    const windowScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    if (height > 0) {
      const scrolled = (windowScroll / height) * 100;
      progress.style.width = `${scrolled}%`;
    }
  });
}

/* 8. STATISTICS COUNT-UP COUNTERS */
function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (counters.length === 0) return;

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const targetVal = parseFloat(target.getAttribute('data-counter'));
        const duration = 1500; // Counter duration in ms
        const startTime = performance.now();
        const startVal = 0;
        
        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Easing function for smoother counting
          const easeProgress = easeOutQuad(progress);
          const currentVal = startVal + easeProgress * (targetVal - startVal);
          
          // Check if it's a decimal number or integer
          if (targetVal % 1 !== 0) {
            target.textContent = currentVal.toFixed(2);
          } else {
            target.textContent = Math.floor(currentVal);
          }
          
          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            target.textContent = targetVal;
          }
        }
        
        requestAnimationFrame(updateCounter);
        observer.unobserve(target); // Only count up once
      }
    });
  }, {
    threshold: 0.5
  });

  counters.forEach(counter => counterObserver.observe(counter));
}

// Quadratic easing out helper function
function easeOutQuad(x) {
  return 1 - (1 - x) * (1 - x);
}

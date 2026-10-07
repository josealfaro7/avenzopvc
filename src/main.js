import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  
  // --- Mobile Menu Toggle ---
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Close mobile menu on link click
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });

  // --- WhatsApp Form Submission ---
  const whatsappForm = document.getElementById('whatsapp-form');
  
  whatsappForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(whatsappForm);
    const nombre = formData.get('nombre').trim();
    const tipoProyecto = formData.get('tipo_proyecto');
    const medidas = formData.get('medidas').trim();
    
    // Construct WhatsApp message
    let message = `Hola Avenzo PVC, me gustaría cotizar un proyecto.\n\n`;
    message += `*Nombre:* ${nombre}\n`;
    message += `*Tipo de Proyecto:* ${tipoProyecto}\n`;
    
    if (medidas) {
      message += `*Detalles/Medidas:* ${medidas}\n`;
    }
    
    // Encode for URL
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "56929966666"; // As requested
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Redirect
    window.open(whatsappUrl, '_blank');
  });

  // --- GSAP Animations ---

  // Hero Animations
  gsap.fromTo('.hero-content h1', 
    { opacity: 0, y: 30 }, 
    { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
  );
  
  gsap.fromTo('.hero-content p', 
    { opacity: 0, y: 20 }, 
    { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.4 }
  );
  
  gsap.fromTo('.hero-content a', 
    { opacity: 0, y: 20 }, 
    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.6, stagger: 0.1 }
  );

  // Process Grid Animations
  const processItems = gsap.utils.toArray('.process-item');
  processItems.forEach((item, i) => {
    gsap.fromTo(item, 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // Sistemas de Perfiles Animations
  const sistemaCards = gsap.utils.toArray('.sistema-card');
  if (sistemaCards.length > 0) {
    gsap.fromTo(sistemaCards, 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#sistemas-grid',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // Modelos de Fabricación Animations
  const modeloCards = gsap.utils.toArray('.modelo-card');
  if (modeloCards.length > 0) {
    gsap.fromTo(modeloCards, 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#modelos-grid',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // Benefits Grid Animations
  const benefitItems = gsap.utils.toArray('.benefit-grid > div');
  benefitItems.forEach((item, i) => {
    gsap.fromTo(item, 
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: i * 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.benefit-grid',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  });
});

import './style.css'
import { animate, stagger, inView, scroll } from 'framer-motion'

// Initialize animations when the page loads
document.addEventListener('DOMContentLoaded', () => {
  // Handle navbar transparency on scroll
  const navbar = document.querySelector('nav');
  const scrollTopBtn = document.querySelector('#scrollTopBtn');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Navbar transparency
    if (currentScroll <= 0) {
      navbar.classList.remove('bg-white/75');
      navbar.classList.add('bg-transparent');
      scrollTopBtn.classList.add('opacity-0', 'pointer-events-none');
    } else {
      navbar.classList.remove('bg-transparent');
      navbar.classList.add('bg-white/75');
      scrollTopBtn.classList.remove('opacity-0', 'pointer-events-none');
    }
    
    lastScroll = currentScroll;
  });

  // Scroll to top button click handler
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const navHeight = document.querySelector('nav').offsetHeight;
        const targetPosition = targetElement.offsetTop - navHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Fade in navigation links
  const navLinks = document.querySelectorAll('.nav-link')
  animate(navLinks, { opacity: [0, 1], x: [-20, 0] }, { delay: stagger(0.1) })

  // Hero section animations
  inView('.hero-content', ({ target }) => {
    animate(target.querySelector('h1'), 
      { opacity: [0, 1], y: [50, 0] },
      { duration: 0.8, delay: 0.2 }
    )
    animate(target.querySelector('p'),
      { opacity: [0, 1], y: [30, 0] },
      { duration: 0.8, delay: 0.4 }
    )
    animate(target.querySelectorAll('.hero-btn'),
      { opacity: [0, 1], y: [20, 0] },
      { duration: 0.5, delay: stagger(0.2, { start: 0.6 }) }
    )
  })

  // About section animations
  inView('.about-content', ({ target }) => {
    animate(target.querySelector('.about-text'),
      { opacity: [0, 1], x: [-50, 0] },
      { duration: 0.8 }
    )
    animate(target.querySelectorAll('.skill-card'),
      { opacity: [0, 1], scale: [0.8, 1] },
      { duration: 0.5, delay: stagger(0.1) }
    )
  })

  // Project card animations
  inView('.projects-grid', ({ target }) => {
    animate(target.querySelectorAll('.project-card'),
      { opacity: [0, 1], y: [50, 0] },
      { duration: 0.6, delay: stagger(0.2) }
    )
  })

  // Contact section animations
  inView('.contact-content', ({ target }) => {
    animate(target.querySelector('h2'),
      { opacity: [0, 1], y: [30, 0] },
      { duration: 0.6 }
    )
    animate(target.querySelector('p'),
      { opacity: [0, 1] },
      { duration: 0.6, delay: 0.2 }
    )
    animate(target.querySelectorAll('.contact-btn'),
      { opacity: [0, 1], scale: [0.8, 1] },
      { duration: 0.4, delay: stagger(0.1, { start: 0.4 }) }
    )
  })

  // Parallax scroll effect for project cards
  const projectCards = document.querySelectorAll('.project-card')
  projectCards.forEach(card => {
    scroll(animate(card, { y: [-20, 20] }), {
      target: card,
      offset: ["start end", "end start"]
    })
  })
})

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen">
    <!-- Navigation -->
    <nav class="fixed w-full bg-transparent backdrop-blur-sm shadow-sm z-50 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <a href="#" class="text-2xl font-bold text-primary">YourName</a>
          <div class="hidden md:flex space-x-8">
            <a href="#home" class="nav-link">Home</a>
            <a href="#about" class="nav-link">About</a>
            <a href="#projects" class="nav-link">Projects</a>
            <a href="#contact" class="nav-link">Contact</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Scroll to Top Button -->
    <button id="scrollTopBtn" class="fixed bottom-8 right-8 bg-primary hover:bg-secondary text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 opacity-0 pointer-events-none hover:scale-110 z-50">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>

    <!-- Hero Section -->
    <section id="home" class="section-padding pt-32 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto text-center hero-content">
        <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Hi, I'm <span class="text-primary">Your Name</span>
        </h1>
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          A passionate full-stack developer crafting beautiful and functional web experiences
        </p>
        <div class="flex justify-center gap-4">
          <a href="#contact" class="hero-btn bg-primary hover:bg-secondary text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
            Get in Touch
          </a>
          <a href="#projects" class="hero-btn border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
            View Projects
          </a>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section-padding bg-white">
      <div class="max-w-7xl mx-auto about-content">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6 about-text">
            <p class="text-gray-600">
              I'm a full-stack developer with a passion for creating elegant solutions to complex problems. 
              With expertise in modern web technologies, I build applications that are both beautiful and functional.
            </p>
            <div class="grid grid-cols-2 gap-4">
              <div class="skill-card bg-gray-50 p-4 rounded-lg hover:shadow-md transition-all duration-300">
                <h3 class="font-semibold mb-2">Frontend</h3>
                <p class="text-gray-600">React, Vue, TypeScript</p>
              </div>
              <div class="skill-card bg-gray-50 p-4 rounded-lg hover:shadow-md transition-all duration-300">
                <h3 class="font-semibold mb-2">Backend</h3>
                <p class="text-gray-600">Node.js, Python, SQL</p>
              </div>
            </div>
          </div>
          <div class="bg-gray-100 h-80 rounded-lg transform transition-transform duration-500 hover:scale-[1.02]"></div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section-padding bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 projects-grid">
          <!-- Project Card 1 -->
          <div class="project-card">
            <div class="bg-gray-200 h-48 overflow-hidden">
              <div class="w-full h-full transform transition-transform duration-500 hover:scale-110"></div>
            </div>
            <div class="p-6">
              <h3 class="font-semibold text-xl mb-2">Project One</h3>
              <p class="text-gray-600 mb-4">A brief description of the project and its key features.</p>
              <div class="flex gap-2">
                <span class="bg-gray-100 px-3 py-1 rounded-full text-sm">React</span>
                <span class="bg-gray-100 px-3 py-1 rounded-full text-sm">Node.js</span>
              </div>
            </div>
          </div>

          <!-- Project Card 2 -->
          <div class="project-card">
            <div class="bg-gray-200 h-48 overflow-hidden">
              <div class="w-full h-full transform transition-transform duration-500 hover:scale-110"></div>
            </div>
            <div class="p-6">
              <h3 class="font-semibold text-xl mb-2">Project Two</h3>
              <p class="text-gray-600 mb-4">A brief description of the project and its key features.</p>
              <div class="flex gap-2">
                <span class="bg-gray-100 px-3 py-1 rounded-full text-sm">Vue</span>
                <span class="bg-gray-100 px-3 py-1 rounded-full text-sm">Python</span>
              </div>
            </div>
          </div>

          <!-- Project Card 3 -->
          <div class="project-card">
            <div class="bg-gray-200 h-48 overflow-hidden">
              <div class="w-full h-full transform transition-transform duration-500 hover:scale-110"></div>
            </div>
            <div class="p-6">
              <h3 class="font-semibold text-xl mb-2">Project Three</h3>
              <p class="text-gray-600 mb-4">A brief description of the project and its key features.</p>
              <div class="flex gap-2">
                <span class="bg-gray-100 px-3 py-1 rounded-full text-sm">TypeScript</span>
                <span class="bg-gray-100 px-3 py-1 rounded-full text-sm">AWS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section-padding bg-white">
      <div class="max-w-3xl mx-auto text-center contact-content">
        <h2 class="text-3xl md:text-4xl font-bold mb-12">Get in Touch</h2>
        <p class="text-gray-600 mb-8">
          I'm always open to new opportunities and interesting projects. 
          Feel free to reach out if you'd like to collaborate!
        </p>
        <div class="flex justify-center gap-6">
          <a href="mailto:your.email@example.com" class="contact-btn bg-primary hover:bg-secondary text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
            Email Me
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" class="contact-btn bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
            LinkedIn
          </a>
          <a href="https://github.com/yourusername" target="_blank" class="contact-btn bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
            GitHub
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-8">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <p>© ${new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  </div>
`
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuToggle.innerHTML = navLinks.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', data);
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
    
    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.experience-item, .project-card, .about-image, .about-text');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    document.querySelectorAll('.experience-item, .project-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.5s ease';
    });
    
    document.querySelector('.about-image').style.opacity = '0';
    document.querySelector('.about-image').style.transform = 'translateX(-30px)';
    document.querySelector('.about-image').style.transition = 'all 0.5s ease';
    
    document.querySelector('.about-text').style.opacity = '0';
    document.querySelector('.about-text').style.transform = 'translateX(30px)';
    document.querySelector('.about-text').style.transition = 'all 0.5s ease';
    
    // Run on load and scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // Skill items animation
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });
});

//     // Mobile menu with touch support
//     const menuToggle = document.querySelector('.menu-toggle');
//     const navLinks = document.querySelector('.nav-links');
    
//     // Better touch handling
//     menuToggle.addEventListener('click', function(e) {
//         e.preventDefault();
//         navLinks.classList.toggle('active');
//         menuToggle.innerHTML = navLinks.classList.contains('active') ? 
//             '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        
//         // Prevent body scroll when menu is open
//         document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
//     });
    
//     // Close menu when tapping outside on mobile
//     document.addEventListener('click', function(e) {
//         if (navLinks.classList.contains('active') && 
//             !e.target.closest('.nav-links') && 
//             !e.target.closest('.menu-toggle')) {
//             navLinks.classList.remove('active');
//             menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
//             document.body.style.overflow = '';
//         }
//     });
    
//     // Improved touch handling for links
//     document.querySelectorAll('a').forEach(link => {
//         link.addEventListener('touchstart', function() {
//             this.classList.add('touch-active');
//         });
        
//         link.addEventListener('touchend', function() {
//             this.classList.remove('touch-active');
//         });
//     });
    
//     // Prevent zoom on double-tap
//     let lastTouchEnd = 0;
//     document.addEventListener('touchend', function(event) {
//         const now = (new Date()).getTime();
//         if (now - lastTouchEnd <= 300) {
//             event.preventDefault();
//         }
//         lastTouchEnd = now;
//     }, false);
    

    
//     // Adjust animation timing for mobile
//     const isMobile = /Mobi|Android/i.test(navigator.userAgent);
//     if (isMobile) {
//         document.querySelectorAll('.skill-item').forEach((item, index) => {
//             item.style.transitionDelay = '0s';
//         });
//     }
// });
// ============================================
// GLASS MANUFACTURING WEBSITE - JAVASCRIPT
// Animations, Interactions & Motion Graphics
// ============================================

// ============================================
// NAVIGATION SCROLL EFFECT
// ============================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add scrolled class for glassmorphism effect
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ============================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Trigger counter animation for stats
            if (entry.target.classList.contains('stat-item')) {
                animateCounter(entry.target.querySelector('.stat-number'));
            }
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .stat-item').forEach(el => {
    observer.observe(el);
});

// ============================================
// COUNTER ANIMATION FOR STATS
// ============================================
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (target === 99 ? '' : '+');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (target === 99 ? '' : '+');
        }
    }, 16);
}

// ============================================
// PARALLAX EFFECT FOR HERO SECTION
// ============================================
const hero = document.querySelector('.hero');
const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;

    if (hero && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// ============================================
// PRODUCT CARD ANIMATIONS
// ============================================
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        // Add shimmer effect
        if (!this.querySelector('.shimmer-overlay')) {
            const shimmer = document.createElement('div');
            shimmer.classList.add('shimmer-overlay');
            shimmer.style.cssText = `
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                pointer-events: none;
                z-index: 3;
                animation: shimmerPass 1.5s ease-in-out;
            `;
            this.appendChild(shimmer);

            setTimeout(() => shimmer.remove(), 1500);
        }
    });
});

// Add shimmer animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes shimmerPass {
        0% { left: -100%; }
        100% { left: 100%; }
    }
`;
document.head.appendChild(style);

// ============================================
// GLASS CARD HOVER EFFECTS
// ============================================
const glassCards = document.querySelectorAll('.glass-card');

glassCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ============================================
// FLOATING ANIMATION FOR HERO BACKGROUND
// ============================================
function createFloatingElements() {
    const hero = document.querySelector('.hero-bg');
    if (!hero) return;

    for (let i = 0; i < 15; i++) {
        const element = document.createElement('div');
        element.classList.add('floating-element');

        const size = Math.random() * 100 + 50;
        const delay = Math.random() * 10;
        const duration = Math.random() * 20 + 15;
        const left = Math.random() * 100;
        const opacity = Math.random() * 0.15 + 0.05;

        element.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(14, 165, 233, ${opacity}) 0%, transparent 70%);
            left: ${left}%;
            top: ${Math.random() * 100}%;
            animation: floatElement ${duration}s ease-in-out ${delay}s infinite;
            pointer-events: none;
        `;

        hero.appendChild(element);
    }
}

// Add floating animation
const floatingStyle = document.createElement('style');
floatingStyle.textContent = `
    @keyframes floatElement {
        0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
        }
        25% {
            transform: translate(20px, -50px) scale(1.1);
            opacity: 0.5;
        }
        50% {
            transform: translate(-30px, -100px) scale(0.9);
            opacity: 0.4;
        }
        75% {
            transform: translate(30px, -50px) scale(1.05);
            opacity: 0.6;
        }
    }
`;
document.head.appendChild(floatingStyle);

// Initialize floating elements
createFloatingElements();

// ============================================
// FORM HANDLING
// ============================================
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const button = contactForm.querySelector('button[type="submit"]');
        const originalText = button.textContent;

        // Animate button
        button.textContent = 'Sending...';
        button.style.opacity = '0.7';
        button.disabled = true;

        // Simulate form submission
        setTimeout(() => {
            button.textContent = '✓ Message Sent!';
            button.style.background = 'linear-gradient(135deg, #059669, #10b981)';

            setTimeout(() => {
                button.textContent = originalText;
                button.style.opacity = '1';
                button.style.background = '';
                button.disabled = false;
                contactForm.reset();
            }, 3000);
        }, 2000);
    });

    // Input focus effects
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function () {
            this.parentElement.style.transform = 'translateY(-2px)';
        });

        input.addEventListener('blur', function () {
            this.parentElement.style.transform = 'translateY(0)';
        });
    });
}

// ============================================
// MOBILE MENU TOGGLE
// ============================================
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });
}

// ============================================
// CURSOR GLOW EFFECT (OPTIONAL ENHANCEMENT)
// ============================================
const cursor = document.createElement('div');
cursor.classList.add('cursor-glow');
cursor.style.cssText = `
    position: fixed;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 70%);
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s ease;
    opacity: 0;
`;
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursor.style.opacity = '1';
});

document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
});

// ============================================
// LAZY LOADING IMAGES
// ============================================
const images = document.querySelectorAll('img[src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.6s ease';

            img.onload = () => {
                img.style.opacity = '1';
            };

            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// ============================================
// PERFORMANCE MONITORING
// ============================================
console.log('%c🔷 FW Glass Tech Website Loaded', 'color: #0EA5E9; font-size: 16px; font-weight: bold;');
console.log('%cAnimations Active ✓', 'color: #10b981; font-size: 12px;');
console.log('%cGlassmorphism Effects ✓', 'color: #10b981; font-size: 12px;');
console.log('%cScroll Animations ✓', 'color: #10b981; font-size: 12px;');

// ============================================
// ADDITIONAL GLASS REFLECTION EFFECTS
// ============================================
function addGlassReflection() {
    const glassElements = document.querySelectorAll('.glass, .glass-card');

    glassElements.forEach(element => {
        // Add subtle gradient overlay for depth
        const reflection = document.createElement('div');
        reflection.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%);
            pointer-events: none;
            border-radius: inherit;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;

        element.style.position = 'relative';
        element.appendChild(reflection);

        element.addEventListener('mouseenter', () => {
            reflection.style.opacity = '1';
        });

        element.addEventListener('mouseleave', () => {
            reflection.style.opacity = '0';
        });
    });
}

// Initialize glass reflections after DOM is ready
setTimeout(addGlassReflection, 100);

// ============================================
// SCROLL PROGRESS INDICATOR
// ============================================
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--primary-blue), var(--accent-cyan), var(--accent-teal));
    z-index: 10000;
    transition: width 0.1s ease;
    box-shadow: 0 0 10px rgba(14, 165, 233, 0.5);
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
});

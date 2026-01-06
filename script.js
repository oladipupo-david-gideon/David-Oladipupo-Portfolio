document.addEventListener('DOMContentLoaded', function() {

    // --- Main Initializer ---
    initializeNavbarBehavior();
    initializeTypingAnimation();
    initializeScrollAnimations();

    // 1. Auto-Hiding Navbar
    function initializeNavbarBehavior() {
        const navbar = document.getElementById('navbar');
        if (!navbar) return;
        let lastScrollY = window.scrollY;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 150 && lastScrollY < window.scrollY) {
                navbar.classList.add('nav-hidden');
            } else {
                navbar.classList.remove('nav-hidden');
            }
            lastScrollY = window.scrollY;
        }, { passive: true });
    }

    // 2. Hero Typing Animation (UPDATED: Truthful & Aspirational)
    function initializeTypingAnimation() {
        const element = document.getElementById('typing-text');
        if (!element) return;

        const phrases = ["Financial Data Analyst.", "Python Developer.", "Building Predictive Models."];
        let phraseIndex = 0, letterIndex = 0, currentPhrase = '', isDeleting = false;

        function type() {
            const fullPhrase = phrases[phraseIndex];
            if (isDeleting) {
                currentPhrase = fullPhrase.substring(0, letterIndex - 1);
                letterIndex--;
            } else {
                currentPhrase = fullPhrase.substring(0, letterIndex + 1);
                letterIndex++;
            }
            element.innerHTML = currentPhrase;
            let typeSpeed = 100; 
            if (isDeleting) typeSpeed /= 2;
            if (!isDeleting && letterIndex === fullPhrase.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && letterIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }
            setTimeout(type, typeSpeed);
        }
        type();
    }

    // 3. Scroll Reveal Animations
    function initializeScrollAnimations() {
        const revealElements = document.querySelectorAll('.reveal');
        if (revealElements.length === 0) return;
        
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    const delay = entry.target.dataset.delay || 150 * index;
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, delay);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(el => {
            revealObserver.observe(el);
        });
        
        const staggerHeroElements = document.querySelectorAll('.stagger-reveal');
        staggerHeroElements.forEach((el, index) => {
            el.style.transitionDelay = `${index * 100}ms`;
            el.classList.add('visible');
        });
    }
});
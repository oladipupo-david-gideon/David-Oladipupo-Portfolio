document.addEventListener('DOMContentLoaded', function () {

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // --- Main Initializer ---
    initializeNavbarBehavior();
    initializeNameReveal();
    initializeSkyAndSnow();
    initializeScrollAnimations();

    // 0. Auto-Hiding Navbar: hides when scrolling down, shows again when scrolling up
    function initializeNavbarBehavior() {
        const navbar = document.getElementById('navbar');
        if (!navbar) return;
        let lastScrollY = window.scrollY;

        window.addEventListener('scroll', () => {
            const y = window.scrollY;

            // Add a dark frosted background once the page has moved off the top
            navbar.classList.toggle('nav-scrolled', y > 20);

            if (y > 150 && lastScrollY < y) {
                navbar.classList.add('nav-hidden');
            } else {
                navbar.classList.remove('nav-hidden');
            }
            lastScrollY = y;
        }, { passive: true });

        // Keyboard users: never leave focus on a hidden nav
        navbar.addEventListener('focusin', () => navbar.classList.remove('nav-hidden'));
    }

    // 1. Hero name: wrap each letter so it can rise into place (CSS does the animation)
    function initializeNameReveal() {
        const heading = document.querySelector('[data-split]');
        if (!heading) return;

        // Keep the full name for screen readers, since the letters get split apart
        heading.setAttribute('aria-label', heading.textContent.replace(/\s+/g, ' ').trim());

        // Letters on the second line fade from white to ice blue
        const start = [255, 255, 255];
        const end = [199, 217, 255];

        let letterIndex = 0;
        heading.querySelectorAll('.name-line').forEach(line => {
            const text = line.textContent.trim();
            const isCool = line.classList.contains('name-line--cool');
            line.textContent = '';
            line.setAttribute('aria-hidden', 'true');

            [...text].forEach((letter, i) => {
                const mask = document.createElement('span');
                mask.className = 'mask';

                const ch = document.createElement('span');
                ch.className = 'ch';
                ch.textContent = letter;
                ch.style.setProperty('--i', letterIndex++);

                if (isCool) {
                    const t = text.length > 1 ? i / (text.length - 1) : 0;
                    const rgb = start.map((s, k) => Math.round(s + (end[k] - s) * t));
                    ch.style.color = `rgb(${rgb.join(',')})`;
                }

                mask.appendChild(ch);
                line.appendChild(mask);
            });
        });
    }

    // 2. Twinkling stars and falling snow in the hero
    function initializeSkyAndSnow() {
        if (reducedMotion) return;

        const hero = document.querySelector('.hero');
        const starLayer = document.querySelector('.stars');
        const snowLayer = document.querySelector('.snow');
        const rand = (min, max) => Math.random() * (max - min) + min;

        if (starLayer) {
            for (let i = 0; i < 14; i++) {
                const star = document.createElement('span');
                star.className = 'star';
                star.style.left = `${rand(2, 97).toFixed(1)}%`;
                star.style.top = `${rand(4, 44).toFixed(1)}%`;
                star.style.animationDelay = `${rand(0, 4).toFixed(1)}s`;
                starLayer.appendChild(star);
            }
        }

        if (snowLayer) {
            const sizes = [2, 3, 3, 4, 5, 6];
            for (let i = 0; i < 34; i++) {
                const flake = document.createElement('span');
                flake.className = 'flake';
                flake.style.setProperty('--x', `${Math.round(rand(1, 99))}%`);
                flake.style.setProperty('--s', `${sizes[Math.floor(Math.random() * sizes.length)]}px`);
                flake.style.setProperty('--o', rand(0.35, 0.95).toFixed(2));
                flake.style.setProperty('--t', `${Math.round(rand(9, 20))}s`);
                flake.style.setProperty('--d', `-${Math.round(rand(0, 20))}s`);
                flake.style.setProperty('--w', `${Math.round(rand(20, 60))}px`);
                snowLayer.appendChild(flake);
            }

            // Snow falls the full height of the hero, even if it gets taller on small screens
            const setFall = () => snowLayer.style.setProperty('--fall', `${hero.offsetHeight + 20}px`);
            setFall();
            window.addEventListener('resize', setFall, { passive: true });
        }
    }

    // 3. Scroll Reveal Animations
    function initializeScrollAnimations() {
        const revealElements = document.querySelectorAll('.reveal');
        if (revealElements.length === 0) return;

        // No observer support: just show everything (reduced motion still gets a gentle fade via CSS)
        if (!('IntersectionObserver' in window)) {
            revealElements.forEach(el => el.classList.add('visible'));
            return;
        }

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

        revealElements.forEach(el => revealObserver.observe(el));
    }
});

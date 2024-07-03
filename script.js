document.addEventListener('DOMContentLoaded', () => {
    const candlesContainer = document.querySelector('.candles-container');
    const namesContainer = document.querySelector('.names-container');
    const candleLighting = document.querySelector('.candle-lighting');

    // Create enhanced candles with realistic flames
    for (let i = 0; i < 15; i++) {
        const candle = document.createElement('div');
        candle.className = 'candle';
        candle.style.animationDelay = `${Math.random() * 2}s`;
        
        const flame = document.createElement('div');
        flame.className = 'flame';
        flame.style.animationDuration = `${0.4 + Math.random() * 0.2}s`;
        
        const glow = document.createElement('div');
        glow.className = 'glow';
        
        const waxDrip = document.createElement('div');
        waxDrip.className = 'wax-drip';
        waxDrip.style.animationDelay = `${Math.random() * 5}s`;
        
        candle.appendChild(flame);
        candle.appendChild(glow);
        candle.appendChild(waxDrip);
        candlesContainer.appendChild(candle);
    }

    // Floating names
    const names = ['Marie', 'Jean', 'Asha', 'David', 'Esther', 'Felix', 'Grace', 'Henri', 'Isabelle', 'Joseph'];
    function createFloatingName() {
        const name = document.createElement('div');
        name.className = 'name';
        name.textContent = names[Math.floor(Math.random() * names.length)];
        name.style.left = `${Math.random() * 100}%`;
        name.style.animationDuration = `${15 + Math.random() * 10}s`;
        namesContainer.appendChild(name);

        setTimeout(() => {
            namesContainer.removeChild(name);
        }, 25000);
    }

    setInterval(createFloatingName, 2000);

    // CTA Button Interaction
    document.querySelector('.cta-button').addEventListener('click', (e) => {
        e.preventDefault();
        
        // Candle lighting effect
        candleLighting.style.opacity = '1';
        setTimeout(() => {
            candleLighting.style.opacity = '0';
        }, 500);

        const newCandle = document.createElement('div');
        newCandle.className = 'candle';
        
        const newFlame = document.createElement('div');
        newFlame.className = 'flame';
        newFlame.style.animationDuration = `${0.4 + Math.random() * 0.2}s`;
        
        const newGlow = document.createElement('div');
        newGlow.className = 'glow';
        
        const newWaxDrip = document.createElement('div');
        newWaxDrip.className = 'wax-drip';
        
        newCandle.appendChild(newFlame);
        newCandle.appendChild(newGlow);
        newCandle.appendChild(newWaxDrip);
        candlesContainer.appendChild(newCandle);
    });

    // Particle system
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.color = `rgba(252, 209, 22, ${Math.random() * 0.5 + 0.5})`;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.size > 0.2) this.size -= 0.01;

            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function initParticles() {
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let particle of particles) {
            particle.update();
            particle.draw();
        }
        requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();

    // Custom cursor
    const cursor = document.getElementById('custom-cursor');
    const cursorTrail = document.getElementById('cursor-trail');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursorTrail.style.left = e.clientX + 'px';
            cursorTrail.style.top = e.clientY + 'px';
        }, 50);
    });

    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'scale(0.8)';
    });

    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'scale(1)';
    });

    // Adjust cursor on interactive elements
    const interactiveElements = document.querySelectorAll('.cta-button, .candle');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
        });
    });

    // Resize event for canvas
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
    });
});
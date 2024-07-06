// Class to create the particles and make them fade out

import React, { useRef, useEffect } from 'react';

function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
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
        this.initialSize = this.size;
        this.fadeOutStart = Date.now() + 5000 + Math.random() * 2000; // Start fading out between 10-12 seconds
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        const now = Date.now();
        if (now > this.fadeOutStart) {
          const fadeOutProgress = (now - this.fadeOutStart) / 2000; // 2 seconds fade out
          this.size = Math.max(0, this.initialSize * (1 - fadeOutProgress));
        } else if (this.size > 0.2) {
          this.size -= 0.01;
        }

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
      animationFrameId = requestAnimationFrame(animateParticles);
    }

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animateParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} id="particle-canvas" />;
}

export default ParticleCanvas;
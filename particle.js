document.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    let numberOfParticles = 100;

    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 15 + 5;
            this.velX = (Math.random() - 0.5) * 2;
            this.velY = (Math.random() - 0.5) * 2;
            this.color = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.random()}`;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        update() {
            this.x += this.velX;
            this.y += this.velY;

            if (this.x < 0 || this.x > canvas.width) this.velX = -this.velX;
            if (this.y < 0 || this.y > canvas.height) this.velY = -this.velY;

            this.draw();
        }
    }

    function setup() {
        for (let i = 0; i < numberOfParticles; i++) {
            particles.push(new Particle(canvas.width / 2, canvas.height / 2));
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => {
            particle.update();
        });
    }

    setup();
    animate();
});

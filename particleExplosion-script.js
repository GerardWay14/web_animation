const explosionCanvas = document.getElementById("particleExplosionCanvas");
const explosionCtx = explosionCanvas.getContext("2d");

explosionCanvas.width = 500;
explosionCanvas.height = 300;

const particles = [];
for (let i = 0; i < 100; i++) {
    particles.push({
        x: explosionCanvas.width / 2,
        y: explosionCanvas.height / 2,
        dx: (Math.random() - 0.5) * 8,
        dy: (Math.random() - 0.5) * 8,
        radius: Math.random() * 4 + 1,
        color: `hsl(${Math.random() * 360}, 70%, 50%)`,
        life: Math.random() * 100 + 50
    });
}

function animateExplosion() {
    explosionCtx.clearRect(0, 0, explosionCanvas.width, explosionCanvas.height);

    particles.forEach(particle => {
        if (particle.life > 0) {
            explosionCtx.beginPath();
            explosionCtx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            explosionCtx.fillStyle = particle.color;
            explosionCtx.fill();
            particle.x += particle.dx;
            particle.y += particle.dy;
            particle.life -= 1;
        }
    });

    requestAnimationFrame(animateExplosion);
}
animateExplosion();

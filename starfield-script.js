const starfieldCanvas = document.getElementById("starfieldCanvas");
const starfieldCtx = starfieldCanvas.getContext("2d");

starfieldCanvas.width = 500;
starfieldCanvas.height = 300;

const stars = [];
for (let i = 0; i < 100; i++) {
    stars.push({
        x: Math.random() * starfieldCanvas.width,
        y: Math.random() * starfieldCanvas.height,
        speed: Math.random() * 3 + 1,
        radius: Math.random() * 2 + 1,
        color: `hsl(${Math.random() * 360}, 70%, 80%)`
    });
}

function drawStarfield() {
    starfieldCtx.clearRect(0, 0, starfieldCanvas.width, starfieldCanvas.height);

    stars.forEach(star => {
        starfieldCtx.beginPath();
        starfieldCtx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        starfieldCtx.fillStyle = star.color;
        starfieldCtx.fill();

        star.x -= star.speed;
        if (star.x < 0) {
            star.x = starfieldCanvas.width;
            star.y = Math.random() * starfieldCanvas.height;
        }
    });

    requestAnimationFrame(drawStarfield);
}
drawStarfield();

const bouncingCanvas = document.getElementById("bouncingBallsCanvas");
const bouncingCtx = bouncingCanvas.getContext("2d");

bouncingCanvas.width = 500;
bouncingCanvas.height = 300;

const balls = [];
for (let i = 0; i < 15; i++) {
    balls.push({
        x: Math.random() * bouncingCanvas.width,
        y: Math.random() * bouncingCanvas.height,
        dx: (Math.random() - 0.5) * 4,
        dy: (Math.random() - 0.5) * 4,
        radius: Math.random() * 15 + 5,
        color: `hsl(${Math.random() * 360}, 70%, 50%)`
    });
}

function animateBalls() {
    bouncingCtx.clearRect(0, 0, bouncingCanvas.width, bouncingCanvas.height);
    balls.forEach(ball => {
        bouncingCtx.beginPath();
        bouncingCtx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        bouncingCtx.fillStyle = ball.color;
        bouncingCtx.fill();
        ball.x += ball.dx;
        ball.y += ball.dy;

        if (ball.x - ball.radius < 0 || ball.x + ball.radius > bouncingCanvas.width) ball.dx *= -1;
        if (ball.y - ball.radius < 0 || ball.y + ball.radius > bouncingCanvas.height) ball.dy *= -1;
    });
    requestAnimationFrame(animateBalls);
}
animateBalls();

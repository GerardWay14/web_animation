const rotatingCanvas = document.getElementById("rotatingSquaresCanvas");
const rotatingCtx = rotatingCanvas.getContext("2d");

rotatingCanvas.width = 500;
rotatingCanvas.height = 300;

let angle = 0;

function drawRotatingSquares() {
    rotatingCtx.clearRect(0, 0, rotatingCanvas.width, rotatingCanvas.height);
    rotatingCtx.save();
    rotatingCtx.translate(rotatingCanvas.width / 2, rotatingCanvas.height / 2);
    rotatingCtx.rotate(angle);

    for (let i = 0; i < 4; i++) {
        rotatingCtx.rotate((Math.PI / 2) * i);
        rotatingCtx.fillStyle = `hsl(${angle * 30}, 70%, 50%)`;
        rotatingCtx.fillRect(-50, -50, 100, 100);
    }
    rotatingCtx.restore();

    angle += 0.02;
    requestAnimationFrame(drawRotatingSquares);
}
drawRotatingSquares();

const bird = document.getElementById('bird');
const gameContainer = document.getElementById('gameContainer');
const scoreDisplay = document.getElementById('score');
let birdY = gameContainer.clientHeight / 2 - bird.clientHeight / 2;
let gravity = 0.5;
let lift = -10;
let velocity = 0;
let score = 0;
let obstacles = [];

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        velocity = lift;
    }
});

function createObstacle() {
    let obstacle = document.createElement('div');
    obstacle.classList.add('obstacle');
    let obstacleHeight = Math.floor(Math.random() * (gameContainer.clientHeight - 200)) + 50;
    obstacle.style.height = obstacleHeight + 'px';
    obstacle.style.right = '0px';
    gameContainer.appendChild(obstacle);
    obstacles.push(obstacle);
}

function gameLoop() {
    velocity += gravity;
    birdY += velocity;

    if (birdY > gameContainer.clientHeight - bird.clientHeight) {
        birdY = gameContainer.clientHeight - bird.clientHeight;
        velocity = 0;
    }

    if (birdY < 0) {
        birdY = 0;
        velocity = 0;
    }

    bird.style.top = birdY + 'px';

    obstacles.forEach((obstacle, index) => {
        let obstacleRight = parseInt(window.getComputedStyle(obstacle).right);
        obstacle.style.right = (obstacleRight + 2) + 'px';

        if (obstacleRight > gameContainer.clientWidth) {
            obstacles.splice(index, 1);
            gameContainer.removeChild(obstacle);
            score++;
            scoreDisplay.textContent = 'Score: ' + score;
        }

        let obstacleLeft = gameContainer.clientWidth - obstacleRight;
        if (obstacleLeft < 90 && obstacleLeft > 50 && (birdY < gameContainer.clientHeight - obstacle.clientHeight || birdY > gameContainer.clientHeight - obstacle.clientHeight + 60)) {
            alert('Game Over! Your score: ' + score);
            document.location.reload();
        }
    });

    requestAnimationFrame(gameLoop);
}

setInterval(createObstacle, 2000);
gameLoop();
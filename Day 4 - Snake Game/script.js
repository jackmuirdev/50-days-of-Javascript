document.addEventListener('DOMContentLoaded', () => {
 const gameBoard = document.getElementById('game-board');
 const startButton = document.getElementById('startButton');
 const scoreTitle = document.getElementById('score');
 const gameOverScreen = document.getElementById('game-over-screen');
 const finalScoreElement = document.getElementById('final-score');
 const restartButton = document.getElementById('restartButton');
 
 const gridSize = 15;
 const cellSize = 20;
 const initialSnakeSize = 1;
 let snake = [];
 let food = { x: 0, y: 0 };
 let direction = 'right';
 let isChangingDirection = false;
 let isGameRunning = false;
 let score = 0;
 let gameInterval; // Added gameInterval variable

 function createInitialSnake() {
     const initialX = Math.floor(gridSize / 2);
     const initialY = Math.floor(gridSize / 2);
     const initialSnake = [];

     for (let i = 0; i < initialSnakeSize; i++) {
         initialSnake.push({ x: initialX - i, y: initialY });
     }

     return initialSnake;
 }

 function startGame() {
     if (!isGameRunning) {
         snake = createInitialSnake();
         generateFood();
         isGameRunning = true;
         draw();

         // Clear any existing intervals
         clearInterval(gameInterval);

         // Start a new interval
         gameInterval = setInterval(update, 200);
     }
 }

 function draw() {
     gameBoard.innerHTML = '';

     snake.forEach(part => {
         const snakePart = document.createElement('div');
         snakePart.className = 'snake-part';
         snakePart.style.left = `${part.x * cellSize}px`;
         snakePart.style.top = `${part.y * cellSize}px`;
         gameBoard.appendChild(snakePart);
     });

     const foodElement = document.createElement('div');
     foodElement.className = 'food';
     foodElement.style.left = `${food.x * cellSize}px`;
     foodElement.style.top = `${food.y * cellSize}px`;
     gameBoard.appendChild(foodElement);

     // Update the score title
     scoreTitle.textContent = `Score: ${score}`;
 }

 function move() {
     const head = Object.assign({}, snake[0]);

     switch (direction) {
         case 'up':
             head.y -= 1;
             break;
         case 'down':
             head.y += 1;
             break;
         case 'left':
             head.x -= 1;
             break;
         case 'right':
             head.x += 1;
             break;
     }

     snake.unshift(head);

     if (head.x === food.x && head.y === food.y) {
         generateFood();
         score++;
     } else {
         snake.pop();
     }
 }

 function generateFood() {
     food = {
         x: Math.floor(Math.random() * gridSize),
         y: Math.floor(Math.random() * gridSize)
     };
 }

 function checkCollision() {
     const head = snake[0];

     if (head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize) {
         resetGame();
     }

     for (let i = 1; i < snake.length; i++) {
         if (head.x === snake[i].x && head.y === snake[i].y) {
             resetGame();
         }
     }
 }

 function resetGame() {
     snake = [];
     direction = 'right';
     isGameRunning = false;

     // Display the game over screen
     gameOverScreen.style.display = 'flex';
     finalScoreElement.textContent = score;

     // Clear the interval
     clearInterval(gameInterval);
 }

 function restartGame() {
     // Hide the game over screen
     gameOverScreen.style.display = 'none';

     // Restart the game
     startGame();
 }

 function update() {
     move();
     checkCollision();
     draw();
 }

 function handleKeyPress(event) {
     if (isChangingDirection) return;

     switch (event.key) {
         case 'ArrowUp':
             if (direction !== 'down') {
                 direction = 'up';
                 isChangingDirection = true;
             }
             break;
         case 'ArrowDown':
             if (direction !== 'up') {
                 direction = 'down';
                 isChangingDirection = true;
             }
             break;
         case 'ArrowLeft':
             if (direction !== 'right') {
                 direction = 'left';
                 isChangingDirection = true;
             }
             break;
         case 'ArrowRight':
             if (direction !== 'left') {
                 direction = 'right';
                 isChangingDirection = true;
             }
             break;
     }
 }

 function handleKeyUp() {
     isChangingDirection = false;
 }

 startButton.addEventListener('click', startGame);
 document.addEventListener('keydown', handleKeyPress);
 document.addEventListener('keyup', handleKeyUp);

 // Event listener for the restart button
 restartButton.addEventListener('click', restartGame);
});

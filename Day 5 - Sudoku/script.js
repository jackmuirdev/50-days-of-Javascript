const enteredNumbersHistory = [];
const sudokuGrid = document.getElementById('sudoku-grid');
let grid = generateRandomSudoku();
const initialGrid = JSON.parse(JSON.stringify(grid));

initializeGrid();

function initializeGrid() {
 for (let i = 0; i < 9; i++) {
  const row = document.createElement('tr');
  for (let j = 0; j < 9; j++) {
   const cell = document.createElement('td');
   cell.textContent = grid[i][j] !== 0 ? grid[i][j] : '';
   cell.className = grid[i][j] !== 0 ? 'initial' : '';
   cell.addEventListener('click', () => cellClicked(cell, i, j));
   row.appendChild(cell);
  }
  sudokuGrid.appendChild(row);
 }
}

function generateRandomSudoku() {
    // Implement a function to generate a random Sudoku puzzle
    // You can use various algorithms or libraries to accomplish this
    // For simplicity, you can use a known Sudoku puzzle and shuffle it.
    const puzzle = [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9]
    ];

    return shuffleSudoku(puzzle);
}

function shuffleSudoku(puzzle) {
    const shuffledPuzzle = [...puzzle];

    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 3; j++) {
            const box = shuffledPuzzle.slice(i, i + 3);
            shuffledPuzzle.splice(i, 3, ...box.sort(() => Math.random() - 0.5));
        }
    }

    const transposedPuzzle = transpose(shuffledPuzzle);
    for (let i = 0; i < 9; i += 3) {
        const box = transposedPuzzle.slice(i, i + 3);
        transposedPuzzle.splice(i, 3, ...box.sort(() => Math.random() - 0.5));
    }

    return transpose(transposedPuzzle);
}

function transpose(matrix) {
    return matrix[0].map((_, i) => matrix.map(row => row[i]));
}

function cellClicked(cell, row, col) {
 const inputValue = prompt('Enter a number (1-9):');
 if (inputValue !== null) {
     const numericValue = parseInt(inputValue);
     if (!isNaN(numericValue) && numericValue >= 1 && numericValue <= 9) {
      if (numericValue !== initialGrid[row][col]) {
       cell.classList.add('red');
      } else {
       cell.classList.remove('red');
      }
   

   grid[row][col] = numericValue;
   updateGrid();

      enteredNumbersHistory.push({ value: grid[row][col], row, col });
     } else {
       alert('Please enter a valid number (1-9).');
     }
 }
}

function updateGrid() {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const cell = sudokuGrid.rows[i].cells[j];
            cell.textContent = grid[i][j] !== 0 ? grid[i][j] : '';
            cell.className = grid[i][j] !== 0 ? 'initial' : '';
            cell.style.backgroundColor = '';
        }
    }
}

function solveSudoku() {
    solve(0, 0);
}

function solve(row, col) {
    if (row === 9) {
        updateGrid();
        return true;
    }

    const nextRow = (col === 8) ? row + 1 : row;
    const nextCol = (col + 1) % 9;

    if (grid[row][col] !== 0) {
        return solve(nextRow, nextCol);
    }

    for (let num = 1; num <= 9; num++) {
        if (isSafe(row, col, num)) {
            grid[row][col] = num;
            updateGrid();

            if (solve(nextRow, nextCol)) {
                return true;
            }

            grid[row][col] = 0;
            updateGrid();
        }
    }

    return false;
}

function isSafe(row, col, num) {
    return (
        isRowSafe(row, num) &&
        isColSafe(col, num) &&
        isBoxSafe(row - (row % 3), col - (col % 3), num)
    );
}

function isRowSafe(row, num) {
    return !grid[row].includes(num);
}

function isColSafe(col, num) {
    for (let i = 0; i < 9; i++) {
        if (grid[i][col] === num) {
            return false;
        }
    }
    return true;
}

function isBoxSafe(startRow, startCol, num) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (grid[startRow + i][startCol + j] === num) {
                return false;
            }
        }
    }
    return true;
}

function resetSudoku() {
    grid = JSON.parse(JSON.stringify(initialGrid));
    updateGrid();
    enteredNumbersHistory.length = 0;
}

function clearSudoku() {
    if (enteredNumbersHistory.length > 0) {
        const lastEntered = enteredNumbersHistory.pop();
        grid[lastEntered.row][lastEntered.col] = 0;
        updateGrid();
    }
}

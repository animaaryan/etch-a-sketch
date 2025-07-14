const mainArt = document.querySelector("#canvas");

// Find a way to repeat these into a grid
function createGrid(gridSize) {

    // Create a loop that runs from 0 to the gridSize
    for (let i = 0; i < (gridSize * gridSize); i++) {

        // Create the grid squares div
        let squares = document.createElement('div');
        squares.className = 'square-div';
        
        let size = 500 / gridSize;

        // Fits the width and height within the boundaries
        squares.style.width = `${size}px`;
        squares.style.height = `${size}px`;
        mainArt.appendChild(squares);
    }
}

createGrid(16);
function makeGrid(gridNum) {

    // Get reference to the container class
    const INNER_SQUARE = document.querySelector(".inner-container");

    // Here's where the magic happens on hover
    INNER_SQUARE.addEventListener('mouseover',
        e => e.target.classList.add('magic-color')
    );

    // Call a for loop that loops 16 times for rows and columns
    for (let i = 0; i < gridNum; i++) {

        // Create a div for the columns
        let GRID_COLUMNS = document.createElement("div");
        GRID_COLUMNS.classList.add("columns");

        // Run in inner loop for the rows
        for (let j = 1; j <= gridNum; j++) {

            // Create a div for the rows
            let GRID_ROWS = document.createElement("div");
            GRID_ROWS.classList.add("row");

            // Styling
            GRID_ROWS.style.border = "1px solid black";

            // Append to columns
            GRID_COLUMNS.appendChild(GRID_ROWS);
        }

        // Slap the grid inside the cute box
        INNER_SQUARE.appendChild(GRID_COLUMNS);
    }
}

// Encapsulate the cleargrid into a function
function clearGrid() {
    document.querySelector(".inner-container").innerHTML = "";
    makeGrid(16);
}

// Create a reset function
function onReset() {
    document.querySelector(".btn-reset").addEventListener("click", clearGrid);

}

onReset();

// Set size for grid
const BUTTON_DIV = document.querySelector(".btn-size");
let gridNum = 0;

// On click as user to enter a prompt
BUTTON_DIV.addEventListener("click", () => {

    gridNum = 0;
    while (gridNum == 0 || gridNum > 100 || gridNum < 0) {
        gridNum = Number(prompt("Enter a number between 0 - 100"));
    }

    // Clear existing grid
    const INNER_SQUARE = document.querySelector(".inner-container");
    INNER_SQUARE.innerHTML = "";

    makeGrid(gridNum);
});


makeGrid(16);


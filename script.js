// Get reference to the container class
const INNER_SQUARE = document.getElementById("outer-container");

function makeGrid() {

    // Call a for loop that loops 16 times
    for (let i = 0; i < 16; i++) {

        var number = document.createTextNode(i);

        // Create a div for the rows
        var GRID_ROWS = document.createElement('div');
        GRID_ROWS.className = "main-grid";

        GRID_ROWS.appendChild(number);

        // Adding a lil style to it
        GRID_ROWS.style.display = "flex";
        GRID_ROWS.style.flexDirection = "column";
        GRID_ROWS.style.height = "50px";
        GRID_ROWS.style.width = "120px";
        GRID_ROWS.style.border = "1px solid black";
        GRID_ROWS.style.alignItems = "center";

        // Slap the grid inside the cute box
        INNER_SQUARE.appendChild(GRID_ROWS);
    }
}

makeGrid();


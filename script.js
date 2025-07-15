function makeGrid(size) {

    // Get reference to the container class
    const INNER_SQUARE = document.querySelector(".inner-container");

    // Call a for loop that loops 16 times for rows and columns
    for (let i = 0; i < size; i++) {

        // Create a div for the columns
        let GRID_COLUMNS = document.createElement("div");
        GRID_COLUMNS.classList.add("columns");

        // Run in inner loop for the rows
        for (let j = 1; j <= size; j++) {

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

makeGrid(16);


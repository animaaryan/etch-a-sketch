/* ****************************  
   Create global variables here
   ****************************  */

// Set default color
let activeColor = "grey";
let shadingMode = false;
let eraserMode = false;

// Set size for grid
const BUTTON_DIV = document.querySelector(".btn-size");
let gridNum = 16;

/* ****************************  
    Function to create a grid
  ****************************  */

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

            // Set the default brightness
            GRID_ROWS.dataset.brightness = 100;

            // Create an event listener for calling the shading and erasing function
            GRID_ROWS.addEventListener("mouseover", () => {
                if (eraserMode) {
                    GRID_ROWS.style.backgroundColor = "white"; // or your base color
                    GRID_ROWS.style.filter = "none";
                    GRID_ROWS.dataset.brightness = 100;
                }
                else if (shadingMode) {
                    let currentBrightness = GRID_ROWS.dataset.brightness || 100;
                    currentBrightness = Math.max(parseInt(currentBrightness) - 10, 0);
                    GRID_ROWS.dataset.brightness = currentBrightness;
                    GRID_ROWS.style.backgroundColor = activeColor;
                    GRID_ROWS.style.filter = `brightness(${currentBrightness}%)`;
                }
                else {
                    GRID_ROWS.style.backgroundColor = activeColor;
                    GRID_ROWS.style.filter = "none";
                    GRID_ROWS.dataset.brightness = 100;
                }
            });

            // Append to columns
            GRID_COLUMNS.appendChild(GRID_ROWS);
        }

        // Slap the grid inside the cute box
        INNER_SQUARE.appendChild(GRID_COLUMNS);
    }
}

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

/* ****************************  
   Additional Helper Functions
  ****************************  */

// Encapsulate the cleargrid into a function
function clearGrid() {
    document.querySelector(".inner-container").innerHTML = "";
    makeGrid(gridNum);
}

// Create a reset function
function onReset() {
    document.querySelector(".btn-reset").addEventListener("click", clearGrid);
}

/* ****************************  
   Random Color Generator
  ****************************  */

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
}

// Function to use a random color instead of the black default 
function useColor() {
    activeColor = getRandomColor();
    console.log(activeColor);
};

function onColorClick() {
    document.querySelector(".btn-color").addEventListener("click", useColor);
}


/* ****************************  
   Shading Function Call
  ****************************  */
function onShadeClick() {
    const SHADE_BUTTON = document.querySelector('.btn-shading');
    SHADE_BUTTON.addEventListener('click', () => {
        shadingMode = !shadingMode;
        SHADE_BUTTON.textContent = shadingMode ? "Shading: ON" : "Shading: OFF";
        console.log("Shading mode:", shadingMode);
    });
}

/* ****************************  
   Erase Function Call
  ****************************  */
function onEraseClick() {
    const ERASE_BUTTON = document.querySelector('.btn-erase');
    ERASE_BUTTON.addEventListener('click', () => {
        eraserMode = !eraserMode;

        if (eraserMode) {
            shadingMode = false;
            document.querySelector(".btn-shading").textContent = "Shading: OFF";
        }
        
        ERASE_BUTTON.textContent = shadingMode ? "Eraser: ON" : "Eraser: OFF";
        console.log("Erasing mode:", eraserMode);
    });
}


/* ****************************  
    Call functions here
  ****************************  */

onReset();
makeGrid(16);
onColorClick();
onShadeClick();
onEraseClick();

// Creating divs using JS
const container = document.getElementById('container');

// Create a grid function
function makeDivs(numDivs) {
    for (let x = 0; x < numDivs; x++) {
        let cells = document.createElement('div');
        container.appendChild(cells);
    }
}

makeDivs(16);
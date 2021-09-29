// initalize variables

const gridSection = document.querySelector('section');

const clearBtn = document.querySelector('button')

const gridTile = document.createElement('div');

gridTile.classList.add('grid-tile')


// Creates etch-a-sketch grid based on specified size (Default: 16x16)



function randomRBGString() {
    let v1 = Math.floor(Math.random() * 255 + 1);
    let v2 = Math.floor(Math.random() * 255 + 1);
    let v3 = Math.floor(Math.random() * 255 + 1);

    return `rgb(${v1}, ${v2}, ${v3})`
}

function addRainbow (e) {
    this.style.backgroundColor = randomRBGString();
}

function addBlack (e) {
    this.style.backgroundColor = 'black';
}

let x = .1;
function addTrailingBlack (e) {
    if (x > 1) x = .1;
    
    this.style.backgroundColor = `rgba(0,0,0,${x})`;
    x += .1;
}

function createGrid (gridSize, gridTileColor) {
    gridSection.style.cssText = `grid-template-rows: repeat(${gridSize}, 1fr); grid-template-columns: repeat(${gridSize}, 1fr)`;
    gridSection.textContent = ''

    for (let i = 1; i <= gridSize * gridSize; i++) {
        gridSection.appendChild(gridTile.cloneNode());  
      }
    
    const gridTiles = document.querySelectorAll('div')

    gridTiles.forEach(gridTile => {
        gridTile.style.backgroundColor = '';
        gridTile.addEventListener('mouseover', gridTileColor);
    })
}

createGrid(16, addBlack)

// Reset button with gridsize prompt

clearBtn.addEventListener('click', () => {
    let gridSize = prompt('Enter a grid size as a single integer (16, 32, 64, etc.)');

    let gridTileColorResponse = prompt('Choose one: Black, Trailing Black, or Rainbow');

    if (gridSize > 100) {
        alert('Grid size must be less than 100x100');
    }
    else if (gridSize > 0) {
        let gridTileColor = '';
        
        if (gridTileColorResponse.toLowerCase() == 'trailing black') gridTileColor = addTrailingBlack;
        else if (gridTileColorResponse.toLowerCase() == 'rainbow') gridTileColor = addRainbow;
        else gridTileColor = addBlack;
        
        createGrid(Math.floor(gridSize), gridTileColor)    
    }
    else {
        alert('Grid size must be a positive integer');
    }
})
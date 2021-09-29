// initalize variables

const gridSection = document.querySelector('section');

const clearBtn = document.querySelector('button')

const gridTile = document.createElement('div');

gridTile.classList.add('grid-tile')


// Creates etch-a-sketch grid based on specified size (Default: 16x16)

function addColor (e) {
        this.style.backgroundColor = 'black';
    }

function createGrid (gridsize) {
    gridSection.style.cssText = `grid-template-rows: repeat(${gridsize}, 1fr); grid-template-columns: repeat(${gridsize}, 1fr)`;
    gridSection.textContent = ''

    for (let i = 1; i <= gridsize * gridsize; i++) {
        gridSection.appendChild(gridTile.cloneNode());  
      }
    
    const gridTiles = document.querySelectorAll('div')

    gridTiles.forEach(gridTile => {
        gridTile.style.backgroundColor = '';
        gridTile.addEventListener('mouseover', addColor);
    })
}

createGrid(16)

// Reset button with gridsize prompt

clearBtn.addEventListener('click', () => {
    let gridsize = prompt('Enter a grid size as a single integer (16, 32, 64, etc.)');

    if (gridsize > 100) {
        alert('Grid size must be less than 100x100');
    }
    else if (typeof gridsize != 'number') {
        alert('Grid size must be a number');
    }
    else {
        createGrid(Math.floor(gridsize));
    }
})
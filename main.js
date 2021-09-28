const main = document.createElement('main');

const div = document.createElement('div');

document.body.appendChild(main);

main.classList.add('grid');

div.classList.add('grid-div')

for (let i = 1; i <= 256; i++) {
  main.append(div.cloneNode());  
}

const divs = document.querySelectorAll('div')

function addColor (e) {
    this.style.backgroundColor = 'black';
}

divs.forEach(div => {
    div.addEventListener('mouseover', addColor)
})
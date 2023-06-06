const container = document.querySelector('.container');
const btnBlack = document.createElement('button');
const btnGrey = document.createElement('button');
const btnRGB = document.createElement('button');
const btnSize = document.createElement('button');
const buttonContainer = document.querySelector('.buttons');

function createDivs(col, rows) {
    for (let i = 0; i < (col * rows); i++) {
        const div = document.createElement('div');
        div.style.border = '1px solid pink';
        container.style.gridTemplateColumns = `repeat(${col}, ifr)`;
        container.style.gridTemplateRows = `repeat(${rows}, ifr)`;
        container.appendChild(div).classList.add('box');
    }
}

createDivs(16, 16);
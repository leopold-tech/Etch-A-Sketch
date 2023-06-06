const container = document.querySelector('.container');
const btnBlack = document.createElement('button');
const btnGrey = document.createElement('button');
const btnRGB = document.createElement('button');
const btnErase = document.createElement('button');
const btnSize = document.createElement('button');
const buttonContainer = document.querySelector('.buttons');

// Append buttons, 

function createDivs(col, rows) {
    for (let i = 0; i < (col * rows); i++) {
        const div = document.createElement('div');
        div.style.border = '1px solid pink';
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('box');
    }
}
createDivs(16, 16);

function blackColor() {
    const boxes = container.querySelectorAll('.box');
    btnBlack.textContent = 'Black';
    btnBlack.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            box.style.backgroundColor = 'rgb(0, 0, 0)';
        }))
    })
    buttonContainer.appendChild(btnBlack).classList.add('btn');
} 
blackColor()

function greyColor() {
    const boxes = container.querySelectorAll('.box');
    btnGrey.textContent = 'Grey';
    btnGrey.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            let rnum = Math.floor(Math.random() * 255);
            box.style.backgroundColor = `rgb(${rnum}, ${rnum}, ${rnum})`;
        }))
    })
    buttonContainer.appendChild(btnGrey).classList.add('btn');
} 
greyColor()

function rgbColor() {
    const boxes = container.querySelectorAll('.box');
    btnRGB.textContent = 'RGB';
    btnRGB.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }))
    })
    buttonContainer.appendChild(btnRGB).classList.add('btn');
} 
rgbColor()

function removeColor() {
    const boxes = container.querySelectorAll('.box');
    btnErase.textContent = 'Erase';
    btnErase.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            box.style.backgroundColor = 'rgb(255, 255, 255)';
        }))
    })
    buttonContainer.appendChild(btnErase).classList.add('btn');
} 
removeColor()
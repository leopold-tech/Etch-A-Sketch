const container = document.querySelector('.container');
const btnBlack = document.createElement('button');
const btnGrey = document.createElement('button');
const btnRGB = document.createElement('button');
const btnErase = document.createElement('button');
const btnSize = document.createElement('button');
const btnReset = document.createElement('button');
const buttonContainer = document.querySelector('.buttons');


// Functions needed to create the game
createDivs(16, 16);
blackColor()
greyColor()
rgbColor()
eraseColor()
gridSize()
resetBoard()

function createDivs(col, rows) {
    for (let i = 0; i < (col * rows); i++) {
        const div = document.createElement('div');
        // div.style.border = '1px solid pink';
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('box');
    }
}

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

function eraseColor() {
    const boxes = container.querySelectorAll('.box');
    btnErase.textContent = 'Erase';
    btnErase.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            box.style.backgroundColor = 'rgb(255, 255, 255)';
        }))
    })
    buttonContainer.appendChild(btnErase).classList.add('btn');
} 

// Reset board button
function resetBoard(){
    const boxes = container.querySelectorAll('.box');
    btnReset.textContent = 'Reset Board';
    btnReset.addEventListener('click', () => {
        resetBoxes()
        createDivs(16, 16)
        blackColor()
        greyColor()
        rgbColor()
        eraseColor()
        gridSize()
    })
    buttonContainer.appendChild(btnReset).classList.add('btn');
}

function resetBoxes() {
    const boxes = container.querySelectorAll('.box');
    boxes.forEach(box => box.remove());
}

// Resize grid of board
function gridSize() {
    btnSize.textContent = 'Grid Size';
    btnSize.addEventListener('click', () => {
        let user = prompt('pick square grid size');
        if (user === null || user < 1) {
            resetBoxes()
            createDivs(16, 16)
            blackColor()
            greyColor()
            rgbColor()
            eraseColor()
            gridSize()
            resetBoard()
        } 
        else {
            resetBoxes()
            createDivs(user, user)
            blackColor()
            greyColor()
            rgbColor()
            eraseColor()
            gridSize()
            resetBoard()
        }
    })
    buttonContainer.appendChild(btnSize).classList.add('btn');
}

// Function for background animations
function bgAnim(){
    let colors = ['red', 'blue', 'yellow', 'green', 'pink'];
    const section = document.querySelector('.section');
    const span = document.createElement('span');

    let size = Math.random() * 30;
    span.style.width = size + 10 + 'px';
    span.style.height = size + 10 + 'px';

    span.style.borderRadius = `${size}em`;
    span.style.top = Math.random() * innerHeight + 'px';
    span.style.left = Math.random() * innerWidth + 'px';

    const backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    span.style.backgroundColor = backgroundColor;
    section.appendChild(span);

    setTimeout(() => {span.remove()}, 3000);
}

setInterval(bgAnim, 200);
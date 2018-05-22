let boxContainer = document.getElementById('box-container');
let colorPalette = document.getElementById('palette');
let myBody = document.getElementById('main-body');
let brushColor = document.getElementById('paletteColor');

let paletteColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'brown', 'gray', 'black', 'white'];

myBody.style.width = screen.width;
myBody.style.height = screen.height;

// Changes box color from white to red
document.getElementById('box-container').addEventListener('click', function (e) {
        e.target.style.backgroundColor = brushColor.style.backgroundColor;
});

// stores color of clicked palette
document.getElementById('palette-areaID').addEventListener('click', function (e) {
    brushColor.style.backgroundColor = e.target.style.backgroundColor;
});

// creates boxes
function createBox() {
    for (let i = 0; i < 10000; i++) {
        let square = document.createElement("div");
        square.classList.add('box');
        boxContainer.append(square);
    }
}

// creates palettes
function createPalette() {
    for (let i = 0 ; i < paletteColors.length; i++) {
        let circle = document.createElement("div");
        circle.classList.add('palette');
        circle.style.backgroundColor = paletteColors[i];
        colorPalette.append(circle);
    }
}
createBox();
createPalette();

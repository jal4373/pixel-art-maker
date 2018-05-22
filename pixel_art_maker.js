let boxContainer = document.getElementById('box-container');
let colorPalette = document.getElementById('palette');
let myBody = document.getElementById('main-body');
let brushColor = document.getElementById('paletteColor');
let paletteArea = document.getElementById('palette-areaID')
let paletteColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'brown', 'gray', 'black', 'white'];

boxContainer.style.width = screen.width;
boxContainer.style.height = screen.height;


// stores color of clicked palette
paletteArea.addEventListener('click', function (e) {
    brushColor.style.backgroundColor = e.target.style.backgroundColor;
});

// Changes box color depending on brush color
boxContainer.addEventListener('click', function (e) {
        e.target.style.backgroundColor = brushColor.style.backgroundColor;
});

paletteArea.addEventListener('mousedown', function (e) {

})

colorPalette.addEventListener('dragstart', function(e) { console.log('Dragging #box1'); });
colorPalette.addEventListener('dragend', function(e) { console.log('Dragging ended'); });

paletteArea.addEventListener('dragenter', function(e) { console.log('Entered into #box2'); });
paletteArea.addEventListener('dragleave', function(e) { console.log('Leaving #box2'); });








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
        if (paletteColors[i]== 'white') {
            circle.style.border= "1px solid black";
        }
        colorPalette.append(circle);
    }
}

createBox();
createPalette();

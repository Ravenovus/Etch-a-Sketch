function createGrid(side){
    const blockSize = (480 / side) - 2;

    let grid = document.querySelector("#grid_container");
    
    for(let i=0;i<side*side;i++){
        let block = document.createElement("div");
        block.classList.add("block");
        block.style.width = `${blockSize}px`;
        block.style.height = `${blockSize}px`;
        block.addEventListener("mouseover", function (e) {
            e.target.style.background = colorPicker.value;
        });
        grid.appendChild(block);
    }
}

function resetGrid(){
    const grid = document.getElementById("grid_container");
    while (grid.firstChild){
        grid.removeChild(grid.lastChild);
    }
    createGrid(size);
}

function resizeGrid(){
    let newSize = 0;

    while(newSize <= 0 || newSize >= 101){
        newSize = prompt("Please enter a size between 1-100");
    }

    size = newSize;
    resetGrid();
}


let size = 16;

let resetButton = document.querySelector("#reset");
let resizeButton = document.querySelector("#changeSize");
let colorPicker = document.querySelector("#colorInput");

resetButton.addEventListener("click", resetGrid);
resizeButton.addEventListener("click", resizeGrid);


createGrid(size);


const INITIAL_SIZE = 16;
const mainDiv = document.querySelector(".grid");
const btn = document.createElement("button");
bdy = document.querySelector("body");
btn.innerText = "Size";
bdy.prepend(btn);
newGrid(INITIAL_SIZE);
btn.addEventListener("click", () => {
    let size = prompt("Please enter the grid size");
    while(size > 100)
    {
        size = prompt("Please enter a value no greater than 100");
    }
    newGrid(size);
});
function newGrid(size) {
    mainDiv.innerHTML = "";
    let divArray = [];
    for(let row = 0; row < size; row++) {
        divArray[row] = [];
        const squareSize = 500 / size;
        mainDiv.style.display = "flex";
        mainDiv.style.flexWrap = "wrap";
        mainDiv.style.width = "500px";
        for(let col = 0; col < size; col++) {
            divArray[row][col] = document.createElement("div");
            mainDiv.appendChild(divArray[row][col]);
            divArray[row][col].style.width = squareSize + "px";
            divArray[row][col].style.height = squareSize + "px";
            divArray[row][col].style.backgroundColor = "#F0F0F0";
            divArray[row][col].addEventListener("mouseover", () => {
                divArray[row][col].style.backgroundColor = randomColor();
            });
        }
    }
}

function randomColor() {
    const r = Math.floor(Math.random() * 256).toString(16);
    const g = Math.floor(Math.random() * 256).toString(16);
    const b = Math.floor(Math.random() * 256).toString(16);
    return "#" + r + g + b;
}


//console.log(divArray);
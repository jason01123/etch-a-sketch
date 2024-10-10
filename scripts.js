const ARRAY_SIZE = 16;
let divArray = [];

for(let row = 0; row < ARRAY_SIZE; row++) {
    divArray[row] = [];
    const mainDiv = document.querySelector(".grid");
    mainDiv.style.display = "flex";
    mainDiv.style.flexWrap = "wrap";
    mainDiv.style.width = "240px";
    for(let col = 0; col < ARRAY_SIZE; col++) {
        divArray[row][col] = document.createElement("div");
        mainDiv.appendChild(divArray[row][col]);
        //divArray[row][col].innerHTML = col +1;
        divArray[row][col].style.width = "15px";
        divArray[row][col].style.height = "15px";
        divArray[row][col].style.backgroundColor = "#F0F0F0";
    }
}



//console.log(divArray);
let gridContainer = document.querySelector(".grid-container");
let clearButton = document.querySelector("#clear-button");
let changeSizeButton = document.querySelector("#change-size-button")
let root = document.documentElement;
let gridElementsReference;

function addGridItems(size = 16){
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            let element = document.createElement("div");
            element.classList.add("grid-items");
            gridContainer.appendChild(element);
        }
    }
    applyEventListeners();
}

function applyEventListeners(){
    gridElementsReference = document.querySelectorAll(".grid-items");
    gridElementsReference.forEach( (element) => {
        element.addEventListener("mouseover", () => {
            element.classList.add("black-color");
        })
    })
}

function applyCssGridSize(size = 16){
    root.style.setProperty("--column-count", size);
}

clearButton.addEventListener("click", () => {
    gridElementsReference.forEach( (element) => {
        element.classList.remove("black-color");
    })
})

changeSizeButton.addEventListener("click", () => {
    let newSize = parseInt(prompt("Enter your new size"));
    if(isNaN(newSize)){
        return;
    }else{
        gridContainer.innerHTML = "";
        applyCssGridSize(newSize);
        addGridItems(newSize);
    }
})

applyCssGridSize();
addGridItems();

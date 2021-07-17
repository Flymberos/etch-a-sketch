let gridContainer = document.querySelector(".grid-container");
let colorButtons = document.querySelectorAll(".color-button");
let optionButtons = document.querySelectorAll(".button");
let gridElements;
let color = "Black";

function applyGridElements(size = 16){
    for(let i=0; i<size; i++){
        for(let j=0; j<size; j++){
            let div = document.createElement("div");
            div.classList.add("grid-items");
            gridContainer.appendChild(div);
        }
    }
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridElements = document.querySelectorAll(".grid-items");
    gridElements.forEach( element => element.addEventListener("mouseover", colorOptions));
}

colorButtons.forEach( button => {
    button.addEventListener("click", () => {
        color = button.textContent;
    });
})

optionButtons.forEach( button => {
    button.addEventListener("click", () => {

        console.log(button.textContent);

        if(button.textContent == "Change size"){
            let gridSize = Number(prompt("Enter your new grid size (100 max)"));

            if(isNaN(gridSize)){
                alert("Please enter a number.");
            }

            if(gridSize > 100 || gridSize < 0){
                alert("Wrong number input, check your input and try again.");
            }

            gridContainer.innerHTML = "";
            applyGridElements(gridSize);
        }
        
        if(button.textContent == "Clear"){
            gridElements.forEach( element => {
                element.style.backgroundColor = "white";
            })
        }
    });
})

function colorOptions(){
    console.log(color);
    switch(color){
        case "Black":
            this.style.opacity = 1;
            this.style.backgroundColor = "rgba(0 , 0, 0, 1)";
            break;
        case "Rainbow":
            this.style.opacity = 1;
            let R = Math.floor(Math.random() * 256);
            let G = Math.floor(Math.random() * 256);
            let B = Math.floor(Math.random() * 256);
            this.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
            break;
        case "Shading":
            opacity = parseFloat(this.style.opacity);   

            if(isNaN(opacity) || opacity == 1){
                this.style.opacity = 0.1;
                this.style.backgroundColor = "black";
            }

            if(opacity < 0.9){
                this.style.opacity = parseFloat(this.style.opacity) + 0.1;
            }

            break;
    }
}

applyGridElements();


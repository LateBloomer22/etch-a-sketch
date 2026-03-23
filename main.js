let slider = document.getElementById("input");
let sliderOutput = document.getElementById("sliderOutput");
const container = document.getElementById("container");
let eraserBtn = document.getElementById("eraser");
let isOn = false;


sliderOutput.textContent = `${slider.value} x ${slider.value}`;
createGrid(slider.value);

// Slider input for user
slider.oninput = function() {
    reset();
    sliderOutput.textContent = `${this.value} x ${this.value}`;
    createGrid(this.value);
    
}

// Eraser button for user
eraserBtn.addEventListener("click", () => {
    isOn = !isOn;
    eraserBtn.style["backgroundColor"] = isOn ? "#007FFF" : "white";
    if(isOn){
        let elements = document.querySelectorAll('.grid-item');
        elements.forEach(el => {
            el.addEventListener("mouseover", () => {
                eraser(el);
            });
        });
    } 
    else {
        applyStyle();
    };
});


function createGrid(side) {
    for (let i = 1; i <= side*side; i++){
        let cell = document.createElement("div");
        cell.className = 'grid-item';
        container.append(cell);
    }
    applyStyle();
};

function applyStyle() {
    let elements = document.querySelectorAll('.grid-item');
    elements.forEach(el => {
        Object.assign (el.style, {
            width: `calc(600px/${slider.value})`,
            height: `calc(600px/${slider.value})`,
            border: `0.5px solid grey`
        });
        el.addEventListener("mouseover", () => {
            applyBackground(el);            
        })
    });
}

function applyBackground (elem) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    elem.style["background-color"] = `rgb(${r},${g},${b})`;
}

function eraser(elem) {
    elem.style["background-color"] = "white";
}

function reset() {
    container.innerHTML = "";
    isOn = false;
    eraserBtn.style["backgroundColor"] = "white";
}







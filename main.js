let slider = document.getElementById("input");
let sliderOutput = document.getElementById("sliderOutput");
const container = document.getElementById("container");
let eraserBtn = document.getElementById("eraser");
let darkenBtn = document.getElementById("darken");
let resetBtn = document.getElementById("reset");
let isOn = false;
let isDarken = false;

sliderOutput.textContent = `${slider.value} x ${slider.value}`;
createGrid(slider.value);
applyStyle();

// Slider input for user
slider.oninput = function() {
    container.innerHTML = "";
    resetDarken();
    resetEraser();
    sliderOutput.textContent = `${this.value} x ${this.value}`;
    createGrid(this.value);
    applyStyle();
}

// Eraser button for user
eraserBtn.addEventListener("click", () => {
    isOn = !isOn;
    eraserBtn.style["backgroundColor"] = isOn ? "#007FFF" : "rgb(255,255,255)";
    resetDarken();
    applyStyle();
});

// Darken button to increase darkness
darkenBtn.addEventListener("click", () => {
    isDarken = !isDarken;
    darkenBtn.style["backgroundColor"] = isDarken ? "#007FFF" : "rgb(255,255,255)";
    resetEraser();
    applyStyle();
});

// Reset option
resetBtn.addEventListener("click", () => {
    resetEraser();
    resetDarken();
    let elements = document.querySelectorAll('.grid-item');
    elements.forEach(el => {
        el.style["background-color"] = "rgba(255,255,255,1)";
    });
    applyStyle();
});

function createGrid(side) {
    for (let i = 1; i <= side*side; i++){
        let cell = document.createElement("div");
        cell.className = 'grid-item';
        cell.style["backgroundColor"] = "rgba(255,255,255,1)";
        container.append(cell);
    }
};

function applyStyle() {
    let elements = document.querySelectorAll('.grid-item');
    elements.forEach(el => {
        Object.assign (el.style, {
            width: `calc(600px/${slider.value})`,
            height: `calc(600px/${slider.value})`,
            border: `0.5px solid grey`,
        });
        el.addEventListener("mouseover", () => {
            if (isOn) {
                eraser(el);
            } else if (isDarken) {
                darken(el, 0.9);
            } else {
                applyBackground(el);
            }
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
    elem.style["background-color"] = "rgb(255,255,255)";
}

function resetEraser() {
    isOn = false;
    eraserBtn.style["backgroundColor"] = "rgb(255,255,255)";
}

function resetDarken() {
    isDarken = false;
    darkenBtn.style["backgroundColor"] = "rgb(255,255,255)";
}

function darken(elem, amount) {
    let bgColor = window.getComputedStyle(elem).backgroundColor;
    let [r, g, b] = bgColor.match(/\d+/g).map(Number);
    r = Math.floor(r * amount);
    g = Math.floor(g * amount);
    b = Math.floor(b * amount);
    elem.style["background-color"] = `rgb(${r},${g},${b})`;
}

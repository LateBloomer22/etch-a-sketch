// Slider input for user
let slider = document.getElementById("input");
let sliderOutput = document.getElementById("sliderOutput");
const container = document.getElementById("container");

sliderOutput.textContent = `${slider.value} x ${slider.value}`;
createGrid(slider.value);

slider.oninput = function() {
    container.innerHTML = "";
    sliderOutput.textContent = `${this.value} x ${this.value}`;
    createGrid(this.value);
}
 
function createGrid(side) {
    for (let i = 1; i <= side*side; i++){
        let cell = document.createElement("div");
        cell.className = 'grid-item';
        // cell.textContent = "text";
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
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
            el.style["background-color"] = `rgb(${r},${g},${b})`;
        })
    });
}




// Slider input for user
let slider = document.getElementById("input");
let sliderOutput = document.getElementById("sliderOutput");

sliderOutput.textContent = `${slider.value} x ${slider.value}`;

slider.oninput = function() {
    sliderOutput.textContent = `${this.value} x ${this.value}`;
}

const container = document.getElementById("container");
 
function createGrid(side) {
    for (let i = 1; i <= side*side; i++){
        let cell = document.createElement("div");
        cell.className = 'grid-item';
        cell.textContent = "Sample text";
        container.append(cell);
    }
};

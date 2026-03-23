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
        cell.textContent = "Sample text";
        container.append(cell);
    }
};


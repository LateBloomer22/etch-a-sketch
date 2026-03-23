// Slider input for user
let slider = document.getElementById("input");
let sliderOutput = document.getElementById("sliderOutput");

sliderOutput.textContent = `${slider.value} x ${slider.value}`;

slider.oninput = function() {
    sliderOutput.textContent = `${this.value} x ${this.value}`;
}
let click = false;

// creating and adding variables from html
const padContainer = document.querySelector(".pad");
const slider = document.querySelector(".slider");
const main = document.querySelector("main");
const pen = document.createElement("p");
pen.classList.add("pen");
const clearButton = document.querySelector(".clear-button");
const colorPicker = document.querySelector(".color");
const thumb = document.querySelector(".thumb-value")


//used to change scale of the graph
function changePadSize (size) {

    // removing old boxes and creating the rows and collums
    
    const boxes = padContainer.querySelectorAll("div");
    boxes.forEach((div) => div.remove());
    padContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    padContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    // creats as many boxes as we need depending on the slider value
    let quantity = size * size;

    for (let i = 0; i < quantity; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.backgroundColor = "#fafaffff";

        // event listeners
        box.addEventListener("mouseover", e => {
            color(colorPicker.value);
        })

        clearButton.addEventListener("click", e => {
            box.style.backgroundColor = "#fafaffff";
        })

        //function to change color
        function color (type) {
            if (click === true) {
                box.style.backgroundColor = type;
            }
        }

        padContainer.insertAdjacentElement("beforeend", box);
    }
    main.appendChild(pen);
}

changePadSize(slider.value);

pen.textContent = "pen off";
thumb.textContent = slider.value + " x " + slider.value;

slider.oninput = (() => {
    let value = slider.value;
    thumb.textContent = value + " x " + value;
})



//event listeners
slider.addEventListener("click", e => {
    changePadSize(slider.value);
});

slider.addEventListener("input", function() {
    let v = slider.value;
    let color = "linear-gradient(90deg, #EFD9CE " + v + "%, #fafaffff " + v +"%)";
    slider.style.background = color;
})

padContainer.addEventListener("click", e => {
    click = !click;
    if (click) {
        pen.textContent = "pen on";
    } else {
        pen.textContent = "pen off";
    }
});



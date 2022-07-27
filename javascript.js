//used to chnage scale of the graph
function changePadSize (size) {
    const padContainer = document.querySelector(".pad");
    const boxes = padContainer.querySelectorAll("div");
    boxes.forEach((div) => div.remove());
    padContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    padContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let quantity = size * size;
    for (let i = 0; i < quantity; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.backgroundColor = "pink";
        box.style.border = "1px solid black";
        padContainer.insertAdjacentElement("beforeend", box);
    }
}

const slider = document.querySelector(".slider");

changePadSize(slider.value);

//event listeners
slider.addEventListener("click", e => {
    changePadSize(slider.value);
})


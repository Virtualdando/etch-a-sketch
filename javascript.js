const gridContainer = document.createElement("div");
gridContainer.style.display = "flex";
gridContainer.style.flexWrap = "wrap";
gridContainer.style.width = "512px";
gridContainer.style.height = "512px";
gridContainer.style.margin = "auto";
gridContainer.style.border = "2px solid black";
gridContainer.style.boxSizing = "border-box";
gridContainer.style.justifyContent = "flex-start";
gridContainer.style.alignItems = "flex-start";
gridContainer.style.overflow = "hidden";

const buttonContainer = document.createElement("div");
buttonContainer.style.display = "flex";
buttonContainer.style.justifyContent = "center";
buttonContainer.style.marginTop = "20px";

const button = document.createElement("button");
button.textContent = "Insert number of grid squares";
button.style.padding = "10px 20px";
button.style.fontSize = "16px";
button.style.fontWeight = "bold";
button.style.backgroundColor = "white";
button.style.border = "2px solid black";
button.style.cursor = "pointer";

let squares;

button.addEventListener("click", () => {
  squares = prompt("How many squares do you want?");
  squares = parseInt(squares);

  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }

  for (let i = 0; i < squares * squares; i++) {
    const div = document.createElement("div");
    div.style.flex = `0 0 ${512 / squares}px`;
    div.style.height = `${512 / squares}px`;
    div.style.border = "1px solid black";
    div.style.backgroundColor = "white";
    div.addEventListener("mouseover", () => {
        let currentColor = div.style.backgroundColor;
        if (currentColor === "white") {
          // If the current color is white, set it to a random RGB value
          const red = Math.floor(Math.random() * 256);
          const green = Math.floor(Math.random() * 256);
          const blue = Math.floor(Math.random() * 256);
          div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        } else {
          // Otherwise, darken the color by 10%
          const currentRGB = currentColor.match(/\d+/g);
          const newRed = Math.floor(currentRGB[0] * 0.9);
          const newGreen = Math.floor(currentRGB[1] * 0.9);
          const newBlue = Math.floor(currentRGB[2] * 0.9);
          div.style.backgroundColor = `rgb(${newRed}, ${newGreen}, ${newBlue})`;
        }
      });
      gridContainer.appendChild(div);
    }
});

buttonContainer.appendChild(button);
document.body.appendChild(buttonContainer);
document.body.appendChild(gridContainer);
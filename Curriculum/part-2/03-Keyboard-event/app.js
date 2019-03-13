
function checkKeyPress(event) {
  switch (event.key) {
    case "0":
    char.style.backgroundColor = "red"
    break;
    case "1":
    char.style.backgroundColor = "blue"
    break;
    case "2":
    char.style.backgroundColor = "green"
    break;
    case "3":
    char.style.backgroundColor = "gray"
    break;
    case "4":
    char.style.backgroundColor = "orange"
    break;
    case "5":
    char.style.backgroundColor = "purple"
    break;
    case "6":
    char.style.backgroundColor = "pink"
    break;
    case "7":
    char.style.backgroundColor = "black"
    break;
    case "8":
    char.style.backgroundColor = "brown"
    break;
    case "9":
    char.style.backgroundColor = "gold"
  }
}

let char = document.getElementById("character");
window.addEventListener("keypress", checkKeyPress);


function checkKeyPress1(event) {
  switch (event.key) {
    case "ArrowUp":
    up.classList.add("highLight");
    break;
    case "ArrowDown":
    down.classList.add("highLight");
    case "ArrowLeft":
    left.classList.add("highLight");
    break;
    case "ArrowRight":
    right.classList.add("highLight");
    break;
  }
}

function checkKeyPress2(event) {
  switch (event.key) {
    case "ArrowUp":
    up.classList.remove("highLight");
    break;
    case "ArrowDown":
    down.classList.remove("highLight");
    break;
    case "ArrowLeft":
    left.classList.remove("highLight");
    break;
    case "ArrowRight":
    right.classList.remove("highLight");
    break;
  }
}

let up = document.getElementById("up");
let down = document.getElementById("down");
let left = document.getElementById("left");
let right = document.getElementById("right");

window.addEventListener("keydown", checkKeyPress1);
window.addEventListener("keyup", checkKeyPress2);

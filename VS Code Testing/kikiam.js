const h1 = document.querySelector("h1");
h1.style.color = "red";

function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
}

// setInterval(function () {
//     h1.style.color = randomRGB();
// }, 500);

const letters = document.querySelectorAll(".letter");


const intervalId = setInterval(function () {
    for (let char of letters) {
        char.style.color = randomRGB();
    }
}, 500);

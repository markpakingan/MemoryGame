const h1 = document.querySelector("h1");
h1.style.color = "red";

// const paragraph = document.querySelector("p");

// paragraph.style.color = "yellow";

function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
}

const letters = document.querySelectorAll(".letter");

const intervalId = setInterval(function () {
    for (let char of letters) {
        char.style.color = randomRGB();
    }
}, 500);
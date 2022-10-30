const h1 = document.querySelector("h1");
h1.style.color = "red";

<<<<<<< HEAD
// const paragraph = document.querySelector("p");

// paragraph.style.color = "yellow";

function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
=======
function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = 0;
>>>>>>> try-purple
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
}

<<<<<<< HEAD
const letters = document.querySelectorAll(".letter");

=======
// setInterval(function () {
//     h1.style.color = randomRGB();
// }, 500);

const letters = document.querySelectorAll(".letter");


>>>>>>> try-purple
const intervalId = setInterval(function () {
    for (let char of letters) {
        char.style.color = randomRGB();
    }
<<<<<<< HEAD
}, 500);
=======
}, 500);
>>>>>>> try-purple

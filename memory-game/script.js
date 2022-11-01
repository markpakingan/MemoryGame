const gameContainer = document.getElementById("game");
let flipCounter = 0;



const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];



// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}



let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}


let card1 = null;
let card2 = null;

// TODO: Implement this function!
function handleCardClick(e) {
  if (e.target.classList.contains("Flipped")) return;

  let currentCard = e.target;
  currentCard.style.backgroundColor = currentCard.classList[0];
  // console.log("Current card color is", currentCard.classList[0]);
  currentCard.classList.add("Flipped")

  //if we haven't clicked a card, keep track of the card, display its color.
  if (!card1) {
    card1 = currentCard.classList[0];

    //if we already clicked the current card, check if the card2 matches the old card color.
  } else {
    card2 = e.target.classList[0];

    if (card1 === card2) {
      console.log("It's a matching color!");
      flipCounter += 2;
      noClicking = false;
      document.querySelectorAll('.Flipped').forEach(function (e) {
        e.classList.remove('Flipped');
        e.classList.add('Completed');
      });
    } else {

      setTimeout(function () {
        document.querySelectorAll('.Flipped').forEach(function (element) {
          // if (!element.classList.contains('Completed')) {
          element.style.backgroundColor = '';
          element.classList.remove('Flipped');
          // }
        });

      }, 1000);
      card1 = null;
      card2 = null;
    }
  }

  // Check if all colors are completed
  if (flipCounter === COLORS.length) {
    alert("You Win!");
  }

}

// when the DOM loads
createDivsForColors(shuffledColors);



//Setting the Time Out

const timeOut = setTimeout(function (e) {
  alert("Game Over!")
}, 300000);


/* */


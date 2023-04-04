let answer = Math.floor(Math.random() * 100) + 1;
let numGuesses = 0;

function generateNumber(num) {
  numGuesses++;
  if (num < answer) {
    alert("Number entered is low!");
  } else if (num > answer) {
    alert("Number entered is high!");
  } else {
    alert("You guessed correctly!");
    answer = Math.floor(Math.random() * 100) + 1;
    numGuesses = 0;
  }
  
  if (numGuesses >= 5) {
    alert("You lose! The answer was " + answer);
    answer = Math.floor(Math.random() * 100) + 1;
    numGuesses = 0;
  }
}

let button = document.getElementById("Guess");
button.addEventListener("click", function() {
  let input = document.getElementById("guessInput");
  generateNumber(input.value);
});

let playGame = document.getElementById("playGame");
playGame.addEventListener("click", function (){
  alert("new number generated!");
  answer = Math.floor(Math.random() * 100) + 1;
})
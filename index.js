import prompt from "readline-sync";
//import wordBank from "./word-bank.js";
const wordBank = ["fosSil"]; // REMOVE BEFORE SUBMITTING AND UNCOMMENT LINE ABOVE

// Variables containing the stick figures to be printed based on number of incorrect guesses (badGuessNum)
const fig1 = "O\n |";
const fig2 = "O\n\\|";
const fig3 = "O\n\\|/";
const fig4 = "O\n\\|/\n |";
const fig5 = "O\n\\|/\n |\n/";
const fig6 = "O\n\\|/\n |\n/ \\ \n\nSorry, You Lose";

const printFigure = (badGuessNum) => {
  if (badGuessNum === 1) {
    console.log("\n", fig1, "\n", blanksArr);
  } else if (badGuessNum === 2) {
    console.log("\n", fig2, "\n", blanksArr);
  } else if (badGuessNum === 3) {
    console.log("\n", fig3, "\n", blanksArr);
  } else if (badGuessNum === 4) {
    console.log("\n", fig4, "\n", blanksArr);
  } else if (badGuessNum === 5) {
    console.log("\n", fig5, "\n", blanksArr);
  } else {
    console.log("\n", fig6, "\n", blanksArr);
  }
};

const randomWord = wordBank[Math.floor(Math.random() * wordBank.length)]; //gets random word
const wordArr = randomWord.toLowerCase().split("");

wordArr;

const blankString = "_";
let blanksArr = blankString.repeat(wordArr.length).split("");

//blanksArr;

console.log("\nLookout! \n .... It's HaNGMaN!\n\nPress ctrl + c to exit.\n\n");
console.log(
  "Guess the secret word, one letter at a time. \nYou are allowed five incorrect guesses before you lose the game.\n"
);

let badGuessNum = 0;

while (badGuessNum < 6 && blanksArr !== wordArr) {
  console.log(blanksArr.join(" "));
  let input = prompt.question("\nPlease guess a letter: ");
  let letter = input.toLowerCase();
  /*
  if (/[^a-zA-Z]/.test(input)) {
    //if NOT an alpha character
    console.log("\n\nPlease try again, letters only.");
    let input = prompt.question("Please guess a letter: "); //WHAT IF NON-ALPHA ENTERED AGAIN?
  } else {
    let letter = input.toLowerCase();
  }
  */

  wordArr.forEach((currentItem, index) => {
    currentItem === letter ? (blanksArr[index] = letter) : null;
    //printFigure();
  });
  //console.log("Incorrect Guess Number: " + badGuessNum);

  /*
  let containsLetter = wordArr.includes(letter);

  if (containsLetter) {
    let letterIndex = wordArr.indexOf(letter); //NEED A Check for multiple same letters ****** !!!!
    blanksArr[letterIndex] = letter;
    console.log(blanksArr.join(" "));
  } else {
    badGuessNum++;
  }
  */
  //console.log("Incorrect Guess Number: " + badGuessNum);
}

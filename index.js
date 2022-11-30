import prompt from "readline-sync";
import wordBank from "./word-bank.js";

// Choose random word and make lower case.

const randomWord = wordBank[Math.floor(Math.random() * wordBank.length)]; //gets random word
const wordArr = randomWord.toLowerCase().split("");

// The stick figures to be printed based on number of incorrect guesses (badGuessNum) when the printFigure function is called.

const fig1 = "O\n |";
const fig2 = "O\n\\|";
const fig3 = "O\n\\|/";
const fig4 = "O\n\\|/\n |";
const fig5 = "O\n\\|/\n |\n/";
const fig6 =
  'O\n\\|/\n |\n/ \\ \n\nSorry, You Lose.\nThe correct word was "' +
  randomWord +
  '"';

const printFigure = (badGuessNum) => {
  if (badGuessNum === 1) {
    console.log("\n", fig1, "\n");
  } else if (badGuessNum === 2) {
    console.log("\n", fig2, "\n");
  } else if (badGuessNum === 3) {
    console.log("\n", fig3, "\n");
  } else if (badGuessNum === 4) {
    console.log("\n", fig4, "\n");
  } else if (badGuessNum === 5) {
    console.log("\n", fig5, "\n");
  } else {
    console.log("\n", fig6, "\n");
  }
};

// Set up array of blanks with length equal to word length.

const blankString = "_";
let blanksArr = blankString.repeat(wordArr.length).split("");

// Log game's opening messages.

console.log("\nLookout! \n .... It's HaNGMaN!\n\nPress ctrl + c to exit.\n");
console.log(
  "Guess the secret word, one letter at a time. \nYou are allowed six incorrect guesses before you lose the game.\n"
);

let badGuessNum = 0;

// Run loop while less than 6 incorrect guesses and the array of blanks still contains blanks.

while (badGuessNum < 6 && blanksArr.indexOf("_") !== -1) {
  console.log("\n" + blanksArr.join(" "));

  let input = prompt.question("\n\nPlease guess a letter: ");
  let letter = input.toLowerCase();

  // If letter is included in word, fill in corresp. blanks in blanksArr with letter(s). Works with letter appearing multiple times in word:
  wordArr.forEach((currentItem, index) => {
    currentItem === letter ? (blanksArr[index] = letter) : null;
  });

  // If blanksArr has no more blanks (because they are replaced by the correctly guessed letters of the word), declare Winner.
  if (blanksArr.indexOf("_") === -1) {
    console.log("\n" + blanksArr.join(" "));
    console.log("\nW I N N E R !!!\n\n");
  }

  // If letter not in word increment bad guess number, print incorrect guess number and run function to draw stick figures.
  if (wordArr.indexOf(letter) === -1) {
    badGuessNum++;
    console.log(`\nIncorrect Guess Number: ${badGuessNum}`);
    printFigure(badGuessNum);
  }
}

import prompt from "readline-sync";
//import wordBank from "./word-bank.js";
const wordBank = ["fosSil"]; // REMOVE BEFORE SUBMITTING AND UNCOMMENT LINE ABOVE

console.log("\nLookout! \n .... It's HaNGMaN!\n\nPress ctrl + c to exit.\n\n");

console.log(
  "Guess the secret word, one letter at a time. \nYou are allowed five incorrect guesses before you are hanged.\n"
);

const randomWord = wordBank[Math.floor(Math.random() * wordBank.length)]; //gets random word

const wordArray = randomWord.toLowerCase().split("");
let blanksLength = wordArray.length;

// Variables containing the stick figures to be printed based on number of incorrect guesses (badGuessNum)
const fig1 = " O\n |";
const fig2 = " O\n\\|";
const fig3 = " O\n\\|/";
const fig4 = " O\n\\|/\n |";
const fig5 = " O\n\\|/\n |\n/";
const fig6 = " O\n\\|/\n |\n/ \\ \n\nSorry, Game Over";

// test
wordArray;

// To print number of blanks equal to number of letters in word (below first prompt).
// First, the "blanks" (underscore character) are put into an array so that they can later be replaced by correctly guessed letters.

let blankString = "_";
let blanksArray = blankString.repeat(blanksLength).split("");

// test
blanksArray;

// Then the array of blanks is printed to console as a string.

console.log(blanksArray.join(" "));

//********************************************* UNCOMMENT LINE BELOW!!
//let input = prompt.question("Please guess one letter: ");

let input = "S"; // DELETE THIS LINE ***************************

// Tests if input is not a letter and prints error mssg and re-prompts
if (/[^a-zA-Z]/.test(input)) {
  console.log("\n\nPlease try again, English letters only.");
  //let input = prompt.question("Please guess one letter: ");
}
let letter = input.toLowerCase();

//If letter is included in word, fill in corresp. blanks in blanksArr with letter(s). Works with letter appearing multiple times in word.
/*

wordArray.forEach((currentItem, index) => {
  currentItem === letter ? (blanksArray[index] = letter) : null;
});

*/
// ^I need function here for the Else

for (let i = 0; 0 < wordArray.length; i++) {
  if (wordArray[i] === letter) {
    blanksArray[i] = letter;
    console.log("\n\n" + blanksArray.join(" "));
  } else {
    let badGuessNum = 1;
  } // ************************************CONTINUE HERE
}

// console.log("\n\n" + blanksArray.join(" "));

// TRYING TO DEVELOP A FUNCTION FOR THE ELSE CONDITION ABOVE
/*
if (badGuessNum <= 6) {
  console.log(
    `\nThe letter ${letter} is not in the word.\nYou have ${
      6 - badGuessNum
    } incorrect guesses left.`
  );
}
*/
// Print figure function. JOIN ABOVE AND BELOW SOMEHOW

const printFigure = (badGuessNum) => {
  if (badGuessNum === 1) {
    console.log("\n", fig1, "\n", blanksArray);
  } else if (badGuessNum === 2) {
    console.log("\n", fig2, "\n", blanksArray);
  } else if (badGuessNum === 3) {
    console.log("\n", fig3, "\n", blanksArray);
  } else if (badGuessNum === 4) {
    console.log("\n", fig4, "\n", blanksArray);
  } else if (badGuessNum === 5) {
    console.log("\n", fig5, "\n", blanksArray);
  } else {
    console.log("\n", fig6, "\n", blanksArray);
  }
};

// Sample code from class
/*
let feedback = prompt.question("How's it going'?: ");
console.log(feedback);

if (feedback === "Good") {
  console.log("I'm glad!");
} else {
  console.log("I'm so sorry to hear that.");
}
*/

/* If letter is included in word, fill in corresp. blanks with letters

if (containsLetter) {
  let letterIndex = wordArray.indexOf(letter);
  blanksArray[letterIndex] = letter;
  console.log(blanksArray.join(" "));
} 
*/

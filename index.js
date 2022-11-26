import prompt from "readline-sync";
//import wordBank from "./word-bank.js";
const wordBank = ["fosSil"]; // REMOVE BEFORE SUBMITTING AND UNCOMMENT LINE ABOVE

console.log("\nLookout! \n .... It's HaNGMaN!\n\nPress ctrl + c to exit.\n\n");

console.log(
  "Guess the letters that make up the secret word, one letter at a time. \nYou are allowed six wrong guesses before you are hanged.\n"
);

// Variables containing the stick figures to be printed based on number of incorrect guesses (badGuessNum)
const fig1 = " O\n |";
const fig2 = " O\n\\|";
const fig3 = " O\n\\|/";
const fig4 = " O\n\\|/\n |";
const fig5 = " O\n\\|/\n |\n/";
const fig6 = " O\n\\|/\n |\n/ \\";

const randomWord = wordBank[Math.floor(Math.random() * wordBank.length)]; //gets random word

const wordArray = randomWord.toLowerCase().split("");
let blanksLength = wordArray.length;



// test
wordArray;

// To print number of blanks equal to number of letters in word (before first guess).
// First, the "blanks" (underscore character) are put into an array so that they can later be replaced by any correctly guessed letters.

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
  console.log("Please try again, English letters only.");
  //let input = prompt.question("Please guess one letter: ");
} else {
  let letter = input.toLowerCase();

  //If letter is included in word, fill in corresp. blanks in blanksArr with letter(s). Works with letter appearing multiple times in word.
  wordArray.forEach((currentItem, index) => {
    currentItem === letter ? (blanksArray[index] = letter) : null;
  });
  // ^I need function here for the Else

  console.log(blanksArray.join(" "));
}


// TRYING TO DEVELOP A FUNCTION FOR THE ELSE CONDITION ABOVE

if (badGuessNum <= 6) {
  console.log(
    `\nThe letter ${letter} is not in the word.\nYou have ${
      6 - badGuessNum
    } incorrect guesses left.`
  );
  console.log("\n"fig1)
}

// Print figure function. JOIN ABOVE AND BELOW SOMEHOW

const printFigure = (badGuessNum) => {
  if (badGuessNum === 1) {
    console.log("\n", fig1);
  } else if (badGuessNum === 2) {
    console.log("\n", fig2);
  } else if (badGuessNum === 3) {
    console.log("\n", fig3);
  } else if (badGuessNum === 4) {
    console.log("\n", fig4);
  } else if (badGuessNum === 5) {
    console.log("\n", fig5);
  } else {
    console.log("\n", fig6);
  };
}


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
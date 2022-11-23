import prompt from "readline-sync";
//import wordBank from "./word-bank.js";
const wordBank = ["win"]; // REMOVE BEFORE SUBMITTING AND UNCOMMENT LINE ABOVE

console.log(
  "\nLookout! \n .... It's HaNGMaN!\n\nPress ctrl + c to exit.\n\n\n"
);

console.log(
  "Guess the letters that make up the secret word, one letter at a time. \nYou are allowed six wrong guesses before you are hung.\n"
);

let randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
let wordLowCase = randomWord.toLowerCase();
let wordArray = wordLowCase.split("");
let blanksLength = wordArray.length;

// test
wordArray;

// To print number of blanks equal to number of letters in word (before first guess).
// First, the "blanks" (underscore character) are put into an array so that they can later be replaced by any correcty guessed letters.

let blankString = "_";
let blanksArray = blankString.repeat(blanksLength).split("");

// test
blanksArray;

// Then the array of blanks is printed to console as a string.

let allBlanksString = blanksArray.join(" ");
console.log(allBlanksString);

//UNCOMMENT LINE BELOW!! *********************************************
//let input = prompt.question("Please guess a letter: ");

let input = "n";

//console.log(input);

// Make letter lowercase
let letter = input.toLowerCase();
let containsLetter = wordArray.includes(letter);

// If letter is included in word, fill in corresp. blanks with letters
if (containsLetter) {
  let letterIndex = wordArray.indexOf(letter);
  blanksArray[letterIndex] = letter;
  console.log(blanksArray.join(" "));
} // WILL THIS WORK ON REPEATED ROUNDS. WILL IT PRINT THE BLANKS ARRAY WITH ONLY THE CURRENTLY GUESSED LETTER FILLED IN. WAIT MAYBE NOT. HOW CAN I TEST THIS? RUN NODE .
else {
  let badGuessNum = 1;
  console.log(
    `\n ${letter} is not in the word.\nYou have ${
      6 - badGuessNum
    } incorrect guesses left.`
  );
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

/*
const stickFig0 = " O\n |";
const stickFig1 = " O\n\\|";
const stickFig2 = " O\n\\|/";
const stickFig3 = " O\n\\|/\n |";
const stickFig4 = " O\n\\|/\n |\n/";
const stickFig5 = " O\n\\|/\n |\n/ \\";

console.log(stickFig0);
console.log(stickFig1);
console.log(stickFig2);
console.log(stickFig3);
console.log(stickFig4);
console.log(stickFig5);
*/

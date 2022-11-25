import prompt from "readline-sync";
//import wordBank from "./word-bank.js";
const wordBank = ["fossil"]; // REMOVE BEFORE SUBMITTING AND UNCOMMENT LINE ABOVE

console.log("\nLookout! \n .... It's HaNGMaN!\n\nPress ctrl + c to exit.\n\n");

console.log(
  "Guess the letters that make up the secret word, one letter at a time. \nYou are allowed six wrong guesses before you are hung.\n"
);

let randomWord = wordBank[Math.floor(Math.random() * wordBank.length)]; //gets random word
let wordLower = randomWord.toLowerCase();
let wordArray = wordLower.split("");
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

//UNCOMMENT LINE BELOW!! *********************************************
//let input = prompt.question("Please guess one letter: ");

let input = "S"; // DELETE THIS LINE ***************************

// Tests if input is not a letter and prints error mssg and re-prompts
if (/[^a-zA-Z]/.test(input)) {
  console.log("Please try again, English letters only.");
  //let input = prompt.question("Please guess one letter: ");
} else {
  let letter = input.toLowerCase();

  //If letter is included in word, fill in corresp. blanks in blanksArr with letter(s). Also works with letter appearing multiple times in word.
  wordArray.forEach((currentItem, index) => {
    currentItem === letter ? (blanksArray[index] = letter) : null;
  });
  // ^I need function here

  console.log(blanksArray.join(" "));
}

//console.log(input);

//let containsLetter = wordArray.includes(letter);

/* If letter is included in word, fill in corresp. blanks with letters

if (containsLetter) {
  let letterIndex = wordArray.indexOf(letter);
  blanksArray[letterIndex] = letter;
  console.log(blanksArray.join(" "));
} 
*/

if (badGuessNum <= 6) {
  console.log(
    `\nThe letter ${letter} is not in the word.\nYou have ${
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
const Fig0 = " O\n |";
const Fig1 = " O\n\\|";
const Fig2 = " O\n\\|/";
const Fig3 = " O\n\\|/\n |";
const Fig4 = " O\n\\|/\n |\n/";
const Fig5 = " O\n\\|/\n |\n/ \\";

console.log(Fig0);
console.log(Fig1);
console.log(Fig2);
console.log(Fig3);
console.log(Fig4);
console.log(Fig5);
*/

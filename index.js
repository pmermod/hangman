import prompt from "readline-sync";
//import wordBank from "./word-bank.js";
const wordBank = ["win"];

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

let blankString = "_"; // ^remove line above, just a test

let blanksArray = blankString.repeat(blanksLength).split("");

// test
blanksArray;

// test
//console.log(blanksArray.length);

let allBlanksString = blanksArray.join(" ");
//console.log(allBlanksString);
console.log(allBlanksString);
console.log("^");

let letter = prompt.question("Enter a letter: ");
console.log(letter);

//let letter = "e"; //only to test --  remove!

let letterLower = letter.toLowerCase();
let containsLetter = wordArray.includes(letterLower);

/*
if (containsLetter) {
  let letterIndex = wordArray.indexOf(letterLower);
  blanksArray[letterIndex] = letterLower;
  console.log(blanksArray);

}
*/

let letterIndex = wordArray.indexOf(letterLower);
blanksArray[letterIndex] = letterLower;
//newBlanks = blanksArray.join
console.log(blanksArray.join(" "));

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

import prompt from "readline-sync";
import wordBank from "./word-bank.js";

console.log(
  "Lookout! \n .... It's HaNGMaN!\n(the gallows are creeky)\n\nPress ctrl + c to exit."
);

console.log(
  "Guess the letters that make up the secret word. You are allowed six wrong guesses before you are hung."
);

let randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
let wordArray = randomWord.split("");
let blanksLength = wordArray.length;

// test
wordArray;

let blankString = "_"; // ^remove line above, just a test

// this below doesn't work, only prints one "_" in Quokka
/*

const printBlanks = (blanksLength) => {
  console.log(blankString + " ".repeat(blanksLength));
};
printBlanks(blanksLength)

*/

let blanksArray = blankString.repeat(blanksLength).split("");
console.log(blanksArray);

// test
console.log(blanksArray.length);

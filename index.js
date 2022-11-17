import prompt from "readline-sync";
import wordBank from "./word-bank.js";

console.log(
  "Lookout! \n .... It's HaNGMaN!\n(the gallows are creeky)\n\nPress ctrl + c to exit."
);

console.log(
  "Guess the letters that make up the secret word. You are allowed six wrong guesses before you are hung."
);

let randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
let wordSplit = randomWord.split("");
let blanksLength = wordSplit.length;
blanksLength;

// ******** Figure out how to create an array of blanks whose length equals length of wordSplit

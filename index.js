import prompt from "readline-sync";
import wordBank from "./word-bank.js";

console.log(wordBank);

let feedback = prompt.question("How's it going?");
console.log(feedback);

if (feedback === "Good") {
  console.log("I'm glad!");
} else {
  console.log("I'm so sorry to hear that.");
}

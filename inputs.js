import {
    translateToMorse,
    outputTranslation
} from "./translator.js";

let string = document.querySelector(".text-box").value;
const button = document.querySelector(".button");
const output = document.querySelector(".output");

button.addEventListener("click", translateToMorse(string));
button.addEventListener("click", outputTranslation());


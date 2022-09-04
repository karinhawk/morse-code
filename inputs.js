import {
    translateToMorse,
} from "./translator.js";

let input = document.querySelector(".text-box");
const button = document.querySelector(".button");
const clear = document.querySelector(".button--clear")
const output = document.querySelector(".output");
const heading = document.querySelector(".heading");

export const handleInput = () => {
    let inputValue = input.value;
    return translateToMorse(inputValue);
}

export const outputTranslation = () => {
    output.innerHTML = handleInput();
}

export const clearTranslator = () => {
    input.value = "";
    output.innerHTML = "";
    heading.innerHTML = "Morse Code Translator";
    heading.style.fontSize = "40px";
}

export const hoverOnTitle = () => {
    heading.innerHTML = "-----.-...../-.-.----.../-.-..--.....-...-----.-.";
    heading.style.fontSize = "30px";
}

button.addEventListener("click", outputTranslation);
clear.addEventListener("click", clearTranslator);
heading.addEventListener("mouseover", hoverOnTitle);



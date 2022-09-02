import {
    translateToMorse,
} from "./translator.js";

let input = document.querySelector(".text-box");
const button = document.querySelector(".button");
const output = document.querySelector(".output");

export const handleInput = () => {
    let inputValue = input.value;
    return translateToMorse(inputValue);
}

export const outputTranslation = () => {
    output.innerHTML = handleInput();
}


button.addEventListener("click", outputTranslation);



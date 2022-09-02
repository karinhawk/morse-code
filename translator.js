import {
    morseObject
} from "./morse.js";

console.log(morseObject);
let translation = "";

export const translateToMorse = (string) => {
    return string.toLowerCase().split("")
    .map((string) => {
        return morseObject[string];
    }).join("");
} 
console.log(translateToMorse("hello"));

const outputTranslation = () => {
    output.innerHTML = translation;
}




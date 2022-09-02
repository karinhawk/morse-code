import {
    morseObject
} from "./morse.js";


console.log(morseObject);

export const translateToMorse = (string) => {
    return string.toLowerCase().trim().split("")
    .map((string) => {
        return morseObject[string];
    }).join("");
} 




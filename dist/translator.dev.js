"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.translateToMorse = void 0;

var _morse = require("./morse.js");

console.log(_morse.morseObject);

var translateToMorse = function translateToMorse(string) {
  return string.toLowerCase().trim().split("").map(function (string) {
    return _morse.morseObject[string];
  }).join("");
};

exports.translateToMorse = translateToMorse;
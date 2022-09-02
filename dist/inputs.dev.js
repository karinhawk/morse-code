"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.outputTranslation = exports.handleInput = void 0;

var _translator = require("./translator.js");

var input = document.querySelector(".text-box");
var button = document.querySelector(".button");
var output = document.querySelector(".output");

var handleInput = function handleInput() {
  var inputValue = input.value;
  return (0, _translator.translateToMorse)(inputValue);
};

exports.handleInput = handleInput;

var outputTranslation = function outputTranslation() {
  output.innerHTML = handleInput();
};

exports.outputTranslation = outputTranslation;
button.addEventListener("click", outputTranslation);
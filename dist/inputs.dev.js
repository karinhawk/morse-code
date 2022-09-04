"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hoverOnTitle = exports.clearTranslator = exports.outputTranslation = exports.handleInput = void 0;

var _translator = require("./translator.js");

var input = document.querySelector(".text-box");
var button = document.querySelector(".button");
var clear = document.querySelector(".button--clear");
var output = document.querySelector(".output");
var heading = document.querySelector(".heading");

var handleInput = function handleInput() {
  var inputValue = input.value;
  return (0, _translator.translateToMorse)(inputValue);
};

exports.handleInput = handleInput;

var outputTranslation = function outputTranslation() {
  output.innerHTML = handleInput();
};

exports.outputTranslation = outputTranslation;

var clearTranslator = function clearTranslator() {
  input.value = "";
  output.innerHTML = "";
  heading.innerHTML = "Morse Code Translator";
  heading.style.fontSize = "40px";
};

exports.clearTranslator = clearTranslator;

var hoverOnTitle = function hoverOnTitle() {
  heading.innerHTML = "-----.-...../-.-.----.../-.-..--.....-...-----.-.";
  heading.style.fontSize = "30px";
};

exports.hoverOnTitle = hoverOnTitle;
button.addEventListener("click", outputTranslation);
clear.addEventListener("click", clearTranslator);
heading.addEventListener("mouseover", hoverOnTitle);
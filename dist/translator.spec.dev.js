"use strict";

var _translator = require("./translator");

describe('Testing translateToMorse', function () {
  it("a should translate to be .-", function () {
    //arrange
    var string; //act

    string = "a";
    var result = (0, _translator.translateToMorse)(string); //assert

    expect(result).toBe(".-");
  });
  it("A should translate to be .-", function () {
    //arrange
    var string; //act

    string = "A";
    var result = (0, _translator.translateToMorse)(string); //assert

    expect(result).toBe(".-");
  });
  it("should translate Rob to be .-.----...", function () {
    //arrange
    var string; //act

    string = "Rob";
    var result = (0, _translator.translateToMorse)(string); //assert

    expect(result).toBe(".-.----...");
  });
  it("should translate RoB to be .-.----...", function () {
    //arrange
    var string; //act

    string = "RoB";
    var result = (0, _translator.translateToMorse)(string); //assert

    expect(result).toBe(".-.----...");
  });
  it("should translate 'hello there' to be ......-...-..---/-......-..", function () {
    //arrange
    var string; //act

    string = "hello there";
    var result = (0, _translator.translateToMorse)(string); //assert

    expect(result).toBe("......-...-..---/-......-..");
  });
  it("should translate 'hello there ' to be ......-...-..---/-......-..", function () {
    //arrange
    var string; //act

    string = "hello there ";
    var result = (0, _translator.translateToMorse)(string); //assert

    expect(result).toBe("......-...-..---/-......-..");
  });
  it("should translate '!' to be", function () {
    //arrange
    var string; //act

    string = "!";
    var result = (0, _translator.translateToMorse)(string); //assert

    expect(result).toBe("-.-.--");
  });
  it("should translate '1' to be .----", function () {
    //arrange
    var string; //act

    string = "1";
    var result = (0, _translator.translateToMorse)(string); //assert

    expect(result).toBe(".----");
  });
  it("should translate '123' to be .----..---...--", function () {
    //arrange
    var string; //act

    string = "123";
    var result = (0, _translator.translateToMorse)(string); //assert

    expect(result).toBe(".----..---...--");
  });
}); //with dom EXTRACT EVERYTHING from javascript, set as data type please :)
//what should translateToMorse actually do
// - receive letters and translate those letters into morse code - DONE
// - take into consideration the capital letters- turn all inputs into uppercase :) there is no capital or lower in morse - DONE
// - take into consideration spaces in words and translate accordingly DONE
// - numbers DONE
// - symbols DONE
//manipulateDOM
// - output translation into display 
// - input sentence
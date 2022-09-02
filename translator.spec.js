import { translateToMorse } from "./translator";

describe('Testing translateToMorse', () => {
    it("a should translate to be .-", () => {
        //arrange
        let string;
        //act
        string = "a";
        let result = translateToMorse(string)
        //assert
        expect(result).toBe(".-")
    })

    it("A should translate to be .-", () => {
        //arrange
        let string;
        //act
        string = "A";
        let result = translateToMorse(string)
        //assert
        expect(result).toBe(".-")
    })

    it("should translate Rob to be .-.----...", () => {
        //arrange
        let string;
        //act
        string = "Rob";
        let result = translateToMorse(string)
        //assert
        expect(result).toBe(".-.----...")
    })

    it("should translate RoB to be .-.----...", () => {
        //arrange
        let string;
        //act
        string = "RoB";
        let result = translateToMorse(string)
        //assert
        expect(result).toBe(".-.----...")
    })
    it("should translate 'hello there' to be ......-...-..---/-......-..", () => {
        //arrange
        let string;
        //act
        string = "hello there";
        let result = translateToMorse(string)
        //assert
        expect(result).toBe("......-...-..---/-......-..")
    })
    it("should translate 'hello there ' to be ......-...-..---/-......-..", () => {
        //arrange
        let string;
        //act
        string = "hello there ";
        let result = translateToMorse(string)
        //assert
        expect(result).toBe("......-...-..---/-......-..")
    })
    it("should translate '!' to be", () => {
        //arrange
        let string;
        //act
        string = "!";
        let result = translateToMorse(string)
        //assert
        expect(result).toBe("-.-.--")
    })
    it("should translate '1' to be .----", () => {
        //arrange
        let string;
        //act
        string = "1";
        let result = translateToMorse(string)
        //assert
        expect(result).toBe(".----")
    })
    it("should translate '123' to be .----..---...--", () => {
        //arrange
        let string;
        //act
        string = "123";
        let result = translateToMorse(string)
        //assert
        expect(result).toBe(".----..---...--")
    })
})

//with dom EXTRACT EVERYTHING from javascript, set as data type please :)

//what should translateToMorse actually do
// - receive letters and translate those letters into morse code - DONE
// - take into consideration the capital letters- turn all inputs into uppercase :) there is no capital or lower in morse - DONE
// - take into consideration spaces in words and translate accordingly DONE
// - numbers DONE
// - symbols DONE

//manipulateDOM
// - output translation into display 
// - input sentence
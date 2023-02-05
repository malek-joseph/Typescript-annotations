// How we define annotations is TS for numbers
const apples: number = 5;
// How we define annotations is TS for strings
const favFruit: string = 'apple';
// How we define annotations is TS for null
const nothing: null = null;
// How we define annotations is TS for undefined
const nothingElse: undefined = undefined;
// How we define annotations is TS for array of strings
const colors: string[] = ['red', 'green', 'blue'];
// How we define annotations is TS for array of numbers
const myNumbers: number[] = [1,2]
// How we define annotations is TS for array of booleans
const myBoleans: boolean[] = [true, false]
//==================//

// How we define annotations is TS for classes
class Car {
}
let car: Car = new Car() // car refers to an instance of Car
// How we define annotations is TS for object literals
let point: { x: number ; y: number } = {
  x: 5,
  y:2
}
// How we define annotations is TS for functions, we want to set the type of the inputs "The arguments", and the outputs "The return statement"
// if the functions is expected not to return anything, we set the type of the returned value to void.
const longNumber: (i: number) => void = (i: number) => {
  console.log(i);
  
}
// ===================
// When to use annotations in TS?
// [1] A function that returns "Any" Type.
const json = '{"x":10, "Y":20}';
// If you chekced the type of coordinates below you'll discover that the JSON.parse returns "Any" type. And to fix that we use Typescript
// const coordinates = JSON.parse(json)
const coordinates: { x: number; y: number} = JSON.parse(json) 
console.log(coordinates);

// [2] When we declare a variable on 1 line, and then initialize it later
let words = ['red', 'green', 'blue']
// if didn't initialize foundWord, it's type would be any, unless we annotate a type using Typescript
// let foundWord;
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true
  }
}

// [3] a variable whose type cannot be inferred
let numbers = [-11, 11, 12]
// We use the or operator to annotate the type of positiveNumbers to be a number or a bolean
let positiveNumber: number | boolean = false

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    positiveNumber = numbers[i]
  }
}











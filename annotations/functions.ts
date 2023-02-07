// we annotate the arguments and the returned values as numbers.
const add = (a: number, b: number): number => {
  return a +b
}
function multiply (a: number, b: number): number  {
  return a * b
}
const divide =function (a: number, b: number): number  {
  return a / b
}

// we still use annotations for the return value, to avoid and unintended void type if we didn't retrun something out of the function
// const subtract = (a: number, b: number) => {
//    a - b
// }

// Annotate the function with void if it will not return anything or will return null or undefined

const logger = (message: string): void => {
  console.log(message);
}

// Annotate the function with never, if the function will never be executed to the end, and is rarely used this way

const throwError = (message: string): never => {
  throw new Error(message)
} 

// destructuring objects

const todayWeather = {date: new Date, weather: 'sunny'}

// const logWeather = (todayWeather: { date: Date, weather: string }) => {
//   console.log(todayWeather.date);
//   console.log(todayWeather.weather);
  
// } 
// ES 2015 syntax
const logWeather = ({date, weather}: { date: Date, weather: string }) => {
  console.log(date);
  console.log(weather);
  
} 

logWeather(todayWeather)
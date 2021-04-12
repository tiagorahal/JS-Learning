//This is the current temperature in Kelvin
const kelvin = 0
//Temperature in Celsius
const celsius = kelvin - 273
//Temperature in Fah.
let  fahrenheit = celsius * (9/5) + 32
//Rounding up the value 
fahrenheit = Math.floor(fahrenheit)

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

var newton = Math.floor(celsius * (33/100))

console.log(`The temperature is ${newton} degrees Newton.`)
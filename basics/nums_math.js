const num = 400
console.log(num)

const num2 = new Number(100)
console.log(num2)

console.log(num2.toString().length)

console.log(num2.toFixed(2))

const otherNum = 23.956
console.log(otherNum.toPrecision(2))

const hundred = 10000000
console.log(hundred.toLocaleString('en-IN'))

//MAth library
let numNeg = -4
console.log(Math.abs(numNeg))

console.log(Math.round(22.59))
console.log(Math.ceil(4.1))
console.log(Math.floor(4.9))

console.log(Math.min(3,1,0,-9))

//math random
console.log((Math.random() ) )

let min = 1
let max = 6

console.log(Math.floor(Math.random() * (max - min + 1)) + min )
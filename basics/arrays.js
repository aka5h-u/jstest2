let arr = [1,2,3,4,5]

let arr2 = new Array(5,6,7,8,9)
console.log(arr[0])

arr.push(66)
arr.push(77)
console.log(arr)
arr.pop() // removes from the end of the array
console.log(arr)

//remove element from the start of the array
arr.shift()
console.log(arr)
//add to the beginning of the array
arr.unshift(11)
console.log(arr)

console.log(arr.includes(2))
console.log(arr.indexOf(11))


console.log('A', arr)
const n1 = arr.slice(1,3)
console.log(n1)

console.log('B', arr)
const n2 = arr.splice(1,3)
console.log(n2)

console.log('C', arr)


const marvel = ["Ironman", "Thor", "Hulk"]
const dc = ["Batman", "Flash"]

// marvel.push(dc)
// console.log(marvel)

// const heros = marvel.concat(dc)
// console.log(heros)

//spread values over array
 
const heros = [...marvel, ...dc]
console.log(heros)

const myArr = [1,2,3,[4,5,6], 7, 8,[7,8]]
const myArr2 = myArr.flat(1)
console.log(myArr2)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Akash"))

console.log(Array.from({name : "Akash"})) //object converted to array gives an empty array

let score1 = 400
let score2 = 555
let score3  =1000

console.log(Array.of(score1, score2, score3))
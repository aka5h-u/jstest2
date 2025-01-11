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

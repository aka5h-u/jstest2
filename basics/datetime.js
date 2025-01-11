let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())

console.log(myDate.toDateString())
console.log(myDate.toLocaleString())

console.log(typeof myDate)

const createdDate = new Date(2024, 0, 11)

console.log(createdDate.toString())

console.log(createdDate.toDateString())

const timestamp =  Date.now();
console.log(Math.floor(Date.now()/ 1000))


let newDate = new Date()
console.log(newDate.getDate())

console.log(`todas date is ${newDate.getDate()} and month is ${newDate.getMonth() + 1} and year is ${newDate.getFullYear()}`)
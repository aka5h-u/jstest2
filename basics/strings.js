let name = "Akash"
let repoCnt = 50

console.log(`My name is ${name} and my repo count is ${repoCnt}`)

const user = new String("Akash")
console.log(user.length)
console.log(user.__proto__)
console.log(user[0])
console.log(user.toLowerCase())
console.log(user.toUpperCase())
//original value does not change
console.log(user)

console.log(user.charAt(0))
//find index of a character in a  string
console.log(user.indexOf('a'))
console.log(user.indexOf('f'))
function greet(){
    console.log("Hello from the other side")
}

greet()

function add(num1 , num2){
    return num1 + num2
}

const res = add(1,2)
console.log(res)

function loggedIn(userName){
    if(!userName){
        console.log("Please define a username")
        return 
    }
    return `${userName} just logged in`
}

console.log(loggedIn("Akash"))
console.log(loggedIn())

function calculatePrice(val1 , ...num2){
    return num2
}

console.log(calculatePrice(1,2,3,4,5,55,5))

const user = {
    name: "Akash",
    age : 27
}

function userDetail(someObj){
    console.log(`UserName is ${someObj.name} and age is ${someObj.age}`)
}

userDetail(user)

const arr = [1,2,3,4,5]

function getSecElement(someArr){
    return someArr[1]
}

console.log(getSecElement(arr))

//child functions can access parent variables
function one(){
    const username = "Akash"
    function two(){
        const wesite = "youtube.com"
        console.log(username)
    }
 
    two()
}
one()


const userProfile = {
    name: "Akash",
    score: 100,

    welcomeMsg : function(){
        console.log(`${this.name} welcome to the website`)
        console.log(this)
    }
}

userProfile.welcomeMsg()
userProfile.name = "Sam"
userProfile.welcomeMsg()

//this keyword run in a node environment refers to an empty oject
//this keyword in browser refers to the window object 
console.log(this)

//this works in objects and not functions
function chai(){
    const username = "AKash"
    console.log(this.username)
}
chai()

//arrow functions
const addi = (num1, num2) => (num1 + num2)

console.log(addi(2,3))

const add2 = (num1, num2) =>{
    return num1+ num2
}

//console.log(add2(1,2))

(function(){
    const id = 123
    console.log(`user id is ${id}`)
})();

((name) => {
    const id = 446
    console.log(`user id is ${name}`)
})('4444aka');

const mySym = Symbol();

let user = {
    name : "Akash",
    "full name": "Akash U",
    age : 27,
    [mySym] : "key123",
    email: "akxz@xyz.com",
    isLoggedIn: false ,
    loggedDays : ["Monday", "Sunday"]

}

//2 ways of accessing obejcts
console.log(user.name)
console.log(user['email'])

//why square notation comes to use , consider field full name
console.log(user["full name"])

console.log(user[mySym])
console.log(typeof user[mySym])

//can freeze object so that the values cant be changed
user.email = "xyz@xyz.com"
console.log(user.email)
// Object.freeze(user)
// user.email = "ak@google.com"
// console.log(user.email)

// console.log(user)

//can add functions 
user.greeting = function(){
    console.log("Hello from the other side")
}

user.greeting2 = function(){
    console.log(`Hello from outer space, ${this["full name"]}`)
}

console.log(user.greeting())
console.log(user.greeting2())

const newUser = {
    email: "abc@xyz.com",
    fullname:{
        username:{
            firstname: "ak",
            lastname:"Bhat"
        }
    }
}

console.log(newUser)
console.log(newUser.fullname?.username.firstname)

//combining objects
const obj1 = {1:'a', 2:'b'}
const obj2 = {3:'c', 4 :'d'}

// const obj3  = Object.assign({} ,obj1, obj2) //the empty object is the source 
// console.log(obj3)

//commonly used for joining is similar to array sppread
const obj3 = {...obj1, ...obj2}
console.log(obj3)

//get keys and values of objects

console.log(Object.keys(user))
console.log(Object.values(user))

//check if a property is available
console.log(user.hasOwnProperty('name'))

const course = {
    name:"learn-js",
    instructor : "hitesh"
}

const {name}  = course
console.log(name)
//de structure
const {name: cname} = course
console.log(cname)

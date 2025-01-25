// const promiseOne = new Promise(function(resolve, reject){
//     //async function
//     setTimeout(function(){
//         console.log("Async task is complete")
//         resolve()
//     } , 1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed")
// })

// //another way to resolve promise

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async wait 2")
//         resolve()
//     },1000)

// }).then(function(){
//     console.log("Second async resolved")
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "AKash", email:"aka@xz.com"})
//     }, 1000)
// }).then(function(user){
//     console.log(user)
// })

// const prommiseFour = new Promise(function(resolve, reject){
//     let error = true ;
//     if(!error){
//         resolve({username:"Ak", pass:"123"})
//     }
//     else{
//         reject('ERROR, Some error')
//     }
// })

// //this is chain
// prommiseFour.then(function(user){
//     console.log(user)
//     return user.username
// }).then(function(username){
//     console.log(username)
// }).catch(function(error){
//     console.log(error)
// })

const promiseFive = new Promise(function(resolve, reject){
    let error = false ;
    if(!error){
        resolve({username:"JS", pass:"js123"})
    }
    else{
        reject('ERROR,  Some JS error')
    }

})

async function consumePromiseFive() {
    const response = await promiseFive
    console.log(response)
    
}
consumePromiseFive()



// async function getUsers() {
//     try {
//         const response =     await fetch("https://api.github.com/users/aka5h-u")
//         //console.log(typeof response)
//         const data = await response.json()
//         console.log(data)
        
//     } catch (error) {
//         console.log("Error : ", error)
//     }
   
// }

// getUsers()

//can also use then catch also

fetch("https://api.github.com/users/aka5h-u")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch(() =>{
    console.log("Error")
})
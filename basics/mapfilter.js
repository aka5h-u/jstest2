const arr = [1,2,3,4,5]

for(const num of arr){
    console.log(num)
}

const str = "Helloworld"

for(const s of str){
    console.log(s)
}

//map
const map = new Map()
map.set("TN", "Chennai")
map.set("KA", "Bangalore")
map.set("ap", "hyderaad")


console.log(map)
for(const [key, value] of map){
    console.log(key, '->', value)
}


const lang = ["hindi", "malu", "tamil", "kannada"]


// // the in in for loops gives the idices and ofgives values
// for(const l in lang){
//     console.log(l)
// }

const mp = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3]
]);

for(const [key, value] of mp){
    console.log(key, "-----", value)
}

const coding = ["js", "ruby", "java", "python", "cpp","c"]

// coding.forEach(function(value){
//     console.log(value)
// })

//arrow funcion
// coding.forEach(value =>{
//     console.log(value)
// })

// function printme(item){
//     console.log(item)
// }

// coding.forEach(printme)

const code =[
    {
    name: "javascript",
    file:"js"
    },
    {
        name :"python",
        file: "py"
    }
]

code.forEach((item) =>{
    console.log(item.file)
})

//foreach does not return use filter

const myNums = [1,2,3,4,5,6,7,8]
// const newNum = myNums.filter((num) => {
//     return num > 4;
// });


const newNums = myNums.filter(num => (num > 4))
console.log(newNums)



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const userBooks = books.filter((bk) => bk.genre === 'History' )
// console.log(userBooks)

const booksAfter2k = books.filter((bk) => bk.publish >= 2000 && bk.genre === 'History')
console.log(booksAfter2k)

const testNums = [1,2,3,4,5,6,7,8,9,10]

const doulbleNums = testNums.map(num => 2 * num)
console.log(testNums, doulbleNums)

const evenNumSqr = testNums
                    .filter(num => num % 2 == 0)
                    .map(num => num**2)
console.log(evenNumSqr)

//reduce method in js
const nums2 = [2,3,4,5]

const res = nums2.reduce(function(acc, currVal){
    console.log(`accumlator: ${acc} and currrent value : ${currVal}`)
    return acc+ currVal

},0)

console.log(res)

const res2 = nums2.reduce( (acc, curr) => acc + curr, 0)
console.log(res2)

const shopingCart = [
    {
        course: "js hinid",
        price : 3000
    },
    {
        course: "py hinid",
        price : 4999
    },

    {
        course: "ds hinid",
        price : 9999
    },
]

const totalPrice = shopingCart.reduce((acc, item) => acc + item.price, 0)
console.log(totalPrice)
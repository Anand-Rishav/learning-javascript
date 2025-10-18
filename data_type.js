// There are two type of data types in Javascript 
// * Premite data type and 
// * non premitive data type 
// Premitive data type 
const str = 'this is string data type'
const nmbr = 6.66 // there are no int and float concept in js both combined in one like int and float
const boolean = true // boolean data type 
const bool2 = false // this is a boolean data type 
const nulll = null // this is a data type null whcih is empty like its empty container
const undefinedd = undefined // this is a undefined data type like wee didnt put value in it 
// different between null and undefined is null is we know its contain nothing and undefined
// it doesnt have anyting like we dont whats in it like its not defined we dont know anythng abouut it 
// Now two which are not quite use like it is in it but not use quitely 
const bigint = 4839848; // it is usually store integer value in largee ammount 
console.log(bigint)
const symbol = Symbol('hello world') // not quitely use
console.log(symbol)
// A function to know the data type of a object is .. Typeof function
console.log(typeof str)
console.log(typeof nmbr)
console.log(typeof boolean)
console.log(typeof bool2)
console.log(typeof nulll)
console.log(typeof undefinedd)
console.log(typeof bigint)
console.log(typeof symbol)
// Non premetive data type : Object it contain two thing = Array and Functions
// Object like like dictionary in python conatin key value pair 
const object = {
    name : 'Rishav Anand',
    age : 21,
    subject : 'computer science'
}
console.log(object)
console.log(typeof object)
// Adding thigs in object is same like python
// Adding a new key 
object['gender'] = 'Male'
console.log(object)
// updating a key
object['age']= 22
console.log(object)
// to acces one key is same like python 
console.log(object['name'])
console.log(object.age)
// Const is not upgradable in premitive data type but in object it can because it only update keys 
// we cannot chagne whole things in a object but we can change keys in object like keys in object

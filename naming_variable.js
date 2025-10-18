// Naming a variable
// There are three type of declearing veriable 
// 1. Var 
// 2. Let
// 3. Const

var rishvar = 'this can be re-decleared and updated'; // this used in global code 
let rishlet = 'this can be only decleared once and we can update it'; // this in block code 
const rishconst = 'this is decleared once we can not update we can not updat it'; // this in block code 
// global is basically in the whole program and block is mainly writeen in a {only use inside a 
// block of code}
console.log(rishvar);
console.log(rishlet);
console.log(rishconst);

// Rules of naming a variable 
// 1. Variable in js is case sensitive.
// 2. Only letters, digits, _ and $ are allowed
// 3. Only starts with small letter, _ and $ 
// 4. Cannot use reserved words as variable like const log likt this

// About let and const : 
// If we create a variable with let we can leave it undefined and put value later but cannot do 
// thiw with const
let a ; // like we leave it undefined like without giving it a vvlaue because let can be updated
const b = 'constant'; // we have to assign a value to this bnecause const is cconstant and must have a defined 
// value and mainly const cannot be updated so cannot be left undefined.
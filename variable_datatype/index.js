// Variables are used to store data
// var : Function-scoped , can be redecclared (not recommend)
// let : Blocked-scoped , can be reassign
// const : Blocked scoped , can not be reassign

// Variable Declarations
var name = "Alice";          // String
let age = 25;                // Number
const isStudent = true;      // Boolean

// More Data Types
let hobbies = ["reading", "gaming"];  // Array
let person = {                        // Object
  firstName: "Alice",
  lastName: "Smith"
};

let score = null;    // Null - explicitly nothing
let address;         // Undefined - not assigned yet

// Output to Console
console.log(name);
console.log(age);
console.log(isStudent);
console.log(hobbies);
console.log(person);
console.log(score);
console.log(address);

// operators are arithmatic,assignment,comparison,relational,logical,bitwise,conditional,typeof,instanceof operator
let a = 10;
let b = 3;

console.log(a + b); // 13 (Addition)
console.log(a - b); // 7  (Subtraction)
console.log(a * b); // 30 (Multiplication)
console.log(a / b); // 3.333... (Division)
console.log(a % b); // 1  (Remainder)
console.log(a ** b); // 1000 (Exponentiation)


let x = 5;
x += 3;  // same as x = x + 3
console.log(x); // 8

x *= 2;  // same as x = x * 2
console.log(x); // 16


let y = 10;
let z = 20;

console.log(y == z);  // false
console.log(y != z);  // true
console.log(y > z);   // false
console.log(y < z);   // true
console.log(y >= 10); // true
console.log(y === 10); // true (strict equality)


let a1 = true;
let a2 = false;

console.log(a1 && a2); // false (AND)
console.log(a1 || a2); // true  (OR)
console.log(!a1);      // false (NOT)


let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName;
console.log(fullName); // "John Doe"

let greeting = `Hello, ${fullName}!`;
console.log(greeting); // "Hello, John Doe!"

let ages = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // "Yes"

let result = ((5 + 3) * 2 > 10) && (4 % 2 === 0);
console.log(result); // true



for (let i= 1 ,j = 10 , k = 1;i <= 10 && j >= 1 && k <= 10;i++,j--,k++){
  console.log(i,j,k)
}


const ptag = document.getElementById("ptag")
let star = []
let pyramid = []
for(let m = 1 ; m <=10 ; m++){
  pyramid.push(m)
  if(m===1){
    ptag.innerHTML += `1 <br>`
  }
  if(m===2){
    ptag.innerHTML += `1,1 <br>`
  }
  
    ptag.innerHTML += `1,2,1 ${pyramid}<br>`
  
  // star.push(m)
  // pyramid = `${m} ${star.toString()} <br>`
  // ptag.innerHTML += pyramid
}
 
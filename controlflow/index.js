const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log(greeting)



// Using the ternary operator
let price = 10;
let isMember = false;
let discount = isMember ? 0.2 : 0;
let total = 10 - (price * discount)

console.log("The price is " + total)


// switch case

let day;
let date = new Date().getDay();
 
switch (date) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}

console.log("Today is " + day)


// for loop

let text = "";

for (let i = 0; i < 5; i++) {
  text += `\tThe number is = ${i} \n`;
}
console.log(text)

let sum = 0;
for (let i = 0;i<=10;i++){
    sum +=i
}
console.log(sum)

// while

let txt = "";

let i = 0;
while (i < 10) {
  txt += `\tThe number is coming from while loop = ${i} \n`;
  i++;
}
console.log(txt)

// do while loop

let dotext = ""
let count = 0;

do {
  dotext += `The number is  ${count} \n`;
  count++;
}
while (count <= 10);  
console.log(dotext)
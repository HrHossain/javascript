const arr = [1,2,3,4,5,6,7,8,9,10]

 console.log(arr.at(-1))

arr.copyWithin(5,0,5)
// console.log(arr)

const myArr = [1, 2, 3, 4, 5,6];
const newArr = myArr.flatMap(x => [x, x * 10]);
// console.log(newArr)

const gg = [1,2,3,4,5,6,7,8]

const newgg = gg.slice(1,4)
// console.log(gg)
// console.log(newgg)

const people = [
  { name: "Amit Sharma", age: 28, profession: "Software Engineer" },
  { name: "Rina Das", age: 32, profession: "Doctor" },
  { name: "Kabir Khan", age: 24, profession: "Graphic Designer" },
  { name: "Sumi Akter", age: 27, profession: "Teacher" },
  { name: "Rahul Sen", age: 35, profession: "Architect" },
  { name: "Maya Dutta", age: 30, profession: "Data Analyst" },
  { name: "Tuhin Roy", age: 22, profession: "Student" },
  { name: "Farzana Haque", age: 40, profession: "Lawyer" },
  { name: "Imran Chowdhury", age: 29, profession: "Photographer" },
  { name: "Priya Paul", age: 26, profession: "Content Writer" }
];

const decorated = people.toSorted((a,b)=>{
    return a.profession.localeCompare(b.profession);
})

// console.log(decorated)


const employee = [
  { name: "Amit Sharma", age: 28, profession: "Software Engineer" },
  { name: "Rina Das", age: 32, profession: "Doctor" },
  { name: "Kabir Khan", age: 24, profession: "Graphic Designer" },
  { name: "Sumi Akter", age: 27, profession: "Data Analyst" },
  { name: "Rahul Sen", age: 35, profession: "Architect" },
  { name: "Maya Dutta", age: 30, profession: "Data Analyst" },
  { name: "Tuhin Roy", age: 22, profession: "" },
  { name: "Farzana Haque", age: 40, profession: "Lawyer" },
  { name: "Imran Chowdhury", age: 29, profession: "Photographer" },
  { name: "Priya Paul", age: 26, profession: "Content Writer" }
];
 

 let isAllJobHolder = employee.every((item)=> typeof item.profession === "string" && item.profession !=="" )
 console.log(isAllJobHolder)

employee.sort(()=>0.5 - Math.random())

const items = document.getElementById("items")
employee.map((item)=>{
  return items.innerHTML += `<div class="item">
            <h1>name:${item.name}</h1>
            <h3>age:${item.age}</h3>
            <h4 style="${item.profession ? "" : 'color:red'}">profession:${item.profession || "Job Seeker"}</h4>
        </div>`
})

const runs = [10,35,40,10,-120,80,5,2,5]

let len = runs.length;
let min = Infinity
let max = -Infinity


let i = len
while(i--){
    if(runs[i] < min){
        min = runs[i]
    }
}
 i = len 
while(i--){
    if(runs[i] > max){
        max = runs[i]
    }
}
console.log(min)
console.log(max)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const gf = fruits.includes("Orange",0)
console.log(gf)


const fbPeople = [
  { name: "Amit Sharma", age: 28, profession: "Software Engineer" },
  { name: "Rina Das", age: 32, profession: "Doctor" },
  { name: "Kabir Khan", age: 24, profession: "Graphic Designer" },
  { name: "Sumi Akter", age: 27, profession: "Teacher" },
  { name: "Rahul Sen", age: 35, profession: "Architect" },
  { name: "Maya Dutta", age: 30, profession: "Data Analyst" },
  { name: "Tuhin Roy", age: 22, profession: "Student" },
  { name: "Farzana Haque", age: 40, profession: "Lawyer" },
  { name: "Imran Chowdhury", age: 29, profession: "Photographer" },
  { name: "Priya Paul", age: 26, profession: "Content Writer" }
];

const designed = fbPeople.map((people)=>{
    return {
        ...people,
        role:people.profession.toLowerCase() ==="student" ? "student" : "worker"
    }
})

console.log(designed)

const prices = [1,2,11,11,22,33,55,66,4,67,100];

const newPrices = prices.map((item,index,arr)=>{
    if(index % 2 == 0){
        item = 50
    }else{
        item = 100
    }
    return item
})

console.log(newPrices)
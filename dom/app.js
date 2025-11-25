
import { myMove } from "./utils.js"


if( document.documentURI === "http://127.0.0.1:5500/dom/index.html"){
        console.log("ata tomer nijer page")
}

// const forms = document.forms[0]
// console.log(forms[0].value = "@gmail.com")
console.log(document.implementation)
 console.log(document.links)
console.log(document.lastModified)
console.log(document.readyState	)

// const para = document.getElementsByClassName("para")
// console.log(para)
// document.onreadystatechange = function (){
// if(document.readyState === "complete"){
//     alert("page loaded successfully")
//     console.log(document.documentURI)
// }
// }
 
function myFunction(){
    
    let x = document.forms["myForm"]["number"].value
    const show = document.createElement("p")
    let text = ''
    if(isNaN(x) || x < 1 || x > 10){
             text = "Value is not good type " + x
    }else{
        text = "Ok that is really awesome " + x
    }
    show.innerText = text
document.forms["myForm"]["number"].value = null
document.forms["myForm"].append(show)
     return false
}

const btn = document.getElementById("animateBtn")
console.log(btn.nodeType)
btn.addEventListener("click",myMove,{once:true})

window.addEventListener("resize",()=>{
    console.log("we are bangladeshi")
})


console.log(window.history)

console.log(navigator.cookieEnabled)
console.log(navigator.language)
console.log(navigator.onLine)
if(navigator.onLine === true){
    console.log("user is active")
}else{
    console.log("user is not active")
}
console.log(navigator.appName)
console.log(navigator.appCodeName)
console.log(navigator.product)
 navigator.geolocation.getCurrentPosition((position)=> {
   const coords =  {
        x:position.coords.latitude,
        y:position.coords.longitude
    }
    console.log(coords)
})

console.log(navigator)



const stopwatch = document.getElementById("stopwatch")
const display = stopwatch.children[0]
const startBtn = display.nextElementSibling
const stopBtn = startBtn.nextElementSibling
let count = 0
let seconds = 0
let ref = null
startBtn.addEventListener("click",()=>{
     ref = setInterval(()=>{
     count += 1
     if(count === 60){
        count = 0
        seconds ++
        if(seconds === 101){
            count = 0
           seconds = 0

            clearTimeout(ref)
            const answer = confirm("Do you want to start the stopwatch? (Cancel = Clear all)");
            if(answer){
                startBtn.click()
            }
        }
     }
     display.textContent = `${seconds} ::: ${count}`
},0)
 console.log("event fired")
})

stopBtn.addEventListener("click",()=>{
    count = 0
     clearTimeout(ref)
     console.log("event fired")
}
 
)

const date = new Date();
date.setTime(date.getTime() + 10 * 1000)
console.log(date)
const expires = "expires=" + date.toUTCString();
const status = navigator.onLine ? "active" : "inactive";
document.cookie = `Online=${status}; ${expires}; path=/about`;
const x = document.cookie

console.log("Cookie set for 10 seconds:", x);
// invoice generator

// const productPrice = prompt("product price");
// const quantity = prompt("product quantity");
// const discount = prompt("discount add");
let validUser = true
// function getProductPrice(price,quantity){
//     if(isNaN(price) || isNaN(quantity) || price <= 0 || quantity <= 0){
//         validUser = false
//         return "Invalid Input";
//     }else{
//         return Number(price) * Number(quantity)
//     }
    
// }

// const totalAmount = getProductPrice(productPrice,quantity);

// function addVat(totalAmount,vat=15){
//     if(!validUser){
//          console.log("addVat1")
//         return "input is not valid"
       
//     }else{
         
//         return totalAmount + ((totalAmount * vat)/100)
//     }
    
// }
 
// const aftervat = addVat(totalAmount,15)


// function addDiscount(vatPrice,discount){
//     if(isNaN(discount)){
//          validUser = false
//         return "Invalid Input";
//     }
//     if(!validUser){
//         return "input is not valid"
//     }else{
//         return vatPrice -((vatPrice * Number(discount))/100)
//     }
    
// }

// const finalPrice = addDiscount(aftervat,discount)
// const generateInvoiceText = `-------------------invoice-----------------------
                             
//                              product price        =  ${productPrice} tk
//                              product quantity     =  ${quantity} pcs
//                              vat                  =  15% by Govt.
//                              with vat price       =  ${aftervat} tk
//                              discount             =  ${finalPrice} tk
//                              -------------------Total price-----------------------
//                                                   = ${finalPrice} tk
//                              `
// console.log(generateInvoiceText)



// let callcatch = 0;
// function useEffectEvent(func){
//     const ff = arguments[0]
    
//     return function(...args){
//         callcatch = args[1]
//         console.log(callcatch)
//          if(callcatch !== args[1]){
//             console.log(callcatch)
//             func(...args[0])
//          }else{
//             func(...args)
//          }
//     }
// }

// const myEvent = useEffectEvent((path, num) => {
//   console.log(`Navigating to ${path} with number ${num}`);
// });

//  myEvent("/home", 13);
//  myEvent("/home", 13);

// useEffectEvent(( "/home" , 12 ) => {
//     console.log("i need to catch up all")
// })

function createUniqueCaller(func){
    let uniqParam = new Set();
    return (...arg)=>{
        const key = JSON.stringify(arg)
        if(uniqParam.has(key)){
            console.log("no need to call agian")
            return;
        }
        if(uniqParam.has(key)){
            console.log("navigate page")
            return;
        }
        if(uniqParam.has(key)){
            console.log("page count")
            return;
        }
        uniqParam.add(key)
        func(...arg)
        let vale
        uniqParam.forEach(val=>{
            val += vale
        })
        console.log(vale)
    }
}

const fsl = createUniqueCaller((par1,par2)=>{
    console.log(par1,par2)
})
fsl("/home",1)
fsl("/home",1)
fsl("/home",2)


const compose = (...fns) => (x) => fns.reduce((acc,fn) => fn(acc),x)
const add5 = x => x + 5;
const multifly3 = x => x * 3;
const substract2 = x => x - 2;
const calculate = compose(add5,multifly3,substract2) 
console.log(calculate(10))

// revealing module pattern

const counter = (function(){
    let count = 0
    function increment(){
        return ++count
    }
    function getTotalUser(){
        return count
    }

    return{
        increment,
        getTotalUser
    }
})()
counter.increment()
counter.increment()
counter.increment()
console.log(counter.getTotalUser())

function integrate3xSinY(x) {
  let sum = 0;
  let step = 0.01; // small step for accuracy

  for (let y = 0; y <= 360; y += step) {
    let rad = y * Math.PI / 180; // degree → radian
    sum += 3 * x * Math.sin(rad) * step;
    
  }

  return (sum);
}

console.log(integrate3xSinY(0.5)); // ≈ 0
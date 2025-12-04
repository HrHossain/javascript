function step1(callback,number1,number2){
    let result1 = number1 + number2
    setTimeout(()=>{
        callback(result1,number1)
    },800)
}

function step2(callback,result,total){
    let total2 = total + result  
    setTimeout(()=>{
        callback(total2,result)
    },1000)
}
function step3(callback,result,number){
    let result1 = number + result 
    setTimeout(()=>{
        callback(result1,number)
    },600)
}
function step4(cb,result,number){
    let result1 = result + number
    setTimeout(()=>{
        cb(result1,number)
    },900)
}
function step5(cb,result,number){
    let result1 = result + number
    setTimeout(()=>{
        cb(result1,number)
    },200)
}

function step6(cb,result,number){
    let result1 = result + number
    setTimeout(()=>{
        cb(result1,number)
    },200)
}
function step7(cb,result,number){
    let result1 = result + number
    setTimeout(()=>{
        cb(result1,number)
    },200)
}
function step8(cb,result,number){
    let result1 = result + number
    setTimeout(()=>{
        cb(result1,number)
    },200)
}
function step9(cb,result,number){
    let result1 = result + number
    setTimeout(()=>{
        cb(result1,number)
    },200)
}
function step10(cb,result,number){
    let result1 = result + number
    setTimeout(()=>{
        cb(result1,number)
    },200)
}

// step1((result,number)=>{
//     console.log("step 1 " + result,number)
//     let total1 = result + number
//     step2((total,number)=>{
//         let total2 = total + number
//         console.log("step 2 " + total,number)
//         step3((total,number)=>{
//             console.log("step 3 " + total,number)
//             let total2 = total+number
//             step4((x,y)=>{
//                 console.log("step 4 " + x,y)
//                 step5((x,y)=>{
//                     let total = x + y
//                     console.log("step 5 " + x,y)
//                     step6((x,y)=>{
//                      let total = x + y
//                         console.log("step 6 " + x,y)
//                         step7((x,y)=>{
//                             let total = x + y
//                             console.log("step 7 " + x,y)
//                             step8((x,y)=>{
//                                 let total = x + y
//                                  console.log("step 8 " + x,y)
//                                  step9((x,y)=>{
//                                     let total = x + y
//                                     console.log("step 9 " + x,y)
//                                         step10((x,y)=>{
//                                         let total = x + y
//                                         console.log("step 10 " + x,y)
//                                         },total,x)
//                                     },total,x)
//                                 },total,x)
//                              },total,x)
//                          },total,x)
//                     },total,x)
//                 },total2,total)
//          },total2,total)
//     },result,total1)
// },10,20)

function save1(cb,number1,number2){
    let r1 = number1 + number2
    debugger
    setTimeout(()=>{
        console.log("save 1 " + r1,number1)
        cb(r1,number1)
        debugger
    },800)
}
function save2(cb,number1,number2){
    let r1 = number1 + number2
    setTimeout(()=>{
        console.log("save 2 " + r1,number1)
        cb(r1,number1)
        debugger
    },900)
}
function save3(cb,number1,number2){
    let r1 = number1 + number2
    setTimeout(()=>{
        console.log("save 3 " + r1,number1)
        cb(r1,number1)
        debugger
    },800)
}
function save4(cb,number1,number2){
    let r1 = number1 + number2
    debugger
    setTimeout(()=>{
        console.log("save 4 " + r1,number1)
        cb(r1,number1)
        debugger
    },800)
}

// save1((r1,n1)=>{
//     save2((r1,n1)=>{
//         save3((r1,n1)=>{
//             save4((r1,n1)=>{
//                setTimeout(()=>{
//                  console.log("finally gotted total value",r1)
//                },1100)
//             },r1,n1)
//         },r1,n1)
//     },r1,n1)
// },10,20)


function number(func){

    let result = 10;
    func()
    
        console.log(result)
   

}

number(()=>{
    
     setTimeout(()=>{
           console.log("I am here from callback")
     })
    
    
})
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("one"), 1000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("two"), 2000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("three"), 3000);
// });
// const p4 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("four"), 4000);
// });
// const p5 = new Promise((resolve, reject) => {
//   reject(new Error("reject"));
// });

// Using .catch:
// Promise.all([p1, p2, p3, p4])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });

// Logs:
// "reject"

// const friend1 = new Promise(resolve => {
//   setTimeout(() => resolve("Friend 1 replied 😊"), 1500);
// });

// const friend2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("Friend 2 didn’t reply 😐"), 1000);
// });

// const friend3 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("Friend 3's phone is off 📵"), 2000);
// });

// Promise.allSettled([friend1, friend2, friend3])
//   .then(results => {
//     console.log("All messages have been processed:");
//     console.log(results);
//   });

//   function goggle(){
//     for (let i = 0 ; i<=10; i++){
//     if(i===5){
//         return 5 *5
//     }
    
//   }
//   return ("algorithm fail")
//   }

//   const play = goggle()
//   console.log(play)

let user = {}

  function retryAgain(){
    for(let i = 0; i <= 3 ; i++){
        try{
        if(Math.random() > 0.5){
            console.log("ok go ahead")
            user.authorization = Math.random()*10000
            console.log("added authorization")
             return;
        }else{
            throw new Error("need retry...")
        }
            
        }catch(err){
            if(i === 3){
                console.log("your attempt is fired")
                return;
            }
            console.log(err.message)
            console.log("try again")
        }
    }
  }

 function authorizationCheckWithRecall(ms){
        retryAgain()
        return new Promise((resolve)=>{
           setTimeout(()=>{
            user.authorization = ""
            console.log("session loss and need to add by refresh token!")
            sessionManager()
            
        },ms)
        resolve(true)

        })
 }

 async function sessionManager(){
    await authorizationCheckWithRecall(1000).then((od)=>{
        console.log(od)
    if(user.authorization){
        console.log("clear authorization...!")
    }
 }).then(()=>{
    console.log(user)
 })
 }
console.log("final ", user)
 sessionManager()
 
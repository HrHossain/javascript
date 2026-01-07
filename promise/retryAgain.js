
const h1 = document.getElementById("header")

let validUser = {};
function retryAgain(retryEntries = 3){
    return new Promise((resolve,reject)=>{
        let attempt = 0 ;
        function tryNow(){
            console.log(`Attempt: ${attempt + 1}`);
            if(Math.random() > 0.5){
                validUser.authorization = Math.random()*10000
                console.log("authorization added")
                return resolve(validUser)
            }
             attempt++;
             console.log("Retry failed...");
             if(attempt >= retryEntries ){
                 return reject("All retry attempts failed!");
             }
            //  set backoff for restless networking
            setTimeout(tryNow, 300 * attempt)
        }
        tryNow()
    })
}
async function sessionManager(sessionDuration){
    while(true) {
        console.log("authorization is checking")
        if(!validUser.authorization){
            try{
                await retryAgain()
            }catch(err){
                console.log(err);
                console.log("Cannot create session. Stopping.");
                break
            }
        }
        console.log("session is active")
        h1.innerText = "User is valid"
        await new Promise(res=>setTimeout(res,sessionDuration))
        console.log("your session is expired now!")
        
        validUser.authorization = ''
        h1.innerText = "User is not valid"
    }
    
}

console.log("Starting Session Manager...");
sessionManager(10000);

retryAgain().then((d)=>{
    console.log(d)
  
}).catch((d)=>{
    console.log(d)
})
const btn = document.getElementById("submitBtn");

const fields=[
    {
        id:"email",
        errorId:"emailError",
        validate:v=>v.trim() !== ""
    },
    {
        id:"password",
        errorId:"passwordError",
        validate:v=>v.trim() !== ""
    }
]

btn.addEventListener("click",(e)=>{
    let user ={}
    let valid = true
   fields.forEach(f=>{
    const input = document.getElementById(f.id);
    const errorState = document.getElementById(f.errorId)
    if(f.validate(input.value)){
            user[f.id] = input.value;
            errorState.classList.add("hidden")
    }else{
        valid = false
        errorState.classList.remove("hidden")
    }
 })
 if(!valid) return;
validUser(user)
 
})

function validUser(user){
    const saved = localStorage.getItem("customer-register");
    const registerUser = saved ? JSON.parse(saved) : null;

    if(!registerUser){
        alert("No account found. Please sign up first.");
        return (window.location.href = "http://127.0.0.1:5500/e-commerce%20project/signup.html");
    }
    if(registerUser.email === user.email && registerUser.password === user.password){
        
         return window.location.href ="http://127.0.0.1:5500/e-commerce%20project/allproducts.html?status=true"
    }
    alert("Invalid email or password");

}
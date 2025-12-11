 const btn = document.getElementById("submitBtn");
 const form = document.getElementsByTagName("form")
 const formValue = {}
 const fields = [
            {
                id:"fname",
                errorId:"firstNameError",
                validate:v=> v.trim() !== ''
            },
            {
                id:"lname",
                errorId:"lastNameError",
                validate:v=> v.trim() !== ''
            },
            {
                id:"email",
                errorId:"emailError",
                validate:v=> v.trim() !== '' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
            },
            {
                id:"number",
                errorId:"numberError",
                validate:v=> v.trim() !== '' 
            },
            {
                id:"password",
                errorId:"passwordError",
                validate: v => v.length >= 6
                
            },
            {
                id:"cpassword",
                errorId:"cpasswordError",
                validate:v=> v === document.getElementById("password").value
            },
        ]

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let valid = true;
    fields.forEach(f=>{
        const input = document.getElementById(f.id);
        const errorValue = document.getElementById(f.errorId) 
        if(f.validate(input.value)){
            formValue[f.id] = input.value
            errorValue.classList.add("hidden")
        }else{
            errorValue.classList.remove("hidden")
            valid = false
        }
        
    })
    if(!valid){
        alert("form submission unsuccessfully")
        return;
    }else{
        btn.innerHTML = `
        Loading
        <svg xmlns="http://www.w3.org/2000/svg" width="18px" fill="#fff" class="ml-2 inline animate-spin"
          viewBox="0 0 24 24">
          <path fill-rule="evenodd"
            d="M7.03 2.757a1 1 0 0 1 1.213-.727l4 1a1 1 0 0 1 .59 1.525l-2 3a1 1 0 0 1-1.665-1.11l.755-1.132a7.003 7.003 0 0 0-2.735 11.77 1 1 0 0 1-1.376 1.453A8.978 8.978 0 0 1 3 12a9 9 0 0 1 4.874-8l-.117-.03a1 1 0 0 1-.727-1.213zm10.092 3.017a1 1 0 0 1 1.414.038A8.973 8.973 0 0 1 21 12a9 9 0 0 1-5.068 8.098 1 1 0 0 1-.707 1.864l-3.5-1a1 1 0 0 1-.557-1.517l2-3a1 1 0 0 1 1.664 1.11l-.755 1.132a7.003 7.003 0 0 0 3.006-11.5 1 1 0 0 1 .039-1.413z"
            clip-rule="evenodd" data-original="#000000" />
        </svg>
      `
        btn.disabled = true
        setTimeout(()=>{
            localStorage.setItem("customer-register",JSON.stringify(formValue))
           
            return window.location.href ="http://127.0.0.1:5500/e-commerce%20project/login.html"
            
        
        },4000)
    }


})

// && /^01[3-9][0-9]{8}$/.test(v)
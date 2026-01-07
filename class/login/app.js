const users = [
  {
    id: 1,
    email: "admin@test.com",
     username:"emilys",
    password: "123456",
  },
  {
    id: 2,
    email: "user@test.com",
     username:"emilys",
    password: "password",
  },
  {
    id: 3,
    email: "user@test.com",
    username:"emilys",
    password: "emilyspass",
  },
];

class Login {
  constructor(email, password,name) {

        this.email = email;
        this.password = password;
        this.username = name
  }
  validation() {
        if (!this.email || !this.password) {
        return "All fields are required";
        }
        if (!this.email.includes("@")) {
        return "invalid email format";
        }
        if (this.password.length < 6) {
        return "Password must be at least 6 characters";
        }
        if(this.username == ""){
            return "User name must be added"
        }
        return null;
  }
  authentication() {
        const user = users.find(
        (user) => user.email === this.email && user.password === this.password
        );
        if (user) {
        window.location.href =
            "https://www.w3schools.com/js/js_class_inheritance.asp";
        return "login successful";
        } else {
        return "Invalid email or password";
        }
  }
//   emilys
// emilyspass
  async authenticationWithDummyjson (){
        const user = await fetch('https://dummyjson.com/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            
            username: this.username,
            password: this.password,
            expiresInMins: 30, // optional, defaults to 60
        }),
        credentials: 'include' // Include cookies (e.g., accessToken) in the request
        })

        if (!user.ok) {  // check fetch response status
        console.log("Wrong user credentials")
        return
    }
        const res = await user.json()
        

        console.log(res)
  }
  async login() {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const name = document.getElementById("name").value;
        const message = document.getElementById("message");

        const currentUser = new Login(email, password,name);
        const error = currentUser.validation();

        if (error) {
        message.innerText = error;
        message.style.color = "red";
        return;
        }
        const result = currentUser.authentication();

        message.innerHTML = result;
        message.style.color = result === "Login successful" ? "green" : "red";
        const api = await currentUser.authenticationWithDummyjson()

        console.log(api)
  }
}

function handleLogin() {
  const user = new Login();
  user.login();
}

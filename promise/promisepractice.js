let getUser = new Promise((resolve,reject)=>{
    const user = {
        name:'Jhon Doe',
        email:'x@x.com',
        password:'x@x.password',
        permission:['db','hrr','dev']
    }
    resolve(user)
})

getUser
.then(user=>{
    console.log(`Got user ${user.name}`)
    if(user.permission.includes("hr")){
        throw new Error("you are not access the HR module")
    }
    return user.email
})
.then((email)=>console.log(email))
.catch(err=>{
    console.log(err.message)
})



function getFetch(url) {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Data not found yet");
      }
      return response.json();
    })
    .catch(error => {
      return { error: error.message };
    });
}

const product1 = getFetch('https://dummyjson.com/products')
const product2 = getFetch('https://dummyjson.com/posts')
const product3 = getFetch('htt://dummyjson.com/users/5/todos')

// const promise = Promise.all([product1,product2,product3])

// const promise = Promise.any([product1,product2,product3])

const promise = Promise.allSettled([product1,product2,product3])

promise.then(data=>console.log(data))
.catch(err=>console.log(err.message))

function doFetch(){
  let value = {
    state:false,
    message:"something is missing"
  }
const error = new Error("error")
  return Promise.resolve(value)
}

doFetch()
.then(data=>console.log(data))
.catch((err)=>{
  console.log(err)
})
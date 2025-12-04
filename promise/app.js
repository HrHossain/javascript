// ui development
const categoryLists = document.getElementById("categoryLists")
const state = document.getElementById("loading")
const products = document.getElementById("products")
const productsloading = document.getElementById("productsloading")
let categoryListsContent
let productListContent

function fetchProductsCategorylist(){
   state.innerHTML =`<div class="spinner-3 w-10 h-10 rounded-full bg-gray-800 relative">
        <div class="absolute w-full h-full bg-gray-800 rounded-full animate-ping"></div>
        <div class="absolute w-full h-full bg-gray-800 rounded-full animate-ping delay-200"></div>
      </div>` 
    const data = fetch("https://dummyjson.com/products/category-list")
  .then(response => {
    if (!response.ok) {
      throw new Error("Server error " + response.status);
    }
    return response.json();
  })
  .then(data => {
    return data
  })
  .catch(error => {
    return error
  });
//  there Promise is unnecessary but only practice purpose
    return new Promise((resolve,reject)=>{
        if(data){
            resolve(data)
        }else{
            reject("connection lost. try reconnect...")
        }
    })
}
fetchProductsCategorylist()
.then(data=>{
    state.innerHTML=''
    data.forEach(element => {
        categoryLists.innerHTML += ` <li>
            <a href="javascript:void(0)"
              class="text-slate-700 font-medium text-[15px] block hover:text-slate-900 hover:bg-gray-100 rounded px-4 py-2 transition-all">
              ${element}
            </a>
          </li>`
    })
}).catch(err=>{
    console.log(err)
}).finally(()=>{
    state.innerHTML=''
})


// all products display

function fetchProductslist(){
    productsloading.innerHTML =`<div class="flex items-center justify-center h-100">
      <div class=" spinner-3 w-10 h-10 rounded-full bg-gray-800   relative">
        <div class="absolute w-full h-full bg-gray-800 rounded-full animate-ping"></div>
        <div class="absolute w-full h-full bg-gray-800 rounded-full animate-ping delay-200"></div>
      </div>
    </div>` 
    const data = fetch("https://dummyjson.com/products")
  .then(response => {
    if (!response.ok) {
      throw new Error("Server error " + response.status);
    }
    return response.json();
  })
  .then(data => {
    return data
  })
  .catch(error => {
    return error
  });

    return new Promise((resolve,reject)=>{
        if(data){
            resolve(data)
        }else{
            reject("connection lost. try reconnect...")
        }
    })
}
fetchProductslist()
.then(data=>{
    productsloading.innerHTML=''
    console.log(data)
    data.products.forEach(element => {
        products.innerHTML += `<div class="bg-white flex flex-col overflow-hidden hover:shadow-md transition-all">
          <div class="w-full bg-gray-50">
            <a href="javascript:void(0)" class="block">
              <img src=${element.images[0]}
                class="w-full object-cover object-top aspect-[230/307]" />
            </a>
          </div>
          <div class="p-2 flex-1 flex flex-col">
            <div class="flex-1">
              <a href="javascript:void(0)" class="block border-0 outline-0">
                <h5 class="text-sm sm:text-base font-semibold text-slate-900 truncate">${element.title}</h5>
              </a>
              <p class="text-sm mt-1 text-slate-600 truncate">${element.description}</p>
              <div class="flex flex-wrap justify-between gap-2 mt-3">
                <div class="flex gap-2">
                  <h6 class="text-sm sm:text-base font-bold text-slate-900">$${element.price}</h6>
                
                </div>
                <div class="flex items-center gap-0.5">
                  <svg class="w-[14px] h-[14px] fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg class="w-[14px] h-[14px] fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg class="w-[14px] h-[14px] fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg class="w-[14px] h-[14px] fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg class="w-[14px] h-[14px] fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-2 mt-4">
              <div
                class="bg-pink-200 hover:bg-pink-300 w-12 h-9 flex items-center justify-center rounded-sm cursor-pointer" title="Wishlist">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-pink-600 inline-block" viewBox="0 0 64 64">
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"></path>
                </svg>
              </div>
              <button type="button" class="text-sm font-medium px-2 cursor-pointer min-h-[36px] w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-0 border-0 rounded-sm">Add to cart</button>
            </div>
          </div>
        </div>`
    })
}).catch(err=>{
    console.log(err)
}).finally(()=>{
    productsloading.innerHTML=''
})


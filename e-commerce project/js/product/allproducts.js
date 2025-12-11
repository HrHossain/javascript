import { renderList, renderProductList } from "./lib.js";
const listLoading = document.getElementById("listLoading")
const productLoading = document.getElementById("productLoading")
// category list 
console.log(listLoading)
function getCategoryFetch(){
    listLoading.innerHTML = `<div class="flex flex-wrap gap-16 max-w-md mx-auto mt-12">
    <span class="spinner-2 relative inline-block w-12 h-12 border-2 border-black rounded-full animate-spin mt-5">
        <div class="absolute left-1/2 top-0 w-[3px] h-6 bg-black transform -translate-x-1/2 rounded"></div>
      </span>
      </div>`
    const response = fetch("https://dummyjson.com/products/category-list");
    return Promise.resolve(response)
}
 getCategoryFetch()
 .then((data=> data.json()))
 .then(data=>{
    listLoading.innerHTML=""
    renderList(data)
})
 .catch(err=>console.log(err.message))
 .finally(()=>{
listLoading.innerHTML=""
 })

{
 

function getProductFetch(){
    productLoading.innerHTML = `
    <div class="flex flex-wrap gap-16 max-w-md mx-auto mt-12">
    <span class="spinner-2 relative inline-block w-12 h-12 border-2 border-black rounded-full animate-spin mt-5">
        <div class="absolute left-1/2 top-0 w-[3px] h-6 bg-black transform -translate-x-1/2 rounded"></div>
      </span>
      </div>
      `
    return fetch('https://dummyjson.com/products')
}

getProductFetch()
.then(data=>data.json())
.then((data=>{
    productLoading.innerHTML = ""
    data.products && renderProductList(data.products)
}))
.catch(err=>console.log(err))
.finally(()=>{
    productLoading.innerHTML = ""
})

}



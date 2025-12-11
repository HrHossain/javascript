import { renderSingleProduct } from "./lib.js"
const singleProductLoading = document.getElementById("singleProductLoading")
const params = new URLSearchParams(window.location.search)
const id = params.get("id")


function getSingleProductFetch(){
    singleProductLoading.innerHTML = `<div class="flex flex-wrap gap-16 max-w-md mx-auto mt-12">
    <span class="spinner-2 relative inline-block w-12 h-12 border-2 border-black rounded-full animate-spin mt-5">
        <div class="absolute left-1/2 top-0 w-[3px] h-6 bg-black transform -translate-x-1/2 rounded"></div>
      </span>
      </div>`
    const response = fetch(`https://dummyjson.com/products/${id}`)

    return Promise.resolve(response)
}

getSingleProductFetch()
.then(data=>data.json())
.then(data=> {
    singleProductLoading.innerHTML = ''
    renderSingleProduct(data)
} )
.catch(err=>console.log(err))
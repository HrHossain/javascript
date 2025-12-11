import { productPainting } from "./helper.js";

// product category list rendering
export function renderList(data){
    const categoryList = document.getElementById("list")
  if (!Array.isArray(data)) return;
 let html = '';
 data.forEach(category => {
    html += `<h6 class="text-blue-600 m-2 text-medium font-semibold px-4">${category}</h6>`
 });
 
 categoryList.innerHTML = html
}

export function renderProductList(products){
   const productList = document.getElementById("productList")
   const html = products.map(product=> productPainting(product)).join('');
   productList.innerHTML = html
}
export function renderSingleProduct(data){
    const singleProduct = document.getElementById("singleProduct")
    const { price, discountPercentage } = data;
  const discountedPrice = Math.trunc(price - (price * discountPercentage) / 100);
    singleProduct.innerHTML =`<div class="p-4">
      <div class="xl:max-w-screen-xl lg:max-w-screen-lg max-w-xl mx-auto">
        <div class="grid items-start grid-cols-1 lg:grid-cols-5 gap-8 max-lg:gap-12 max-sm:gap-8">
          <div class="w-full lg:sticky top-0 lg:col-span-3">
            <div class="flex flex-row gap-2">
              <div class="flex flex-col gap-2 w-16 max-sm:w-10 shrink-0">
                ${data.images?.map(image=>(`<img src="${image}" alt="Product1" class="aspect-[64/85] object-cover object-top w-full cursor-pointer border-b-2 border-black" />`)).join('')}
                
              </div>
              <div class="flex-1">
                <img src="${data.thumbnail}" alt="Product" class="w-full aspect-[750/800] object-top object-cover" />
              </div>
            </div>
          </div>

          <div class="w-full lg:col-span-2">
            <div>
              <h3 class="text-lg font-bold text-slate-900">${data.title}</h3>
              <div class="flex items-center space-x-1 mt-2">
                <svg class="w-4 h-4 fill-purple-800" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg class="w-4 h-4 fill-purple-800" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg class="w-4 h-4 fill-purple-800" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg class="w-4 h-4 fill-purple-800" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg class="w-4 h-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>

                <p class="text-sm text-slate-900 !ml-3">4.0 (150)</p>
              </div>

              <div class="flex items-center flex-wrap gap-4 mt-6">
                <h4 class="text-slate-900 text-2xl font-bold">$${discountedPrice}</h4>
                <p class="text-slate-500 text-lg"><strike>$${data.price}</strike> <span class="text-sm ml-1.5">Tax included</span></p>
              </div>
            </div>

            <hr class="my-6 border-gray-300" />

            <div>
              <h3 class="text-lg font-bold text-slate-900">Sizes</h3>
              <div class="flex flex-wrap gap-4 mt-4">
                <button type="button" class="w-10 h-9 cursor-pointer border border-gray-300 hover:border-purple-600 text-slate-900 text-sm flex items-center justify-center shrink-0">SM</button>
                <button type="button" class="w-10 h-9 cursor-pointer border border-purple-600 hover:border-purple-600 text-purple-800 text-sm flex items-center justify-center shrink-0">MD</button>
                <button type="button" class="w-10 h-9 cursor-pointer border border-gray-300 hover:border-purple-600 text-slate-900 text-sm flex items-center justify-center shrink-0">LG</button>
                <button type="button" class="w-10 h-9 cursor-pointer border border-gray-300 hover:border-purple-600 text-slate-900 text-sm flex items-center justify-center shrink-0">XL</button>
              </div>

              <div class="mt-6">
                <h3 class="text-lg font-bold text-slate-900">Colors</h3>
                <div class="flex flex-wrap gap-4 mt-4">
                  <button type="button" class="w-10 h-9 cursor-pointer bg-gray-600 border border-transparent hover:border-purple-600 text-slate-900 text-sm flex items-center justify-center shrink-0"></button>
                  <button type="button" class="w-10 h-9 cursor-pointer bg-black border border-purple-600 hover:border-purple-600 text-purple-800 text-sm flex items-center justify-center shrink-0"></button>
                  <button type="button" class="w-10 h-9 cursor-pointer bg-blue-600 border border-transparent hover:border-purple-600 text-slate-900 text-sm flex items-center justify-center shrink-0"></button>
                  <button type="button" class="w-10 h-9 cursor-pointer bg-purple-600 border border-transparent hover:border-purple-600 text-slate-900 text-sm flex items-center justify-center shrink-0"></button>
                </div>
              </div>
            </div>

            <hr class="my-6 border-gray-300" />

            <div class="mt-6 flex flex-wrap gap-4">
              <button type="button" class="px-4 py-3 w-[45%] cursor-pointer border border-gray-300 bg-gray-100 hover:bg-gray-200 text-slate-900 text-sm font-semibold">Add to wishlist</button>
              <button type="button" class="px-4 py-3 w-[45%] cursor-pointer border border-purple-600 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold">Add to cart</button>
            </div>

            <hr class="my-6 border-gray-300" />

            <div>
              <h3 class="text-lg font-bold text-slate-900">Select Delivery Location</h3>
              <p class="text-slate-500 text-sm mt-1">Enter the pincode of your area to check product availability.</p>
              <div class="flex items-center gap-2 mt-4 max-w-sm">
                <input type='number'
                  placeholder='Enter pincode' class="bg-gray-100 px-4 py-2.5 text-sm w-full border border-gray-300 outline-0" />
                <button type='button' class="border border-purple-600 outline-0 bg-purple-600 hover:bg-purple-700 text-white cursor-pointer px-4 py-2.5 text-sm">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 bg-gray-100 px-6 py-12">
        <div class="xl:max-w-screen-xl max-w-screen-lg mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="space-y-6">
              <h3 class="text-lg font-bold text-slate-900">PRODUCT INFORMATION</h3>

              <div>
                <h3 class="text-slate-900 text-sm font-semibold">Material:</h3>
                <p class="text-sm text-slate-500 mt-2">100% Organic Cotton</p>
              </div>

              <div>
                <h3 class="text-slate-900 text-sm font-semibold">Care Guidelines:</h3>
                <p class="text-sm text-slate-500 mt-2">Wash cold, tumble dry low, do not bleach.</p>
              </div>

              <div>
                <h3 class="text-slate-900 text-sm font-semibold">Features:</h3>
                <ul class="list-disc pl-5 mt-2 space-y-2 text-sm text-slate-500">
                  <li>Eco-friendly, breathable fabric.</li>
                  <li>Classic fit for everyday comfort.</li>
                  <li>Durable stitching for long-lasting wear.</li>
                  <li>Available in multiple colors and sizes.</li>
                </ul>
              </div>
            </div>

            <div class="space-y-6">
              <h3 class="text-lg font-bold text-slate-900">SHIPPING & RETURNS</h3>

              <div class="space-y-4">
                <div class="flex justify-between items-start">
                  <div>
                    <p class="text-slate-900 text-sm font-semibold mb-2">Standard Shipping</p>
                    <p class="text-slate-500 text-sm">Delivery in 3-5 business days</p>
                  </div>
                  <span class="text-slate-500 text-sm">$5.00</span>
                </div>

                <div class="flex justify-between items-start">
                  <div>
                    <p class="text-slate-900 text-sm font-semibold mb-2">Expedited Shipping</p>
                    <p class="text-slate-500 text-sm">Delivery in 1-2 business days</p>
                  </div>
                  <span class="text-slate-500 text-sm">$15.00</span>
                </div>

                <div class="flex justify-between items-start">
                  <div>
                    <p class="text-slate-900 text-sm font-semibold mb-2">Pickup Option</p>
                    <p class="text-slate-500 text-sm">Available within 24 hours</p>
                  </div>
                  <span class="text-slate-500 text-sm">FREE</span>
                </div>
              </div>

              <div class="space-y-2">
                <p class="text-sm text-slate-500">For more details on our return policy, <span class="underline">click here</span>.</p>
                <p class="text-sm text-slate-500">A $3.00 processing fee applies to returns. <span class="underline">Learn more</span>.</p>
                <p class="text-sm text-slate-500">Returns for online orders must be initiated online. In-store returns are not accepted.</p>
                <p class="text-sm text-slate-500">To promote sustainability, we now use electronic return labels. <span class="underline">Read more</span>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div> `
}
export function renderStar(rating=3.75){
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >=0.25 && rating % 1 <0.75;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
    let starsHTML = "";
    for (let i = 0; i < fullStars; i++) {
    starsHTML += `<svg class="w-[14px] h-[14px] fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>`;
  }
   if (hasHalfStar) {
    starsHTML += `<svg
  width="14"
  height="14"
  viewBox="0 0 14 13"
  xmlns="http://www.w3.org/2000/svg"
  class="fill-blue-600"
>
  <!-- Clip left half -->
  <defs>
    <clipPath id="half-clip">
      <rect x="0" y="0" width="7" height="13" />
    </clipPath>
  </defs>

  <!-- Star outline -->
  <path
    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
    fill="none"
    stroke="currentColor"
    stroke-width="1"
  />

  <!-- Left half star fill -->
  <path
    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
    fill="currentColor"
    clip-path="url(#half-clip)"
  />
</svg>
`;
  }
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += `<svg class="w-[14px] h-[14px] fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>`;
  }
  return starsHTML;
}

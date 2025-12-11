import { renderStar } from "./lib.js";


export function productPainting(product){
    const { price, discountPercentage } = product;
  const discountedPrice = Math.trunc(price - (price * discountPercentage) / 100);
  console.log(price,discountedPrice)
    return` <div class="bg-white flex flex-col overflow-hidden hover:shadow-md transition-all">
          <div class="w-full bg-gray-50">
            <a href="http://127.0.0.1:5500/e-commerce%20project/singleProduct.html?id=${product.id}" class="block">
              <img src=${product.thumbnail} alt="Product 3"
                class="w-full object-cover object-top aspect-[230/307]" />
            </a>
          </div>
          <div class="p-2 flex-1 flex flex-col">
            <div class="flex-1">
              <a href="javascript:void(0)" class="block border-0 outline-0">
                <h5 class="text-sm sm:text-base font-semibold text-slate-900 truncate">${product.title}</h5>
              </a>
              <p class="text-sm mt-1 text-slate-600 truncate">${product.description}</p>
              <div class="flex flex-wrap justify-between gap-2 mt-3">
                <div class="flex gap-2">
                  <h6 class="text-sm sm:text-base font-bold text-slate-900">$${discountedPrice}</h6>
                  <h6 class="text-sm sm:text-base text-slate-600"><strike>$${price}</strike></h6>
                </div>
                <div class="flex items-center gap-0.5">
                  ${
                    renderStar(product.rating)
                  }
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
        </div>
        `
}
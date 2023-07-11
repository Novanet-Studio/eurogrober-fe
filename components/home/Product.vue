<template>
  <div class="container relative mt-16">
    <header-title
      title="Products"
      subtitle="Kitchen hardware and accessories"
    />

    <div
      class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]"
    >
      <NuxtLink to="/product/soft-close-hinges">
        <div class="group relative">
          <div
            class="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md transition-all duration-500"
          >
            <img src="/images/shop/items/s1.jpg" alt="" />

            <div
              class="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 transition-all duration-500"
            >
              <a
                href="shop-cart.html"
                class="btn bg-slate-900 border-slate-900 text-white w-full rounded-md"
                >Add to Cart</a
              >
            </div>
          </div>

          <div
            class="mt-4 absolute -top-9 left-0 w-11/12 bg-red-600 px-4 py-1 text-white rounded-r-full text-sm"
          >
            <a
              href="shop-item-detail.html"
              class="hover:text-indigo-600 text-lg font-semibold"
              >Branded T-Shirt</a
            >
          </div>

          <div class="mt-4 text-xs">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </NuxtLink>
      <!--end content-->

      <!-- Commented for having reference -->
      <!-- <div class="group">
        <div
          class="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md transition-all duration-500"
        >
          <img src="/images/shop/items/s2.jpg" alt="" />

          <div
            class="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 transition-all duration-500"
          >
            <a
              href="shop-cart.html"
              class="btn bg-slate-900 border-slate-900 text-white w-full rounded-md"
              >Add to Cart</a
            >
          </div>

          <ul
            class="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 transition-all duration-500"
          >
            <li>
              <a
                href="javascript:void(0)"
                class="btn btn-icon btn-sm rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"
                ><i class="mdi mdi-heart"></i
              ></a>
            </li>
            <li class="mt-1">
              <a
                href="shop-item-detail.html"
                class="btn btn-icon btn-sm rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"
                ><i class="mdi mdi-eye-outline"></i
              ></a>
            </li>
            <li class="mt-1">
              <a
                href="javascript:void(0)"
                class="btn btn-icon btn-sm rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"
                ><i class="mdi mdi-bookmark-outline"></i
              ></a>
            </li>
          </ul>

          <ul class="list-none absolute top-[10px] start-4">
            <li>
              <a
                href="javascript:void(0)"
                class="bg-green-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5"
                >Featured</a
              >
            </li>
          </ul>
        </div>

        <div class="mt-4">
          <a
            href="shop-item-detail.html"
            class="hover:text-indigo-600 text-lg font-semibold"
            >Shopping Bag</a
          >
          <div class="flex justify-between items-center mt-1">
            <p class="text-green-600">
              $16.00 <del class="text-red-600">$21.00</del>
            </p>
            <ul class="font-medium text-amber-400 list-none">
              <li class="inline"><i class="mdi mdi-star"></i></li>
              <li class="inline"><i class="mdi mdi-star"></i></li>
              <li class="inline"><i class="mdi mdi-star"></i></li>
              <li class="inline"><i class="mdi mdi-star"></i></li>
              <li class="inline"><i class="mdi mdi-star"></i></li>
            </ul>
          </div>
        </div>
      </div> -->
      <!--end content-->
    </div>
    <!--end grid-->
  </div>
  <!--end container-->
</template>

<script setup lang="ts">
definePageMeta({
  layout: "category",
});

const router = useRouter();
const isProductDetail = inject("isProductDetail") as Ref<boolean>;

function gotoProductDetail() {
  isProductDetail.value = true;
  router.push("/product/soft-close-hinges/DV90");
}
</script>

<template>
  <section class="relative container">
    <div
      class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 mt-8 gap-[30px]"
    >
      <button @click.prevent="gotoProductDetail">
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
            class="mt-4 absolute -top-9 left-0 w-11/12 bg-red-600 px-4 py-1 text-white rounded-r-full text-sm md:text-start"
          >
            <a
              href="shop-item-detail.html"
              class="hover:text-indigo-600 text-xs font-semibold"
              >Branded T-Shirt</a
            >
          </div>
        </div>
      </button>
    </div>
  </section>
</template>

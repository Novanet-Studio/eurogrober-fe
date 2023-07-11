<script setup lang="ts">
import {
  PhPhone,
  PhDeviceMobile,
  PhEnvelope,
  PhMapPin,
} from "@phosphor-icons/vue";

const info = [
  {
    icon: PhPhone,
    title: "Phone",
    content: "+1 7866201586",
  },
  {
    icon: PhDeviceMobile,
    title: "Phone alt",
    content: "+1 7863071513",
  },
  {
    icon: PhEnvelope,
    title: "Email",
    content: "eurogrober@gmail.com",
  },
  {
    icon: PhMapPin,
    title: "Location",
    content: "8900 NW 35th Lane Suite 140 Doral FL. 33172",
  },
];
</script>

<template>
  <section class="relative md:py-24 py-16 overflow-hidden">
    <div class="container relative md:mt-24 mt-16">
      <h3
        class="mb-10 text-2xl leading-normal font-extrabold text-color-4 text-center"
      >
        Company information
      </h3>
      <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
        <div class="text-center px-6" v-for="(item, i) in info" :key="i">
          <div
            class="w-20 h-20 bg-color-1/5 text-color-1 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto"
          >
            <component :is="item.icon" />
          </div>

          <div class="content mt-7">
            <h5 class="text-xl font-semibold">{{ item.title }}</h5>
            <p class="text-slate-400 mt-3">
              {{ item.content }}
            </p>

            <!-- <div class="mt-5">
              <a href="tel:+152534-468-854" class="text-color-1 font-medium"
                >+152 534-468-854</a
              >
            </div> -->
          </div>
        </div>

        <!-- <div class="text-center px-6">
          <div
            class="w-20 h-20 bg-color-1/5 text-color-1 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto"
          >
            <ph-device-mobile />
          </div>

          <div class="content mt-7">
            <h5 class="text-xl font-semibold">Phone</h5>
            <p class="text-slate-400 mt-3">
              Start working with Techwind that can provide everything
            </p>

            <div class="mt-5">
              <a href="tel:+152534-468-854" class="text-color-1 font-medium"
                >+152 534-468-854</a
              >
            </div>
          </div>
        </div> -->

        <!-- <div class="text-center px-6">
          <div
            class="w-20 h-20 bg-color-1/5 text-color-1 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto"
          >
            <ph-envelope />
          </div>

          <div class="content mt-7">
            <h5 class="text-xl font-semibold">Email</h5>
            <p class="text-slate-400 mt-3">
              Start working with Techwind that can provide everything
            </p>

            <div class="mt-5">
              <a
                href="mailto:contact@example.com"
                class="text-color-1 font-medium"
                >contact@example.com</a
              >
            </div>
          </div>
        </div> -->

        <!-- <div class="text-center px-6">
          <div
            class="w-20 h-20 bg-color-1/5 text-color-1 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto"
          >
            <ph-map-pin />
          </div>

          <div class="content mt-7">
            <h5 class="text-xl font-semibold">Location</h5>
            <p class="text-slate-400 mt-3">
              C/54 Northwest Freeway, Suite 558, <br />Houston, USA 485
            </p>

            <div class="mt-5">
              <a
                href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                class="lightbox text-color-1 font-medium"
                data-type="iframe"
                data-group="iframe"
                data-width="1024px"
                data-height="576px"
                >View on Google map</a
              >
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

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
  <section class="relative md:py-12 py-16 overflow-hidden bg-color-5/25 lg:py-8 lg:pb-16">
    <div class="container relative md:mt-0">
      <h3
        class="mb-10 text-2xl leading-normal font-extrabold text-color-4 text-center md:text-3xl lg:mb-16 lg:text-[46px]">
        Contact Us
      </h3>
      <div class="grid grid-cols-1 mx-6 md:grid-cols-2 gap-[30px] lg:grid-cols-2 place-items-start">
        <div class="flex items-center text-start" v-for="(item, i) in info" :key="i">
          <div
            class="w-10 h-10 bg-color-1 text-white rounded-full text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
            <component :is="item.icon" class="text-xl" />
          </div>
          <p class="text-color-4 text-sm ml-4">
            {{ item.content }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

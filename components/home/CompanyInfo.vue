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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

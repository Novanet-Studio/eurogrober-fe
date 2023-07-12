<script setup lang="ts">
import { PhHandshake, PhHammer, PhHandHeart } from "@phosphor-icons/vue";

const companyText = [
  {
    title: "We Are Committed",
    content:
      "To selling quality and luxury products for comfy, beautiful kitchens. From distributors like you in search of new materials to carpenters looking for high-quality hardware or kitchen manufacturers with a dream project underway we have what it takes!",
    icon: PhHandshake,
  },
  {
    title: "We Work Hard",
    content:
      "On making the best choices possible when choosing our suppliers as well - from designers and architects that want great pieces at an affordable price all the way down to individuals who just need something more than they currently own. Check out some of these amazing finds below before heading over!",
    icon: PhHammer,
  },
  {
    title: "We Love American Kitchens",
    content:
      "And to share everything kitchen-related.We look for long-term relationships with everyone related to making luxury kitchens in Florida, especially if you're from the Sunshine State! doing business.",
    icon: PhHandHeart,
  },
];
</script>

<template>
  <div class="container relative md:mt-24 mt-16">
    <header-title title="Company" subtitle="Kitchen hardware at hand!" />
    <div class="grid grid-cols-1 mt-4 gap-[30px] md:grid-cols-3 lg:grid-cols-3">
      <div
        class="group relative lg:px-10 mt-4 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center"
        v-for="(item, index) in companyText"
        :key="index"
      >
        <div class="flex justify-center text-color-4">
          <component :is="item.icon" v-bind="{ weight: 'fill', size: 58 }" />
        </div>
        <div class="mt-6">
          <h3
            class="text-xl leading-7 font-extrabold text-[#E92946] transition-all duration-500 ease-in-out hover:text-red-800"
          >
            {{ item.title }}
          </h3>
          <p
            class="text-color-4 text-center text-xs transition-all duration-500 ease-in-out mt-3"
          >
            {{ item.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

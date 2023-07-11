<script setup lang="ts">
const active = ref("Soft-close hinges");

const categories = [
  "Gola profiles & accessories",
  "Soft-close hinges",
  "Kitchen sinks",
  "Hydraulic dampers for kitchen",
  "Full extension slides & drawers",
  "Toe kick panel and adjustable legs",
  "Kitchen faucets",
  "Supports & accessories",
];
</script>

<template>
  <div class="grid grid-cols-2 gap-[2px] mb-16">
    <button
      class="text-[10px] p-3 text-center transition ease-in"
      :class="
        active === category
          ? 'bg-color-4 text-white font-extrabold'
          : 'bg-color-5 text-color-4'
      "
      v-for="(category, i) in categories"
      :key="i"
      @click="active = category"
    >
      {{ category }}
    </button>
  </div>
</template>

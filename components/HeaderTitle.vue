<script setup lang="ts">
interface Props {
  title: string;
  subtitle: string;
}

defineProps<Props>();
</script>

<template>
  <div class="grid grid-cols-1 pb-8 text-center">
    <h3
      class="text-2xl leading-normal font-extrabold text-color-4 md:text-3xl md:leading-normal"
    >
      {{ title }}
    </h3>

    <p
      class="text-color-4 max-w-xl mx-auto pb-2 relative after:content-[''] after:w-[83px] after:h-[2px] after:bg-[#E41938] after:absolute after:left-0 after:right-0 after:bottom-0 after:mx-auto lg:text-xl"
    >
      {{ subtitle }}
    </p>
  </div>
</template>

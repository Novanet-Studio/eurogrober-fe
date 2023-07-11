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
      class="md:text-3xl md:leading-normal text-2xl leading-normal font-bold text-[#58595B]"
    >
      {{ title }}
    </h3>

    <p
      class="text-[#58595B] max-w-xl mx-auto pb-2 relative after:content-[''] after:w-[83px] after:h-[2px] after:bg-[#E41938] after:absolute after:left-0 after:right-0 after:bottom-0 after:mx-auto"
    >
      {{ subtitle }}
    </p>
  </div>
</template>

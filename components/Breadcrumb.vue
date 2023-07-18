<script setup lang="ts">
type Item = {
  text: string;
  url?: string; // Url indicate the item can be clicked too
};

interface Props {
  items: Item[];
}

defineProps<Props>();
</script>

<template>
  <section class="relative table w-full mt-24 bg-[#D9D9D9] dark:bg-slate-800">
    <div class="container relative">
      <div class="relative py-2 lg:py-4">
        <ul class="breadcrumb tracking-[0.5px] mb-0 inline-block">
          <li
            class="inline text-[12px] lg:text-base text-color-4 duration-500 ease-in-out hover:text-color-4"
            v-for="(item, i) in items"
            :class="[items.length - 1 === i && 'font-extrabold']"
            :key="i"
          >
            <span class="inline px-1 text-color-4 !font-normal" v-if="i !== 0">/</span>

            <NuxtLink :to="item.url">{{ item.text }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

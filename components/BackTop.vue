<script setup lang="ts">
import { PhArrowUp } from "@phosphor-icons/vue";

let showButton = ref(false);
let buttonRef = ref(null);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function scrollFunction() {
  if (buttonRef?.value !== null) {
    showButton.value =
      document.body.scrollTop > 500 || document.documentElement.scrollTop > 500;
  }
}

onMounted(() => {
  window.addEventListener("scroll", scrollFunction, false);

  return () => {
    window.removeEventListener("scroll", scrollFunction);
  };
});
</script>

<template>
  <Transition>
    <button
      @click.prevent="backToTop"
      ref="buttonRef"
      class="back-to-top fixed text-lg rounded-full z-10 bottom-5 end-5 h-9 w-9 flex justify-center items-center bg-color-1 text-white leading-9"
      :class="showButton ? 'block' : 'hidden'"
    >
      <PhArrowUp />
    </button>
  </Transition>
</template>

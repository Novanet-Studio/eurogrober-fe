<script setup lang="ts">
const isOpen = inject("isOpen") as Ref<boolean>;

const ballPosition = ref();
const active = reactive({
  id: "",
  clientX: 0,
  clientY: 0,
});

const handleActive = (el) => {
  active.id = el.target.id;
  active.clientX = el.clientX;
  active.clientY = el.clientY;

  ballPosition.value = el.target.offsetParent.offsetLeft - 10;
};
</script>

<template>
  <div id="navigation" :class="isOpen ? 'block' : 'hidden'">
    <ul class="navigation-menu justify-end relative">
      <li
        :style="{
          '--left-pos': `${ballPosition}px`,
        }"
        class="w-28 rounded-full h-10 bg-color-1 block transition-all duration-200 ease-in mt-4 absolute -right-8 left-[var(--left-pos)]"
      ></li>
      <li>
        {{ active.id }}
      </li>
      <li>
        <nuxt-link
          id="company"
          to="/"
          class="sub-menu-item"
          :class="active.id === 'company' ? '!text-white' : '!text-color-4'"
          @click.prevent="handleActive"
          >Company</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          id="products"
          to="/"
          class="sub-menu-item"
          @click.prevent="handleActive"
          >Products</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          id="gallery"
          to="/"
          class="sub-menu-item"
          @click.prevent="handleActive"
          >Gallery</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          id="contact"
          to="/"
          class="sub-menu-item"
          @click.prevent="handleActive"
          >Contact</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>

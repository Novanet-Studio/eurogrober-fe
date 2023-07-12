<script setup lang="ts">
const isOpen = inject("isOpen") as Ref<boolean>;
</script>

<template>
  <div id="navigation" :class="isOpen ? 'block' : 'hidden'">
    <ul class="navigation-menu justify-end">
      <li><nuxt-link to="/" class="sub-menu-item">Company</nuxt-link></li>
      <li><nuxt-link to="/" class="sub-menu-item">Products</nuxt-link></li>
      <li><nuxt-link to="/" class="sub-menu-item">Gallery</nuxt-link></li>
      <li><nuxt-link to="/" class="sub-menu-item">Contact</nuxt-link></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false);
provide("isOpen", isOpen);
</script>

<template>
  <nav id="topnav" class="defaultscroll is-sticky bg-white dark:bg-slate-900 py-6">
    <div class="container relative h-full">
      <AppLogo />
      <AppMenuBurger />
      <AppNavItems />
    </div>
  </nav>
</template>

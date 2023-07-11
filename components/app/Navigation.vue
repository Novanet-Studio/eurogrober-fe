<script setup lang="ts">
const isOpen = ref(false);
provide("isOpen", isOpen);
</script>

<template>
  <nav id="topnav" class="defaultscroll is-sticky bg-white dark:bg-slate-900">
    <div class="container relative">
      <AppLogo />
      <AppMenuBurger />
      <AppNavItems />
    </div>
  </nav>
</template>

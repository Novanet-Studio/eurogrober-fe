<template>
  <ClientOnly class="relative scroll-smooth">
    <AppNavigation />
    <slot />
    <AppFooter />
    <BackTop />
  </ClientOnly>
</template>

<template>
  <ClientOnly class="relative scroll-smooth">
    <AppNavigation />
    <slot />
    <AppFooter />
    <Switcher />
    <BackTop />
  </ClientOnly>
</template>

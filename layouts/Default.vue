<template>
  <ClientOnly>
    <AppNavigation />
    <slot />
    <AppFooter />
    <Switcher />
    <BackTop />
  </ClientOnly>
</template>

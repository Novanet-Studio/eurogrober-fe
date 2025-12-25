<script setup lang="ts">
const isOpen = inject("isOpen") as Ref<boolean>;

function toggleMenu() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <div class="menu-extras">
    <div class="menu-item">
      <a
        class="navbar-toggle"
        :class="isOpen ? 'open' : ''"
        id="isToggle"
        @click.prevent="toggleMenu"
      >
        <div class="lines">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </a>
    </div>
  </div>
</template>

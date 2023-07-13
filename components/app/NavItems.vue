<script setup lang="ts">
const isOpen = inject("isOpen") as Ref<boolean>;

const root = ref();
// const indicator = ref();

const active = ref();
const items = [
  {
    name: "Company",
    to: "/",
  },
  {
    name: "Products",
    to: "#products",
  },
  {
    name: "Gallery",
    to: "#gallery",
  },
  {
    name: "Contact",
    to: "#contact",
  },
];

const $items = ref<any>([]);

const styles = reactive({
  x: 0,
  y: 0,
  width: 0,
  height: 0,
});

const elementsRef = (el: any) => $items.value.push(el);

function animate() {
  const menuOffset = root.value.getBoundingClientRect();
  const activeItem = $items.value[active.value];
  const { width, height, top, left } = activeItem.$el.getBoundingClientRect();

  const settings = {
    // x: left - menuOffset.x,
    // y: top - menuOffset.y,
    x: left - (menuOffset.x + 10),
    y: top - (menuOffset.y - 5),
    width,
    height,
  };

  console.log(settings);

  Object.assign(styles, settings);
}

watch(active, animate);
</script>

<template>
  <div id="navigation" :class="isOpen ? 'block' : 'hidden'">
    <ul class="navigation-menu justify-end relative" ref="root">
      <li
        :style="{
          '--el-left': `${styles.x}px`,
          '--el-top': `${styles.y}px`,
          '--el-width': `${styles.width}px`,
          '--el-height': `${styles.height}px`,
        }"
        class="w-[var(--el-width)] rounded-full h-8 bg-color-1 block transition-all duration-200 ease-in mt-4 absolute top-[var(--el-top)] left-[var(--el-left)]"
      ></li>
      <li
        v-for="(link, index) in items"
        :key="index"
        :class="active === index ? 'active' : '!text-color-4'"
      >
        <nuxt-link
          :to="link.to"
          class="sub-menu-item"
          :ref="elementsRef"
          @click.prevent="active = index"
          >{{ link.name }}</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>

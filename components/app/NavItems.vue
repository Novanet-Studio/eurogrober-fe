<script setup lang="ts">
const isOpen = inject("isOpen") as Ref<boolean>;

const root = ref();
const route = useRoute();
const lock = ref(false);

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
  x: 2000, // Show from right side
  y: 0,
  width: 120,
  height: 0,
});

const INDICATOR_ANIMATION_DELAY = 500;

const elementsRef = (el: any) => $items.value.push(el);

function animate() {
  const menuOffset = root.value.getBoundingClientRect();
  const activeItem = $items.value[active.value];
  const { width, height, top, left } = activeItem.$el.getBoundingClientRect();

  const settings = {
    x: left - (menuOffset.x + 10),
    y: top - (menuOffset.y - 5),
    width,
    height,
  };

  Object.assign(styles, settings);
}

function handleScroll() {
  const COMPANY = 617;
  const PRODUCTS = 1169;
  const GALLERY = 2655;
  const CONTACT = 4091;

  if (lock.value) return;

  if (window.scrollY < COMPANY || window.scrollY < PRODUCTS) {
    active.value = 0;
  } else if (window.scrollY <= GALLERY) {
    active.value = 1;
  } else if (window.scrollY < CONTACT) {
    active.value = 2;
  } else if (window.scrollY > GALLERY) {
    active.value = 3;
  }
}

watch(active, animate);

watchEffect(() => {
  if (route.path.includes('category') || route.path.includes('product')) {
    lock.value = true;
    setTimeout(() => {
      active.value = 1;
    }, INDICATOR_ANIMATION_DELAY);

    return;
  }

  lock.value = false;
})

onMounted(() => {  
  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
});

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

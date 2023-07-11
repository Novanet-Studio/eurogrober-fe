<script setup lang="ts">
const isOpen = inject("isOpen") as Ref<boolean>;
</script>

<template>
  <div id="navigation" :class="isOpen ? 'block' : 'hidden'">
    <ul class="navigation-menu">
      <li><nuxt-link to="/" class="sub-menu-item">Company</nuxt-link></li>
      <li><nuxt-link to="/" class="sub-menu-item">Products</nuxt-link></li>
      <li><nuxt-link to="/" class="sub-menu-item">Gallery</nuxt-link></li>
      <li><nuxt-link to="/" class="sub-menu-item">Contact</nuxt-link></li>

      <!-- <li class="has-submenu parent-menu-item">
        <a href="javascript:void(0)">Shop</a><span class="menu-arrow"></span>
        <ul class="submenu">
          <li>
            <a href="shop-grid.html" class="sub-menu-item">Product Grid</a>
          </li>
          <li>
            <a href="shop-grid-two.html" class="sub-menu-item"
              >Product Grid Two</a
            >
          </li>
          <li>
            <a href="shop-item-detail.html" class="sub-menu-item"
              >Product Detail</a
            >
          </li>
          <li>
            <a href="shop-cart.html" class="sub-menu-item">Shop Cart</a>
          </li>
          <li>
            <a href="shop-checkout.html" class="sub-menu-item">Checkout</a>
          </li>
          <li>
            <a href="shop-account.html" class="sub-menu-item">My Account</a>
          </li>
        </ul>
      </li> -->

      <!-- <li class="has-submenu parent-menu-item">
        <a href="javascript:void(0)">Pages</a><span class="menu-arrow"></span>
        <ul class="submenu">
          <li><a href="auth-login.html" class="sub-menu-item">Login</a></li>
          <li>
            <a href="auth-signup.html" class="sub-menu-item">Signup</a>
          </li>
          <li>
            <a href="auth-re-password.html" class="sub-menu-item"
              >Reset Password</a
            >
          </li>
          <li>
            <a href="auth-lock-screen.html" class="sub-menu-item"
              >Lock Screen</a
            >
          </li>
          <li>
            <a href="page-comingsoon.html" class="sub-menu-item">Coming Soon</a>
          </li>
          <li>
            <a href="page-maintenance.html" class="sub-menu-item"
              >Maintenance</a
            >
          </li>
          <li><a href="page-error.html" class="sub-menu-item">Error</a></li>
          <li>
            <a href="page-thankyou.html" class="sub-menu-item">Thank you</a>
          </li>
        </ul>
      </li> -->

      <!-- <li class="has-submenu parent-menu-item">
        <a href="javascript:void(0)">Blog</a><span class="menu-arrow"></span>
        <ul class="submenu">
          <li><a href="blog.html" class="sub-menu-item">Blogs</a></li>
          <li>
            <a href="blog-sidebar.html" class="sub-menu-item"
              >Blogs & Sidebar</a
            >
          </li>
          <li>
            <a href="blog-detail.html" class="sub-menu-item">Blog Detail</a>
          </li>
        </ul>
      </li> -->

      <!-- <li><a href="contact-two.html" class="sub-menu-item">Contact</a></li> -->
    </ul>
    <!--end navigation menu-->
  </div>
</template>

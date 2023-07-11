<template>
  <nav id="topnav" class="defaultscroll is-sticky bg-white dark:bg-slate-900">
    <div class="container relative">
      <!-- Logo container-->
      <a class="logo" href="index.html">
        <img
          src="/images/logo-dark.png"
          class="inline-block dark:hidden"
          alt=""
        />
        <img
          src="/images/logo-light.png"
          class="hidden dark:inline-block"
          alt=""
        />
      </a>

      <!-- End Logo container-->
      <div class="menu-extras">
        <div class="menu-item">
          <!-- Mobile menu toggle-->
          <a class="navbar-toggle" id="isToggle" onclick="toggleMenu()">
            <div class="lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
          <!-- End mobile menu toggle-->
        </div>
      </div>

      <div id="navigation">
        <!-- Navigation Menu-->
        <ul class="navigation-menu">
          <li><a href="index-shop.html" class="sub-menu-item">Home</a></li>

          <li><a href="shop-about.html" class="sub-menu-item">About Us</a></li>

          <li class="has-submenu parent-menu-item">
            <a href="javascript:void(0)">Shop</a
            ><span class="menu-arrow"></span>
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
          </li>

          <li class="has-submenu parent-menu-item">
            <a href="javascript:void(0)">Pages</a
            ><span class="menu-arrow"></span>
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
                <a href="page-comingsoon.html" class="sub-menu-item"
                  >Coming Soon</a
                >
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
          </li>

          <li class="has-submenu parent-menu-item">
            <a href="javascript:void(0)">Blog</a
            ><span class="menu-arrow"></span>
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
          </li>

          <li><a href="contact-two.html" class="sub-menu-item">Contact</a></li>
        </ul>
        <!--end navigation menu-->
      </div>
      <!--end navigation-->
    </div>
    <!--end container-->
  </nav>
</template>

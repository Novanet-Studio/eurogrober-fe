<template>
  <!-- Footer Start -->
  <footer
    class="footer bg-dark-footer relative text-gray-200 dark:text-gray-200"
  >
    <div class="py-[30px] px-0 border-t border-slate-800">
      <div class="container relative text-center">
        <div class="grid md:grid-cols-2 items-center">
          <div class="md:text-start text-center">
            <p class="mb-0">
              ©
              {{ new Date().getFullYear() }}
              Eurogrober
              <i class="mdi mdi-heart text-red-600"></i> by
              <a
                href="https://shreethemes.in/"
                target="_blank"
                class="text-reset"
                >Novanet</a
              >.
            </p>
          </div>

          <ul class="list-none md:text-end text-center mt-6 md:mt-0">
            <li class="inline">
              <a href=""
                ><img
                  src="/images/payments/american-ex.png"
                  class="max-h-6 inline"
                  title="American Express"
                  alt=""
              /></a>
            </li>
            <li class="inline">
              <a href=""
                ><img
                  src="/images/payments/discover.png"
                  class="max-h-6 inline"
                  title="Discover"
                  alt=""
              /></a>
            </li>
            <li class="inline">
              <a href=""
                ><img
                  src="/images/payments/master-card.png"
                  class="max-h-6 inline"
                  title="Master Card"
                  alt=""
              /></a>
            </li>
            <li class="inline">
              <a href=""
                ><img
                  src="/images/payments/paypal.png"
                  class="max-h-6 inline"
                  title="Paypal"
                  alt=""
              /></a>
            </li>
            <li class="inline">
              <a href=""
                ><img
                  src="/images/payments/visa.png"
                  class="max-h-6 inline"
                  title="Visa"
                  alt=""
              /></a>
            </li>
          </ul>
        </div>
        <!--end grid-->
      </div>
      <!--end container-->
    </div>
  </footer>
  <!--end footer-->
  <!-- Footer End -->
</template>

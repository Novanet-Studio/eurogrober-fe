<template>
  <section class="relative md:py-24 py-16 overflow-hidden">
    <div class="container relative">
      <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
        <div class="lg:col-span-5 md:col-span-6">
          <div class="lg:me-8">
            <div class="relative">
              <img src="assets/images/feature.png" alt="" />
              <div
                class="overflow-hidden absolute h-[512px] w-[512px] bg-indigo-600/5 top-1/4 start-0 end-0 align-middle -z-1 rounded-full"
              ></div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-7 md:col-span-6">
          <div class="lg:ms-5">
            <div
              class="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 p-6"
            >
              <h3 class="mb-6 text-2xl leading-normal font-medium">
                Get in touch !
              </h3>

              <form
                method="post"
                name="myForm"
                id="myForm"
                onsubmit="return validateForm()"
              >
                <p class="mb-0" id="error-msg"></p>
                <div id="simple-msg"></div>
                <div class="grid lg:grid-cols-12 lg:gap-6">
                  <div class="lg:col-span-6 mb-5">
                    <div class="text-start">
                      <label for="name" class="font-semibold">Your Name:</label>
                      <div class="form-icon relative mt-2">
                        <i
                          data-feather="user"
                          class="w-4 h-4 absolute top-3 start-4"
                        ></i>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          class="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                          placeholder="Name :"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="lg:col-span-6 mb-5">
                    <div class="text-start">
                      <label for="email" class="font-semibold"
                        >Your Email:</label
                      >
                      <div class="form-icon relative mt-2">
                        <i
                          data-feather="mail"
                          class="w-4 h-4 absolute top-3 start-4"
                        ></i>
                        <input
                          name="email"
                          id="email"
                          type="email"
                          class="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                          placeholder="Email :"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-1">
                  <div class="mb-5">
                    <div class="text-start">
                      <label for="subject" class="font-semibold"
                        >Your Question:</label
                      >
                      <div class="form-icon relative mt-2">
                        <i
                          data-feather="book"
                          class="w-4 h-4 absolute top-3 start-4"
                        ></i>
                        <input
                          name="subject"
                          id="subject"
                          class="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                          placeholder="Subject :"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="mb-5">
                    <div class="text-start">
                      <label for="comments" class="font-semibold"
                        >Your Comment:</label
                      >
                      <div class="form-icon relative mt-2">
                        <i
                          data-feather="message-circle"
                          class="w-4 h-4 absolute top-3 start-4"
                        ></i>
                        <textarea
                          name="comments"
                          id="comments"
                          class="form-input ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                          placeholder="Message :"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  id="submit"
                  name="send"
                  class="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md justify-center flex items-center"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--end container-->

    <div class="container relative md:mt-24 mt-16">
      <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
        <div class="text-center px-6">
          <div
            class="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto"
          >
            <i class="uil uil-question-circle"></i>
          </div>

          <div class="content mt-7">
            <h5 class="text-xl font-semibold">Phone</h5>
            <p class="text-slate-400 mt-3">
              Start working with Techwind that can provide everything
            </p>

            <div class="mt-5">
              <a href="tel:+152534-468-854" class="text-indigo-600 font-medium"
                >+152 534-468-854</a
              >
            </div>
          </div>
        </div>

        <div class="text-center px-6">
          <div
            class="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto"
          >
            <i class="uil uil-file-bookmark-alt"></i>
          </div>

          <div class="content mt-7">
            <h5 class="text-xl font-semibold">Email</h5>
            <p class="text-slate-400 mt-3">
              Start working with Techwind that can provide everything
            </p>

            <div class="mt-5">
              <a
                href="mailto:contact@example.com"
                class="text-indigo-600 font-medium"
                >contact@example.com</a
              >
            </div>
          </div>
        </div>

        <div class="text-center px-6">
          <div
            class="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto"
          >
            <i class="uil uil-cog"></i>
          </div>

          <div class="content mt-7">
            <h5 class="text-xl font-semibold">Location</h5>
            <p class="text-slate-400 mt-3">
              C/54 Northwest Freeway, Suite 558, <br />Houston, USA 485
            </p>

            <div class="mt-5">
              <a
                href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                class="lightbox text-indigo-600 font-medium"
                data-type="iframe"
                data-group="iframe"
                data-width="1024px"
                data-height="576px"
                >View on Google map</a
              >
            </div>
          </div>
        </div>
      </div>
      <!--end grid-->
    </div>
    <!--end container-->
  </section>
</template>

<script setup lang="ts">
import {
  PhUser,
  PhEnvelope,
  PhBook,
  PhChatCircleText,
  PhInstagramLogo as PhInstagram,
  PhFacebookLogo as PHFacebook,
  PhWhatsappLogo as PhWhatsapp,
} from "@phosphor-icons/vue";

const icons = [
  {
    icon: PhInstagram,
    link: "",
  },
  {
    icon: PHFacebook,
    link: "",
  },
  {
    icon: PhWhatsapp,
    link: "",
  },
];
</script>

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
              <h3
                class="mb-6 text-2xl leading-normal font-extrabold text-color-4 text-center"
              >
                Contact
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
                      <label for="name" class="font-semibold text-color-4"
                        >Your Name:</label
                      >
                      <div class="form-icon relative mt-2">
                        <ph-user class="w-4 h-4 absolute top-3 start-4" />
                        <input
                          name="name"
                          id="name"
                          type="text"
                          class="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-color-2 dark:border-gray-800 dark:focus:border-color-2 focus:ring-0"
                          placeholder="Name :"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="lg:col-span-6 mb-5">
                    <div class="text-start">
                      <label for="email" class="font-semibold text-color-4"
                        >Your Email:</label
                      >
                      <div class="form-icon relative mt-2">
                        <ph-envelope class="w-4 h-4 absolute top-3 start-4" />

                        <input
                          name="email"
                          id="email"
                          type="email"
                          class="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-color-2 dark:border-gray-800 dark:focus:border-color-2 focus:ring-0"
                          placeholder="Email :"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-1">
                  <div class="mb-5">
                    <div class="text-start">
                      <label for="subject" class="font-semibold text-color-4"
                        >Your Question:</label
                      >
                      <div class="form-icon relative mt-2">
                        <ph-book class="w-4 h-4 absolute top-3 start-4" />
                        <input
                          name="subject"
                          id="subject"
                          class="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-color-2 dark:border-gray-800 dark:focus:border-color-2 focus:ring-0"
                          placeholder="Subject :"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="mb-5">
                    <div class="text-start">
                      <label for="comments" class="font-semibold text-color-4"
                        >Your Comment:</label
                      >
                      <div class="form-icon relative mt-2">
                        <ph-chat-circle-text
                          class="w-4 h-4 absolute top-3 start-4"
                        />

                        <textarea
                          name="comments"
                          id="comments"
                          class="form-input ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-color-2 dark:border-gray-800 dark:focus:border-color-2 focus:ring-0"
                          placeholder="Message :"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex justify-center">
                  <button
                    type="submit"
                    id="submit"
                    name="send"
                    class="btn bg-color-1 hover:bg-orange-600 border-color-2 hover:border-orange-600 text-white rounded-full text-sm justify-center flex items-center"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center gap-6">
        <a
          class="w-9 h-9 bg-color-1 rounded-full text-white flex justify-center items-center"
          v-for="(item, i) in icons"
          :key="i"
          :href="item.link"
        >
          <component :is="item.icon" v-bind="{ weight: 'light', size: 16 }" />
        </a>
      </div>
    </div>
  </section>
</template>

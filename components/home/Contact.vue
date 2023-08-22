<script setup lang="ts">
import * as yup from 'yup';
import { useForm } from 'vee-validate';
import {
  PhUser,
  PhEnvelope,
  PhChatCircleText,
  PhPhone,
  PhInstagramLogo as PhInstagram,
  PhFacebookLogo as PHFacebook,
  PhWhatsappLogo as PhWhatsapp,
} from "@phosphor-icons/vue";

type Form = {
  name: string;
  surname: string;
  phone: string;
  email: string;
  message: string;
};

// TODO: improve regex for phone
const schema = yup.object({
  name: yup.string().required('Este campo es requerido'),
  surname: yup.string().required('Este campo es requerido'),
  phone: yup.string().required('Este campo es requerido'),
  email: yup.string().email().required('Este campo es requerido'),
  message: yup.string().required('Este campo es requerido'),
});

const {
  useFieldModel,
  errors: _,
  handleSubmit,
} = useForm<Form>({
  validationSchema: schema,
});

const [name, surname, phone, email, message] = useFieldModel([
  'name',
  'surname',
  'phone',
  'email',
  'message',
]);

const encode = (data: any) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');

const icons = [
  {
    icon: PhInstagram,
    link: "https://www.instagram.com/eurogrober.usa/",
  },
  {
    icon: PHFacebook,
    link: "https://www.facebook.com/eurogroberusa/",
  },
  {
    icon: PhWhatsapp,
    link: "https://wa.me/message/YNQNLEKYUXNIH1",
  },
];

const onSubmit = handleSubmit(async (data) => {
  try {
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact-form',
        ...data,
      }),
    });
  } catch (error: any) {
    console.log(
      'Hubo un error al intentar enviar el formulario: ',
      error.message
    );
  }
});
</script>

<template>
  <section id="contact" class="relative md:py-24 py-16 pt-2 pb-0 overflow-hidden bg-[#D9D9D933] lg:py-16">
    <div class="container relative">
      <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
        <div class="md:col-span-12">
          <div class="lg:ms-5">
            <div class="dark:bg-slate-900 rounded-md dark:shadow-gray-800 p-6">
              <h3 class="mb-6 text-2xl leading-normal font-extrabold text-color-4 text-center lg:text-[46px] lg:mb-8">
                Send us a message
              </h3>

              <form name="contact-form" method="post" data-netlify="true" data-netlify-honeypot="bot-field"
                action="/?success=true">
                <input type="hidden" name="form-name" value="contact-form" />
                <p class="mb-0" id="error-msg"></p>
                <div id="simple-msg"></div>
                <div class="grid md:grid-cols-6 md:gap-4 lg:grid-cols-12 lg:gap-6">
                  <div class="md:col-span-3 mb-5 lg:col-span-6">
                    <div class="text-start">
                      <label for="name" class="font-semibold text-color-4">Your Name:</label>
                      <div class="form-icon relative mt-2">
                        <ph-user class="w-4 h-4 absolute top-3 start-4" />
                        <input v-model="name" name="name" id="name" type="text"
                          class="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-color-2 dark:border-gray-800 dark:focus:border-color-2 focus:ring-0"
                          placeholder="Name :" />
                      </div>
                    </div>
                  </div>

                  <div class="md:col-span-3 mb-5 lg:col-span-6">
                    <div class="text-start">
                      <label for="name" class="font-semibold text-color-4">Your Surname:</label>
                      <div class="form-icon relative mt-2">
                        <ph-user class="w-4 h-4 absolute top-3 start-4" />
                        <input v-model="surname" name="surname" id="surname" type="text"
                          class="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-color-2 dark:border-gray-800 dark:focus:border-color-2 focus:ring-0"
                          placeholder="Surname :" />
                      </div>
                    </div>
                  </div>

                  <div class="md:col-span-3 mb-5 lg:col-span-6">
                    <div class="text-start">
                      <label for="subject" class="font-semibold text-color-4">Your Phone:</label>
                      <div class="form-icon relative mt-2">
                        <ph-phone class="w-4 h-4 absolute top-3 start-4" />
                        <input v-model="phone" name="phone" id="phone"
                          class="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-color-2 dark:border-gray-800 dark:focus:border-color-2 focus:ring-0"
                          placeholder="Phone :" />
                      </div>
                    </div>
                  </div>

                  <div class="md:col-span-3 mb-5 lg:col-span-6">
                    <div class="text-start">
                      <label for="email" class="font-semibold text-color-4">Your Email:</label>
                      <div class="form-icon relative mt-2">
                        <ph-envelope class="w-4 h-4 absolute top-3 start-4" />

                        <input v-model="email" name="email" id="email" type="email"
                          class="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-color-2 dark:border-gray-800 dark:focus:border-color-2 focus:ring-0"
                          placeholder="Email :" />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-1">


                  <div class="mb-5">
                    <div class="text-start">
                      <label for="message" class="font-semibold text-color-4">Your Comment:</label>
                      <div class="form-icon relative mt-2">
                        <ph-chat-circle-text class="w-4 h-4 absolute top-3 start-4" />

                        <textarea v-model="message" name="message" id="message"
                          class="form-input ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-color-2 dark:border-gray-800 dark:focus:border-color-2 focus:ring-0"
                          placeholder="Message :"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex justify-center">
                  <button type="button" id="submit"
                    class="btn bg-color-1 font-bold px-8 hover:bg-orange-600 border-color-2 hover:border-orange-600 text-white rounded-full text-sm justify-center flex items-center md:py-3 md:px-12"
                    @click="onSubmit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        <header-title title="" subtitle="You can also find us on:" class="mt-12" />
      </div>
      <div class="flex justify-center gap-10">
        <a class="w-9 h-9 bg-color-2 rounded-full text-white flex justify-center items-center md:w-[70px] md:h-[70px]"
          v-for="(item, i) in icons" :key="i" :href="item.link" target="_blank">
          <component :is="item.icon" v-bind="{ weight: 'regular' }" class="md:text-2xl" />
        </a>
      </div>

      <div class="mt-16 h-[1px] w-[320px] bg-color-5 mx-auto md:w-full" />
    </div>
  </section>
</template>

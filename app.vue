<script setup>
import { register } from 'swiper/element/bundle';
import { jsonld } from '~/assets/data/jsonld';

register();

useJsonLd(jsonld.organization);
</script>

<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>

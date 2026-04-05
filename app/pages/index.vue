<script setup>
import { metadata } from '~/assets/data/metadata';
import { jsonld } from '~/assets/data/jsonld';

useSeoMeta(metadata.home);
useJsonLd(jsonld.home);
</script>

<template>
  <div>
    <HomeBanner />
    <HomeCompanyDetails />
    <HomeProduct />
    <HomeImage />
    <HomeMoreInfo />
    <HomeGallery />
    <HomeTestimonials />
    <HomeContact />
    <HomeCompanyInfo />
    <notifications position="bottom right" class="mb-4 mr-4" />
  </div>
</template>

<template>
  <div class="hidden-sm-and-up">
    <mobile-menu></mobile-menu>
  </div>
  <v-app-bar flat class="d-none d-sm-block mt-n10">
    <v-app-bar-title>
      <router-link style="text-decoration: none; color: inherit;" to="/">
        <v-icon icon="mdi-circle-slice-6" to="/" />
        CoherenceStream
      </router-link>
    </v-app-bar-title>

    <product-menu class="d-none d-sm-block"></product-menu>
    <usecases-menu class="d-none d-sm-block"></usecases-menu>
    <developer-menu class="d-none d-sm-block"></developer-menu>
    <company-menu class="d-none d-sm-block"></company-menu>
    <support-menu class="d-none d-sm-block"></support-menu>
  </v-app-bar>
</template>

<script setup>
  import MobileMenu from '@/components/menu/mobile.vue'
  import ProductMenu from '@/components/menu/products.vue'
  import UsecasesMenu from '@/components/menu/usecases.vue'
  import DeveloperMenu from '@/components/menu/developers.vue'
  import CompanyMenu from '@/components/menu/company.vue'
  import SupportMenu from '@/components/menu/support.vue'

</script>

<style scoped>
</style>
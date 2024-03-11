<template>
  <v-container>
    <v-row
      justify="center"
      align="center"
      >
      <v-col
        sm="2"
        offset="1"
      >
        <v-sheet class="ma-1 pa-1">
          <product-menu></product-menu>
        </v-sheet>
      </v-col>
      <v-col
        sm="2"
      >
        <v-sheet class="ma-1 pa-1">
          <developer-menu></developer-menu>
        </v-sheet>
      </v-col>
      <v-col
        sm="2"
      >
        <v-sheet class="ma-1 pa-1">
          <company-menu></company-menu>
        </v-sheet>
      </v-col>
      <v-col
        sm="2"
      >
        <v-sheet class="ma-1 pa-1">
          <support-menu></support-menu>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import ProductMenu from '@/components/menu/products.vue'
  import DeveloperMenu from '@/components/menu/developers.vue'
  import CompanyMenu from '@/components/menu/company.vue'
  import SupportMenu from '@/components/menu/support.vue'
</script>

<style scoped>
.footer-message {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
}

p {
	margin: 10px;
}

</style>
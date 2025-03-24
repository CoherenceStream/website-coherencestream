<template>
  <v-card class="mx-auto" max-width="800">
    <v-card-title class="text-h4 font-weight-bold mb-4">
      Our Products
    </v-card-title>
    <v-card-text>
      <v-row class="mb-12">
        <v-col cols="12">
          <v-card class="mx-auto" max-width="800">
            <v-card-title class="text-h4 font-weight-bold mb-4">
              hC Newsletters
            </v-card-title>
            <v-card-text>
              <p class="text-h6 mb-4">
                Embed smart hC links that will populate healthCues toolkit.
              </p>
              <v-btn
                color="primary"
                size="large"
                variant="elevated"
                class="mr-4"
                @click="navigateTo('newsletter')"
              >
                Learn More
              </v-btn>
              <v-btn
                color="secondary"
                size="large"
                variant="outlined"
                @click="navigateTo('demo')"
              >
                Try Demo
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          v-for="(feature, index) in features"
          :key="index"
          cols="12"
          sm="6"
          md="3"
          class="pa-4"
        >
          <v-card
            class="feature-card"
            :class="feature.color"
            @click="navigateTo(feature.route)"
            :elevation="2"
          >
            <v-card-title class="text-h6 font-weight-bold mb-2">
              {{ feature.title }}
            </v-card-title>
            <v-card-text>
              <ul class="feature-list">
                <li v-for="item in feature.items" :key="item">
                  {{ item }}
                </li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="mt-12">
        <v-col cols="12">
          <v-card class="mx-auto" max-width="800">
            <v-card-title class="text-h4 font-weight-bold mb-4">
              healthCues Toolkit
            </v-card-title>
            <v-card-text>
              <p class="text-h6 mb-4">
                Our toolkit is continuously evolving with new AI agents and capabilities. 
                Join our community to contribute and shape the future of health intelligence.
              </p>
              <v-btn
                color="primary"
                size="large"
                variant="elevated"
                class="mr-4"
                @click="navigateTo('toolkit')"
              >
                Explore Toolkit
              </v-btn>
              <v-btn
                color="secondary"
                size="large"
                variant="outlined"
                @click="navigateTo('contribute')"
              >
                Contribute
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col 
          v-for="(product, index) in products" 
          :key="index" 
          cols="12" 
          sm="6" 
          md="3" 
          class="pa-2"
        >
          <v-img
            :src="product.image"
            :alt="product.name"
            height="200"
            cover
            class="product-image"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey-lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <div class="text-center mt-2">
            <h3 class="text-subtitle-1 font-weight-medium">{{ product.name }}</h3>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  products: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.product-image {
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.product-image:hover {
  transform: scale(1.05);
}
</style>
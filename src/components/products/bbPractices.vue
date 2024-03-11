<template>
  <v-container class="stream-space">
  <v-responsive class="d-flex align-top text-center fill-height">
    <v-row
      no-gutters
    >
      <v-col
        align-self="center"
      >
        <h1 class="text-h4 font-weight-bold mb-6">Web3.0 Health Practices</h1>
      </v-col>
    </v-row>
    <practice-creators></practice-creators>
  </v-responsive>
</v-container>
</template>

<script>
import PracticeCreators from '@/components/products/creators/practiceFeatures.vue'

  export default {
    components: {
      PracticeCreators
    },
    methods: {
    }
  }
</script>

<style scoped>
.stream-space {
  height: 100%;
}

.ecomm-type {
  border: 1px dashed red;
  height: 120px;
}

.getstarted {
  cursor: pointer;
}
</style>
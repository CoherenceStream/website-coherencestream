<template>
  <v-container class="stream-space">
  <v-responsive class="d-flex align-top text-center fill-height">
    <v-row
      no-gutters
    >
      <v-col
        align-self="center"
      >
        <h1 class="text-h4 font-weight-bold mb-6">always searching best health</h1>
      </v-col>
    </v-row>
    <health-creators></health-creators>
  </v-responsive>
</v-container>
</template>

<script>
import HealthCreators from '@/components/products/creators/healthFeatures.vue'

  export default {
    components: {
      HealthCreators
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
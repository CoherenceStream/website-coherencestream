<template>
  <v-container class="stream-space">
  <v-responsive class="d-flex align-top text-center fill-height">
    <v-row
      no-gutters
    >
      <v-col
        align-self="center"
      >
        <h1 class="text-h4 font-weight-bold mb-6">Holistic Health Practitioner V1</h1>
      </v-col>
    </v-row>
    <health-features></health-features>
  </v-responsive>
</v-container>
</template>

<script>
import HealthFeatures from '@/components/usecases/practitioner/healthFeatures.vue'

  export default {
    components: {
      HealthFeatures
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
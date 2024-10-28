<template>
  <v-container class="stream-space">
  <v-responsive class="d-flex align-top text-center fill-height">
    <v-row
      no-gutters
    >
      <v-col
        align-self="center"
      >
        <h1 class="text-h4 font-weight-bold mb-6">Rapamycin N=1</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-sheet>
        <v-card>
          Rapamycin show many encouraging properties for longevity but is under researched and funded.  A molecule found in nature there has been little interest from coporate institutions.  Small trails like Pearl gives foundation to build from.  Use LHA's we have the potential to scale participation.
        </v-card>
      </v-sheet>
    </v-row>
  </v-responsive>
</v-container>
</template>

<script>
import HealthCreators from '@/components/usecases/creators/creatorFeatures.vue'

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
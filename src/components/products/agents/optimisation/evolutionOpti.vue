<template>
  <v-container class="stream-space">
  <v-responsive class="d-flex align-top text-center fill-height">
    <v-row
      no-gutters
    >
      <v-col
        align-self="center"
      >
        <h1 class="text-h4 font-weight-bold">Optimisation</h1>
      </v-col>
    </v-row>
    <v-row
      no-gutters
    >
      <v-sheet class="ma-1 pa-1">
      </v-sheet>
    </v-row>
    <v-row        
        no-gutters
    >
      <v-col class="text-justify">
        <v-sheet class="pa-2 ma-6"             
          :elevation="24"
        >
          <v-card>
            A set of evolutionary algorithms are used to optimise outcomes.  This can be applied to an individual algorithm or a collection of e.g. timeseries agents to seek out the right balance of interventions.
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </v-responsive>
</v-container>
</template>

<script setup>
//
</script>

<style scoped>
.stream-space {
  height: 80%;
}
</style>
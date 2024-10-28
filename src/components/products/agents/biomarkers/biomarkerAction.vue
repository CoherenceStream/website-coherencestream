<template>
  <v-container class="stream-space">
  <v-responsive class="d-flex align-top text-center fill-height">
    <v-row
      no-gutters
    >
      <v-col
        align-self="center"
      >
        <h1 class="text-h4 font-weight-bold">Biomarkers</h1>
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
            Biomarker agents will interface with range of dianostic API's, home testing devices and make the data compatible with all sources of data.
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
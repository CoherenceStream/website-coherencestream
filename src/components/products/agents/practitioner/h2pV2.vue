<template>
  <v-container class="stream-space">
  <v-responsive class="d-flex align-top text-center fill-height">
    <v-row
      no-gutters
    >
      <v-col
        align-self="center"
      >
        <h1 class="text-h4 font-weight-bold">Longevity Practitioners</h1>
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
          <v-img
            contain
            height="600"
            src="@/assets/ask-beebee-chart1.png"
          />
        </v-sheet>
      </v-col>
    </v-row>
    <v-row        
        no-gutters
    >
      <v-col class="text-justify">
        <v-sheet class="pa-2 ma-6"             
          :elevation="24"
        >
          <v-img
            contain
            height="600"
            src="@/assets/bb-bentospace1.png"
          />
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
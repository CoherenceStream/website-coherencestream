<template>
  <v-container class="stream-space">
  <v-responsive class="d-flex align-top text-center fill-height">
    <v-row
      no-gutters
    >
      <v-col
        align-self="center"
      >
        <h1 class="text-h4 font-weight-bold mb-6">E-COMMERCE </h1>
      </v-col>
    </v-row>
    <v-row        
        no-gutters
    >
      <v-col class="text-justify">
        <h1 class="text-h6 font-weight-bold">Product insights & trends</h1>
        <v-sheet class="pa-2 ma-2">
          Plug in e-commerce store data and combine with other third party data to gain insights.
        </v-sheet>
      </v-col>
    </v-row>
    <v-row
      justify="center"
      align="center"
      no-gutters
      style="margin-bottom: 60px;"
    >
      <v-col
        cols="12"
        sm="4"
      >
        <v-sheet
          class="pa-12 ma-2 bg-secondary rounded-circle mx-auto mt-8 getstarted"
          max-width="256"
          elevation="12"
          height="128"
          width="100%"
        >
          Products
        </v-sheet>
      </v-col>
      <v-col
        cols="12"
        sm="4"
      >
        <v-sheet
          class="pa-12 ma-2 bg-secondary rounded-circle mx-auto mt-8 getstarted"
          max-width="256"
          elevation="12"
          height="128"
          width="100%"
        >
          Supplements
        </v-sheet>
      </v-col>
      <v-col
        cols="12"
        sm="4"
      >
        <v-sheet
          class="pa-12 ma-2 bg-secondary rounded-circle mx-auto mt-8 getstarted"
          max-width="256"
          elevation="12"
          height="128"
          width="100%"
        >
          Treatments/therapies
        </v-sheet>
      </v-col>
    </v-row>
    <v-row        
        no-gutters
    >
      <v-col class="text-justify">
        <h1 class="text-h6 font-weight-bold">Timeseries analysis</h1>
        <v-sheet class="pa-2 ma-2">
          Train an AI to get to know your products better.
        </v-sheet>
      </v-col>
    </v-row>
    <v-row        
      no-gutters
    >
      <v-col class="text-justify">
        <v-sheet class="pa-2 ma-2"             
          :elevation="24"
        >
          <v-img
            contain
            height="600"
            src="@/assets/bentobox-ds.png"
          />
        </v-sheet>
      </v-col>
    </v-row>
    <v-row        
        no-gutters
    >
      <v-col class="text-justify">
        <h1 class="text-h6 font-weight-bold">Build N=1 communities</h1>
        <v-sheet class="pa-2 ma-2">
          Give product user the ability to share and coordianate feedback and outcomes.  
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
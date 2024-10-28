<template>
  <v-container class="stream-space">
  <v-responsive class="d-flex align-top text-center fill-height">
    <v-row
      no-gutters
    >
      <v-col
        align-self="center"
      >
        <h1 class="text-h4 font-weight-bold">Hosting</h1>
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
        <v-sheet class="pa-3 ma-6"             
          :elevation="24"
        >
          <v-card>
            A LHA (longevity health agent) toolkit can be down loaded to a laptop or any computer. Those seeking the convenience of access to a LHA in the cloud we offer a secure hosted account. Influencers can offer cloud accounts to the communities.
            <div id="pricing-host">
              Pricing:   per month
            </div>
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

#pricing-host {
  margin: 2em;
}
</style>
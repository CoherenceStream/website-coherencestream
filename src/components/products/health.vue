<template>
  <v-container class="stream-space">
  <v-responsive class="d-flex align-top text-center fill-height">
    <v-row
      no-gutters
    >
      <v-col
        align-self="center"
      >
        <h1 class="text-h4 font-weight-bold mb-6">a peer to peer approach to ...HEALTH </h1>
      </v-col>
    </v-row>
    <v-row        
        no-gutters
        align="center"
    >
      <v-col class="text-justify"
        sm="6"
      >
        <h1 class="text-h6 font-weight-bold">PtoP Health</h1>
        <v-sheet class="pa-2 ma-2">
          <a target="_blank" href="https://health.coherencestream.com/">BentoBox-DS HEALTH</a> has been setup with a set of Bento templates that make it easy to plugin data from wearables and other devices. 
        </v-sheet>
      </v-col>
      <v-col class="text-center"
        sm="6"
      >
        <v-btn
          value="center"
          color="deep-orange-accent-3"
          href="https://health.coherencestream.com/"
         >
          Go TO BentoBox-Health website
        </v-btn>
      </v-col>
    </v-row>
    <v-row        
        no-gutters
    >
      <v-col class="text-justify">
        <h1 class="text-h6 font-weight-bold">Customise for personal or business use</h1>
        <v-sheet class="pa-2 ma-2">
          Edit Bento templates to add unique content for customers & clients.
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
  </v-responsive>
</v-container>
</template>

<script setup>
</script>

<style scoped>
.stream-space {
  height: 100%;
}
</style>
<template>
  <v-container class="stream-space">
    <v-responsive class="d-flex align-top text-center fill-height">
    <v-row
      no-gutters
    >
      <v-col
        align-self="center"
      >
        <h1 class="text-h4 font-weight-bold mb-6">a peer to peer approach to ... SOFTWARE DEVELOPMENT </h1>
      </v-col>
    </v-row>
    <v-row        
        no-gutters
    >
      <v-col class="text-justify">
        <h1 class="text-h6 font-weight-bold">OPEN SOURCE</h1>
        <v-sheet class="pa-2 ma-2">
          CoherenceStream is a core contributor to the BentoBox-DS and Health Oracle Protocol open source projects.
        </v-sheet>
      </v-col>
    </v-row>
    <v-row        
        no-gutters
    >
      <v-col class="text-justify">
        <h1 class="text-h6 font-weight-bold">DOCUMENTATION</h1>
        <v-sheet class="pa-2 ma-2">
          <a target="_blank" href="https://bentobox-ds.gitbook.io/bentobox-ds-hop/">BentoBox-DS & HOP</a>
        </v-sheet>
        <v-sheet class="pa-2 ma-2">
          <a target="_blank" href="https://bentobox-ds.gitbook.io/bentobox-ds-hop/">Getting started</a>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row        
        no-gutters
    >
      <v-col class="text-justify">
        <h1 class="text-h6 font-weight-bold">CODE</h1>
        <v-sheet class="pa-2 ma-2">
          <div class="url-external" @click="externalUrl('https://github.com/healthscience/')">
            BentoBox-DS HOP
          </div>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row        
        no-gutters
    >
      <v-col class="text-justify">
        <h1 class="text-h6 font-weight-bold">COMMUNITY</h1>
        <v-sheet class="pa-2 ma-2">
          <a target="_blank" href="https://discord.gg/RNryFG9F">Discord</a>
        </v-sheet>
      </v-col>
    </v-row>
  </v-responsive>
</v-container>
</template>

<script>
  export default {
    methods: {
      externalUrl (web) {
        window.open(web, '_blank')
      }
    }
  }
</script>

<style scoped>
.stream-space {
  height: 80%;
}

.url-external {
  cursor: pointer;
  color: blue;
}
</style>
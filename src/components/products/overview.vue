<template>
    <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-row
        justify="center"
        align="center"
        >
        <v-col
          sm="4"
          offset="2"
        >
          <v-sheet class="ma-2 pa-2">
            <div class="flip-box">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <v-img
                    contain
                    height="200"
                    src="@/assets/logo-back.png"
                  />
                </div>
                <div class="flip-box-back">
                  <v-img
                    contain
                    height="200"
                    src="@/assets/logo.png"
                  />
                </div>
              </div>
            </div>
          </v-sheet>
        </v-col>
        <v-col
          sm="4"
        >
          <v-sheet class="ma-2 pa-2">
            <div class="message">
              <div class="text-body-1 font-weight-regular mb-n1">
                Creator & data science technology for sovereign peers, businesses & communities that want to self educate & take control of the data and AI's that shape the world.
              </div>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row
        no-gutters
      >
        <v-col
          align-self="center"
        >
          <h1 class="text-h4 font-weight-bold">a peer to peer approach to ... </h1>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
  //
</script>
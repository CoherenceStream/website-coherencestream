<template>
  <v-container class="stream-space">
  <v-responsive class="d-flex align-top text-center fill-height">
    <v-row
      no-gutters
    >
      <v-col
        align-self="center"
      >
        <h1 class="text-h4 font-weight-bold">Longevity Health Agents</h1>
      </v-col>
    </v-row>
    <v-row
        justify="center"
        >
        <v-col
          cols="12"
          sm="12"
          xs="12"
        >
            <v-sheet class="ma-2 pa-2">
              <div class="flip-box">
                <div class="flip-box-inner">
                  <div class="flip-box-front">
                    <v-img
                      contain
                      height="130"
                      src="@/assets/logo-back.png"
                    />
                    <v-card
                      class="mx-auto"
                      color="grey-lighten-3"
                      max-width="800"
                    >
                      <v-card-text>
                        <v-text-field
                            :loading="askbeebee"
                            append-inner-icon="mdi-magnify"
                            density="compact"
                            label="Ask the health oracle anything."
                            variant="solo"
                            hide-details
                            single-line
                            @click:append-inner="onClick"
                        ></v-text-field>
                      </v-card-text>
                    </v-card>
                  </div>
                </div>
              </div>
            </v-sheet>
            <beebee-converse v-if="askbeebee === true"></beebee-converse>
        </v-col>
      </v-row>
      <v-row
        justify="center"
        >
        <v-col
          cols="12"
          md="4"
          sm="12"
          xs="12"
        >
          <v-sheet class="ma-2 pa-2">
            <div class="message">
              <div class="text-body-1 font-weight-regular mb-n1">
                <v-list lines="one">
                  <v-list-item
                    class="font-weight-bold"
                  >
                  Practical longevity for:
                  </v-list-item>
                  <v-list-item
                  >
                  Influencers
                  </v-list-item>
                  <v-list-item>
                    Practitioners
                  </v-list-item>
                  <v-list-item
                  >
                    Products
                  </v-list-item>
                </v-list>
              </div>
            </div>
          </v-sheet>
        </v-col>
        <v-col
          cols="12"
          md="4"
          sm="12"
          xs="12"
        >
          <v-sheet class="ma-2 pa-2">
            <div class="message">
              <div class="text-body-1 font-weight-regular mb-n1">
                <v-list lines="one">
                  <v-list-item
                    class="font-weight-bold"
                  >
                  N=1 experimentation
                  </v-list-item>
                  <v-list-item
                  >
                  Build networks
                  </v-list-item>
                  <v-list-item>
                    Train agents
                  </v-list-item>
                  <v-list-item
                  >
                    Share securly
                  </v-list-item>
                </v-list>
              </div>
            </div>
          </v-sheet>
        </v-col>
        <v-col
          cols="12"
          md="4"
          sm="12"
          xs="12"
        >
          <v-sheet class="ma-2 pa-2">
            <div class="message">
              <div class="text-body-1 font-weight-regular mb-n1">
                <v-list lines="one">
                  <v-list-item
                    class="font-weight-bold"
                  >
                    Optimisation
                  </v-list-item>
                  <v-list-item
                  >
                    Biomarkers
                  </v-list-item>
                  <v-list-item>
                    Treatments
                  </v-list-item>
                  <v-list-item
                  >
                    Research
                  </v-list-item>
                </v-list>
              </div>
            </div>
          </v-sheet>
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
        <iframe width="100%" height="420" :src="'https://www.youtube.com/embed/gsftHkr6--g?si=YkoST99wttMhzL8B'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <!--<v-img
            contain
            height="600"
            src="@/assets/ask-beebee-chart1.png"
          />-->
        </v-sheet>
      </v-col>
    </v-row>
  </v-responsive>
</v-container>
</template>

<script setup>
  import BeebeeConverse from '@/components/products/beebee/chatConverse.vue'
  import { ref } from 'vue'

  let askbeebee = ref(false)

  /* methods */
  const onClick = () => {
    console.log('ask beebee')
    askbeebee.value = true
  }

</script>

<style scoped>
.stream-space {
 display: grid;
}

.flip-box {
  background-color: transparent;
  width: 100%;
  height: 220px;
  border: 1px solid #f1f1f1;
  perspective: 1000px;
}

.flip-box-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  justify-content: center;
}

.flip-box-front {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-box-front {
  background-color: dodgerblue;
  color: black;
  -webkit-border-radius: .5em;
  -moz-border-radius: .5em;
  border-radius: .5em;
}

</style>
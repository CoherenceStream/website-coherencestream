<template>
  <v-container
      class="bg-blue-lighten-5 mb-6 rounded-xl"
    >
    <v-row style="margin-left: 20px; height:60px; font-size: 1.4em;" xs12 md6>H2P -version 1</v-row>
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
        <v-dialog
          v-model="dialog1"
          width="100%"
        >
            <template v-slot:activator="{ props }">
              <v-sheet
                class="pa-12 ma-2 bg-blue rounded-circle mx-auto mt-8 getstarted"
                max-width="256"
                elevation="12"
                height="128"
                width="100%"
              >
                <v-btn
                  variant="text"
                  v-bind="props"
                >
                  Query latest knowledge
                </v-btn>
              </v-sheet>

            </template>
          <v-card>
            <onboard-practitioner :usecase="1"></onboard-practitioner>
            <v-card-actions>
              <v-btn color="primary" block @click="dialog1 = false">Close Dialog</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
      <v-col
        cols="12"
        sm="4"
      >
        <v-dialog
          v-model="dialog2"
          width="100%"
        >
            <template v-slot:activator="{ props }">
              <v-sheet
                class="pa-12 ma-2 bg-blue rounded-circle mx-auto mt-8 getstarted"
                max-width="256"
                elevation="12"
                height="128"
                width="100%"
              >
                <v-btn
                  variant="text"
                  v-bind="props"
                >
                  nocode data science
                </v-btn>
              </v-sheet>

            </template>
          <v-card>
            <onboard-practitioner :usecase="2"></onboard-practitioner>
            <v-card-actions>
              <v-btn color="primary" block @click="dialog2 = false">Close Dialog</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
      <v-col
        cols="12"
        sm="4"
      >
        <v-dialog
          v-model="dialog3"
          width="100%"
        >
            <template v-slot:activator="{ props }">
              <v-sheet
                class="pa-12 ma-2 bg-blue rounded-circle mx-auto mt-8 getstarted"
                max-width="256"
                elevation="12"
                height="128"
                width="100%"
              >
                <v-btn
                  variant="text"
                  v-bind="props"
                >
                  Generate content
                </v-btn>
              </v-sheet>

            </template>
          <v-card>
            <onboard-practitioner :usecase="3"></onboard-practitioner>
            <v-card-actions>
              <v-btn color="primary" block @click="dialog3 = false">Close Dialog</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
    <v-row
      align="start"
      no-gutters
    >
      <v-col>
        <v-row
        justify="center"
         align="center"
         no-gutters
         style="margin-bottom: 60px;"
        >
          <!--<iframe width="80%" height="315" :src="videourl" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
        </v-row>
      </v-col>
    </v-row>
    <v-row
      align="start"
      no-gutters
    >
      <v-col>
        <v-sheet class="pa-2 ma-2" wrap min-height="160px">
          <h3 class="headline mb-0 font-weight-bold">Query latest insights, treatment & practice</h3>
          <div style="word-break: break-word" class="spacing-playground pa-3">
            Query and converse with a network of health expertise.
          </div>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2" wrap min-height="160px">
          <h3 class="headline mb-0 font-weight-bold">Select from a range of data science health models</h3>
              <div style="word-break: break-word" class="spacing-playground pa-3" min-height="200px">
                Select from a range of data science tools, text to time series analysis.
              </div>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row
      align="start"
      no-gutters
    >
      <v-col>
        <v-sheet class="pa-2 ma-2" wrap min-height="160px">
          <h3 class="headline mb-0 font-weight-bold">Reach new patients</h3>
              <div style="word-break: break-word" class="spacing-playground pa-3">
                Promote a practice with tailored website and social media content.  
              </div>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2" wrap min-height="160px">
          <h3 class="headline mb-0 font-weight-bold">Privacy perserving sovereign data</h3>
          <div style="word-break: break-word" class="spacing-playground pa-3">
            Patients can learn much from owning their data. They can learn much more and faster by allowing privacy preserving machine learning with others. Join network experiments.
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import OnboardPractitioner from '@/components/usecases/practitioner/onboardPractitioner.vue'
  export default {
    components: {
      OnboardPractitioner
    },
    data () {
      return {
        align: 'start',
        dialog1: false,
        dialog2: false,
        dialog3: false,
        videourl: 'https://youtu.be/uMH9WLYa7NE'
      }
    }
  }
</script>

<style scoped>
.open-left {
  margin-top: 3em;
  perspective: 1000px;
}

.left-perspective {
  transform: rotateY(14deg);
}

.open-right {
  perspective: 1000px;
  filter: drop-shadow(10px 20px 55px #B2DFDB);
}

.right-perspective {
  transform: rotateY(-14deg);
}

.middle-top {
  margin-top: 200px;
}

.getstarted {
  cursor: pointer;
}
</style>

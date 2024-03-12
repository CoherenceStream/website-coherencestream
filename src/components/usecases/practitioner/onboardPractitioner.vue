<template>
  <v-container>
    <v-row
        justify="center"
        align="center"
        >
        <v-col
          sm="4"
          offset="2"
        >
          <v-sheet class="ma-2 pa-2">
            <v-img
              contain
              height="200"
              src="@/assets/logo-back.png"
            />
            Ask beebee health agent anything to get started.
            <v-card
              class="mx-auto"
              color="grey-lighten-3"
              max-width="400"
            >
              <v-card-text>
                <v-text-field
                  :loading="loading"
                  append-inner-icon="mdi-magnify"
                  density="compact"
                  label="Ask beebee about ... .. ."
                  variant="solo"
                  hide-details
                  single-line
                  @click:append-inner="onClick"
                ></v-text-field>
              </v-card-text>
            </v-card>
          </v-sheet>
        </v-col>
        <v-col
          sm="4"
        >
          <v-sheet class="ma-2 pa-2">
            <div v-if="usecase === 1" class="message">
              <div class="text-body-1 font-weight-regular mb-n1">
                Keep up to date by quering a network of health information from fellow practitioners.
              </div>
            </div>
            <div v-else-if="usecase === 2" class="message">
              <div class="text-body-1 font-weight-regular mb-n1">
                Plug in to your existing data to perform holistic data science across text and time series data sets.
              </div>
            </div>
            <div v-else-if="usecase === 3" class="message">
              <div class="text-body-1 font-weight-regular mb-n1">
                Create content to promote your practice and earn income from shairng knowledge and offering digital health courses to digital nomad and sovereign health patients.
              </div>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
  export default {
    props: {
      usecase: String
    },
    methods: {
    }
  }
</script>

<style scoped>
</style>
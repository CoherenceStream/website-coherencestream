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
          </v-sheet>
        </v-col>
        <v-col
          sm="4"
        >
          <v-sheet class="ma-2 pa-2">
            <div v-if="usecase === 1" class="message">
              <div class="text-body-1 font-weight-regular mb-n1">
                Take ownership of your health data and beebee AI  will keep searching out the best science to support health optimisation.
              </div>
            </div>
            <div v-else-if="usecase === 2" class="message">
              <div class="text-body-1 font-weight-regular mb-n1">
                Content creators can compliment their videos, podcasts and blogs by sharing dashboard visuaisation that grounds their advice.
              </div>
            </div>
            <div v-else-if="usecase === 3" class="message">
              <div class="text-body-1 font-weight-regular mb-n1">
                Web3.0 health practices can focus on patient care and offer secure data infrastructure with supporting AI tools and data insights.
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
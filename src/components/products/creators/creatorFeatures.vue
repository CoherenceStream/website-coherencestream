<template>
  <v-container
      class="bg-pink-lighten-2 mb-6 rounded-xl"
    >
    <v-row style="margin-left: 20px; height:60px; font-size: 1.4em;" xs12 md6>Ground content in science</v-row>
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
                class="pa-12 ma-2 bg-pink rounded-circle mx-auto mt-8 getstarted"
                max-width="256"
                elevation="12"
                height="128"
                width="100%"
              >
                <v-btn
                  variant="text"
                  v-bind="props"
                >
                  Add AI agents
                </v-btn>
              </v-sheet>

            </template>
          <!--<v-card>
            <onboard-creator :usecase="1"></onboard-creator>
            <v-card-actions>
              <v-btn color="primary" block @click="dialog1 = false">Close Dialog</v-btn>
            </v-card-actions>
          </v-card>-->
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
                class="pa-12 ma-2 bg-pink rounded-circle mx-auto mt-8 getstarted"
                max-width="256"
                elevation="12"
                height="128"
                width="100%"
              >
                <v-btn
                  variant="text"
                  v-bind="props"
                >
                  Offer AI agents
                </v-btn>
              </v-sheet>

            </template>
          <!--<v-card>
            <onboard-creator :usecase="2"></onboard-creator>
            <v-card-actions>
              <v-btn color="primary" block @click="dialog2 = false">Close Dialog</v-btn>
            </v-card-actions>
          </v-card>-->
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
                class="pa-12 ma-2 bg-pink rounded-circle mx-auto mt-8 getstarted"
                max-width="256"
                elevation="12"
                height="128"
                width="100%"
              >
                <v-btn
                  variant="text"
                  v-bind="props"
                >
                  Practices & products
                </v-btn>
              </v-sheet>

            </template>
          <!--<v-card>
            <onboard-creator :usecase="3"></onboard-creator>
            <v-card-actions>
              <v-btn color="primary" block @click="dialog3 = false">Close Dialog</v-btn>
            </v-card-actions>
          </v-card>-->
        </v-dialog>
      </v-col>
    </v-row>
    <v-row
      align="start"
      no-gutters
    >
      <v-col>
        <v-sheet class="pa-2 ma-2" wrap min-height="160px">
          <h3 class="headline mb-0 font-weight-bold">Add AI agent</h3>
          <div style="word-break: break-word" class="spacing-playground pa-3">
            Offer an AI agent that can hold a conversation with your members.
          </div>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2" wrap min-height="160px">
          <h3 class="headline mb-0 font-weight-bold">Offer</h3>
              <div style="word-break: break-word" class="spacing-playground pa-3" min-height="200px">
                Offer members their own health agent.
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
          <h3 class="headline mb-0 font-weight-bold">Build networks</h3>
          <div style="word-break: break-word" class="spacing-playground pa-3">
            Connect to a wider network of health3.0 practices and e-commerce products.
          </div>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2" wrap min-height="160px">
          <h3 class="headline mb-0 font-weight-bold">Contribute</h3>
              <div style="word-break: break-word" class="spacing-playground pa-3">
                Add new devices, products or content to the network.  
              </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import OnboardCreator from '@/components/products/creators/onboardCreator.vue'
  export default {
    components: {
      OnboardCreator
    },
    data () {
      return {
        align: 'start',
        dialog1: false,
        dialog2: false,
        dialog3: false
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

<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-row>
        <longevity-agents></longevity-agents>
      </v-row>
      <v-row
        no-gutters
      >
        <v-col
          align-self="center"
        >
          <div class="text-h6-m8 font-weight-bold fronttop">
            CoherenceStream builds innovative technology and tools to establish a new health networks
          </div>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col
          sm="6"
        >
          <v-sheet class="ma-2 pa-2">
            <div class="jigsaw1"  @click="pageRoute('health')">
              <span class="t"></span>
              <span class="r"></span>
              <span class="b"></span>
              <span class="l"></span>
              <span class="rr"></span>
              <span class="text font-weight-bold">Longevity Health Agents</span>
              <span class="text">A toolkit to practice & experiment</span>
              <span class="text">AI support</span>
            </div>
          </v-sheet>
        </v-col>
        <v-col
          sm="6"
        >
          <v-sheet class="ma-2 pa-2">
            <div class="jigsaw3" @click="pageRoute('payments')">
              <span class="t"></span>
              <span class="r"></span>
              <span class="b"></span>
              <span class="ll"></span>
              <span class="text font-weight-bold">Secure Hosted</span>
              <span class="text">Offer toolkits to your community</span>
              <span class="text">Share securly</span>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col
          sm="6"
        >
          <v-sheet class="ma-2 pa-2">
            <div class="jigsaw4" @click="pageRoute('support')">
              <span class="t"></span>
              <span class="rr"></span>
              <span class="b"></span>
              <span class="l"></span>
              <span class="text font-weight-bold">Support & Pricing</span>
              <span class="text">Back up data</span>
              <span class="text">Help human and chatbot</span>
            </div>
          </v-sheet>
        </v-col>
        <v-col
          sm="6"
        >
          <v-sheet class="ma-2 pa-2">
            <div class="jigsaw2" @click="pageRoute('liberation')">
              <span class="t"></span>
              <span class="r"></span>
              <span class="b"></span>
              <span class="ll"></span>
              <span class="text font-weight-bold">Data agents</span>
              <span class="text">Take hassel out of aggreating</span>
              <span class="text">Contribute new AI agents</span>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row>
        <!--<h2-practitioner></h2-practitioner>-->
      </v-row>
      <div class="py-14" />
    </v-responsive>
  </v-container>
</template>

<script>
  import LongevityAgents from '@/components/products/h2p/practitioner/longevityAgents.vue'
  import H2Practitioner from '@/components/products/h2p/practitioner/h2pV1.vue'

  export default {
    components: {
      LongevityAgents,
      H2Practitioner
    },
    data () {
      return {
        askbeebee: 'predictfuture'
      }
    },
    methods: {
      pageRoute (pr) {
        this.$router.push('/' + pr)
      },
      onClick () {

      }
    }
  }
</script>

<style scoped>
p {
	margin: 10px;
}

.jigsaw1, .jigsaw2, .jigsaw3, .jigsaw4 {
  width: auto;
  height: 16em;
  margin: 50px;
  position: relative;
  -webkit-border-radius: .5em;
  -moz-border-radius: .5em;
  border-radius: .5em;
  cursor: pointer;
}

.jigsaw1,
.jigsaw1 span {
 background-color: #0284cf; 
}

.jigsaw2,
.jigsaw2 span {
 background-color: #00008B; 
}

.jigsaw3,
.jigsaw3 span {
 background-color: #3232c6; 
}

.jigsaw4,
.jigsaw4 span {
 background-color: #247e83; 
}

.text {
  display: block;
  color: #fff;
  font-size: 1.2em;
  text-align: center;
  padding: 1.9em 0 0 1.2em;
  position: relative;
  background: transparent !important;
}

.jigsaw1 .t, .jigsaw2 .t, .jigsaw3 .t, .jigsaw4 .t {
 width: 2em;
  height: 2em;
  position: absolute;
  top: -1.5em;
  left: 2em;
  -webkit-border-radius: 4em;
  -moz-border-radius: 4em;
  border-radius: 4em;
}

.jigsaw1 .r, .jigsaw2 .r, .jigsaw3 .r, .jigsaw4 .r {
 width: 2em;
  height: 2em;
  position: absolute;
  top: 2em;
  left: 5.5em;
  -webkit-border-radius: 4em;
  -moz-border-radius: 4em;
  border-radius: 4em;
}

.jigsaw1 .b, .jigsaw2 .b, .jigsaw3 .b, .jigsaw4 .b { 
 width: 1.8em;
  height: 1.8em;
  position: absolute;
  top: 14.5em;
  left: 2.2em;
  -webkit-border-radius: 4em;
  -moz-border-radius: 4em;
  border-radius: 4em;
  background-color: #fff;
}

.jigsaw1 .l, .jigsaw2 .l, .jigsaw3 .l, .jigsaw4 .l  { 
 width: 1.8em;
  height: 1.8em;
  position: absolute;
  top: 2.2em;
  left: -.4em;
  -webkit-border-radius: 4em;
  -moz-border-radius: 4em;
  border-radius: 4em;
  background-color: #fff;
}

.jigsaw1 .rr, .jigsaw2 .rr, .jigsaw4 .rr {
 width: 2em;
  height: 2em;
  position: absolute;
  top: 8em;
  left: calc(100% - 2%);
  -webkit-border-radius: 4em;
  -moz-border-radius: 4em;
  border-radius: 4em;
}


.jigsaw1 .ll, .jigsaw2 .ll, .jigsaw3 .ll { 
 width: 1.8em;
  height: 1.8em;
  position: absolute;
  top: 8em;
  left: -.4em;
  -webkit-border-radius: 4em;
  -moz-border-radius: 4em;
  border-radius: 4em;
  background-color: #fff;
}
</style>
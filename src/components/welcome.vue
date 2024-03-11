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
                <v-list lines="one">
                  <v-list-item
                    class="font-weight-bold"
                  >
                  Establish health sovereignty
                  </v-list-item>
                  <v-list-item
                  >
                  Empowering peers
                  </v-list-item>
                  <v-list-item
                  >
                  Supporting Creators & Practioners
                  </v-list-item>
                  <v-list-item
                  >
                  Liberating data one device at a time
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
        <v-col
          align-self="center"
        >
          <div class="text-h6-m8 font-weight-bold fronttop">CoherenceStream builds innovative technology and tools to support the Bitcoin generation establish health sovereignty.</div>
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
              <span class="text font-weight-bold">Health sovereignty</span>
              <span class="text">AI Health agents</span>
              <span class="text">For peers, creators, practioners & e-commerce</span>
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
              <span class="text font-weight-bold">Self Assurance Pools</span>
              <span class="text">Pay only for value</span>
              <span class="text">Build peer to peer funds</span>
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
              <span class="text font-weight-bold">Support</span>
              <span class="text">Quick answers from human and AI's</span>
              <span class="text">Pay for level of service required</span>
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
              <span class="text font-weight-bold">Device & Data Liberation</span>
              <span class="text">Extract data from devices</span>
              <span class="text">Invest in open hardware</span>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row>
        <bentobox-ds></bentobox-ds>
      </v-row>
      <div class="py-14" />
    </v-responsive>
  </v-container>
</template>

<script>
  import BentoboxDs from '@/components/bentobox/bentobox-ds.vue'

  export default {
    components: {
      BentoboxDs
    },
    methods: {
      pageRoute (pr) {
        this.$router.push('/' + pr)
      }
    }
  }
</script>

<style scoped>
.welcome-message {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
}

p {
	margin: 10px;
}

.flip-box {
  background-color: transparent;
  width: 220px;
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
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-box:hover .flip-box-inner {
  transform: rotateY(180deg);
}

.flip-box-front, .flip-box-back {
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

.flip-box-back {
  background-color: rgb(121, 140, 122);
  color: white;
  transform: rotateY(180deg);
  -webkit-border-radius: .5em;
  -moz-border-radius: .5em;
  border-radius: .5em;
}
.approachto {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-self: center;
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
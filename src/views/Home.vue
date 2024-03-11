<template>
  <div class="move-me move-me-3"></div>
  <div class="move-me move-me-3r"></div>
  <coherence-stream />
</template>

<script setup>
  import CoherenceStream from '@/components/welcome.vue'
</script>

<style scoped>
.move-me {
  display: inline-block;
  padding: 140px;
  color: white;
  position: absolute;
  margin: 0 0 10px 0;
  top: 10%;
}

.move-me {
  display: inline-block;
  padding: 140px;
  color: white;
  position: absolute;
  margin: 0 0 0 0;
  top: 10%;
}

.move-me-3 {
  animation: move-in-steps 8s forwards;
}


.move-me-3r {
  animation: move-in-steps-right 8s forwards;
}

@keyframes move-in-steps {
  0% {
    left: 20%;
    border: 1px solid lightblue;
  }
  10% {
    left: 0;
    border: 1px solid blue;
  }
  100% {
    left: 24%;
    border: 1px solid lightblue;
  }
}

@keyframes move-in-steps-right {
  0% {
    right: 20%;
    border: 1px solid lightblue;
  }
  10% {
    right: 0;
    border: 1px solid blue;
  }
  100% {
    right: 24%;
    border: 1px solid lightblue;
  }
}
</style>

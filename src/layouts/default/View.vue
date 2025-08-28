<template>
  <v-main id="waves-stream">
    <router-view />
    <footer-cs />
  </v-main>
</template>

<script setup>
  import FooterCs from '@/views/footerCs.vue'
</script>

<style scoped>
#waves-stream {
  background-color: #e7efe4;
  background-image: 
    radial-gradient(circle at 20% 30%, rgba(196, 242, 199, 0.2) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(196, 242, 199, 0.2) 0%, transparent 50%),
    repeating-radial-gradient(circle at 0 0, transparent 0, #e7efe4 8px),
    repeating-linear-gradient(45deg, #c4f2c755 0%, #c4f2c7 1px, transparent 1px, transparent 2px);
  background-size: 100% 100%;
  background-attachment: fixed;
  animation: ripple 15s infinite linear;
}

@keyframes ripple {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
</style>

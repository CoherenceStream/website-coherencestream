<template>
  <div class="chat-container">
    <v-text-field
      v-model="message"
      label="Ask the health oracle anything"
      variant="outlined"
      density="compact"
      hide-details
      single-line
      @keyup.enter="sendMessage"
    ></v-text-field>
    <v-btn @click="sendMessage" class="send-button">Send</v-btn>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('')

const sendMessage = () => {
  if (message.value.trim()) {
    // TODO: Implement actual message sending logic
    console.log('Sending message:', message.value)
    message.value = ''
  }
}
</script>

<style scoped>
.chat-container {
  display: flex;
  gap: 1rem;
  padding: 1rem;
}

.send-button {
  min-width: 80px;
}
</style>
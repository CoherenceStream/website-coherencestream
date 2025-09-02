<template>
  <div class="card-blue">
    <div class="text-center mb-6">
      <h3 class="text-2xl font-bold text-indigo-600 mb-2">💬 Chat with BeeBee</h3>
      <p class="text-gray-600">Ask about networks, besearch, or building your own HOP network</p>
    </div>
    
    <!-- Chat Messages -->
    <div v-if="messages.length > 0" class="mb-4 max-h-64 overflow-y-auto">
      <div v-for="message in messages" :key="message.id" class="mb-3">
        <div v-if="message.type === 'user'" class="flex justify-end">
          <div class="bg-blue-500 text-white px-4 py-2 rounded-2xl max-w-xs">
            {{ message.text }}
          </div>
        </div>
        <div v-else class="flex justify-start">
          <div class="bg-gray-100 text-gray-800 px-4 py-2 rounded-2xl max-w-xs">
            <strong>BeeBee:</strong> {{ message.text }}
          </div>
        </div>
      </div>
    </div>
    
    <!-- Chat Input -->
    <div class="flex space-x-3">
      <input
        v-model="currentMessage"
        @keyup.enter="sendMessage"
        type="text"
        placeholder="How can I start my own health network?"
        class="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
      <button
        @click="sendMessage"
        :disabled="!currentMessage.trim()"
        class="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        →
      </button>
    </div>
    
    <!-- Sample Questions -->
    <div v-if="messages.length === 0" class="mt-4">
      <p class="text-sm text-gray-500 mb-2">Try asking:</p>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="sample in sampleQuestions"
          :key="sample"
          @click="askSample(sample)"
          class="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors"
        >
          {{ sample }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentMessage = ref('')
const messages = ref([])

const sampleQuestions = [
  'What is besearch?',
  'How do I start a health network?',
  'What is HOP protocol?',
  'Tell me about healthCues'
]

const beeBeeResponses = {
  'what is besearch': 'Besearch is our improved research methodology that combines individual optimization (n=1 studies) with network learning. Instead of traditional population-based research, each person becomes their own research subject, contributing to collective intelligence while maintaining data sovereignty.',
  'how do i start a health network': 'Starting a health network involves setting up HOP (Health Oracle Protocol) nodes and connecting DIY devices for data collection. We can help you with consultation, setup, and ongoing support. Contact us to discuss your specific needs!',
  'what is hop protocol': 'HOP (Health Oracle Protocol) is our peer-to-peer protocol for sovereign health data. It enables direct device-to-peer data streaming, distributed ML coordination via coherence ledgers, and decentralized health networks without relying on centralized platforms.',
  'tell me about healthcues': 'healthCues is our first commercial network - a personalized wellness optimization platform built on BentoBoxDS. It uses DIY devices (smart scales, wearables, blood tests) and besearch methodology to help individuals optimize their health through n=1 experiments.',
  'default': 'I\'m BeeBee, your guide to CoherenceStream\'s besearch networks! I can help you understand our technology, methodology, and how to get involved. What would you like to know?'
}

function sendMessage() {
  if (!currentMessage.value.trim()) return
  
  const userMessage = {
    id: Date.now(),
    type: 'user',
    text: currentMessage.value
  }
  
  messages.value.push(userMessage)
  
  // Simple response logic
  const response = getBeeBeeResponse(currentMessage.value.toLowerCase())
  
  setTimeout(() => {
    messages.value.push({
      id: Date.now() + 1,
      type: 'beebee',
      text: response
    })
  }, 1000)
  
  currentMessage.value = ''
}

function askSample(question) {
  currentMessage.value = question
  sendMessage()
}

function getBeeBeeResponse(message) {
  for (const [key, response] of Object.entries(beeBeeResponses)) {
    if (key !== 'default' && message.includes(key)) {
      return response
    }
  }
  return beeBeeResponses.default
}
</script>
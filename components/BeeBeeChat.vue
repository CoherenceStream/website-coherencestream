<template>
  <div class="card-blue">
    <div class="text-center mb-6">
      <h3 class="text-2xl font-bold text-indigo-600 mb-2">💬 Chat with BeeBee</h3>
      <p class="text-gray-600">Ask about networks, besearch, or building your own HOP network</p>
    </div>

    <!-- Chat Messages -->
    <div v-if="messages.length > 0" class="space-y-4 overflow-y-auto max-h-96 mb-4">
      <div v-for="(message, index) in messages" :key="index" :class="['flex', message.type === 'user' ? 'justify-end' : 'justify-start']">
        <div :class="['max-w-xs lg:max-w-md px-4 py-2 rounded-lg', message.type === 'user' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-800']">
          <div v-if="message.type === 'beebee'" class="flex items-start space-x-2">
            <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mt-1">B</div>
            <div class="flex-1">
              <p class="text-sm">{{ message.text }}</p>
            </div>
          </div>
          <p v-else class="text-sm">{{ message.text }}</p>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="isLoading" class="flex justify-start mb-4">
      <div class="bg-gray-100 text-gray-800 max-w-xs lg:max-w-md px-4 py-2 rounded-lg">
        <div class="flex items-center space-x-2">
          <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">B</div>
          <div class="flex space-x-1">
            <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
            <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
            <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Chat Input -->
    <form @submit.prevent="handleChatSubmit" class="mb-2">
      <div class="relative">
        <input
          v-model="chatQuery"
          type="text"
          placeholder="Ask beebee how to setup a network or anything ... .. ."
          class="w-full px-6 py-4 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-lg"
        />
        <button
          type="submit"
          :disabled="!chatQuery.trim()"
          class="absolute right-2 top-2 bottom-2 px-6 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          →
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const chatQuery = ref('')
const messages = ref([])
const isLoading = ref(false)

// Mock BeeBee responses (without transition/expansion)
const beebeeResponses = {
  health: { text: "I can help you track and optimize your health! I work with devices like smart scales, fitness trackers, and blood test results to find personalized insights." },
  device: { text: "healthCues works with many devices - smart scales, fitness trackers, continuous glucose monitors, and more. Each device adds data to help find your optimal health patterns." },
  data: { text: "Your health data stays completely private and local. You own it, control it, and can export it anytime. Want to see how this works?" },
  network: { text: "healthCues is a peer-to-peer network where you can learn from others while keeping your data private. You contribute to collective intelligence without sharing personal information." },
  default: { text: "I'm BeeBee, your health intelligence agent! I help you discover personalized health optimization through data from your devices and peer learning. What interests you most?" }
}

async function handleChatSubmit() {
  if (!chatQuery.value.trim()) return

  const userMessage = chatQuery.value.trim()
  messages.value.push({ type: 'user', text: userMessage })
  chatQuery.value = ''
  isLoading.value = true

  await new Promise(r => setTimeout(r, 1000))

  let response = beebeeResponses.default
  const lower = userMessage.toLowerCase()
  if (lower.includes('health') || lower.includes('track')) response = beebeeResponses.health
  else if (lower.includes('device') || lower.includes('scale') || lower.includes('fitbit')) response = beebeeResponses.device
  else if (lower.includes('data') || lower.includes('privacy') || lower.includes('sovereign')) response = beebeeResponses.data
  else if (lower.includes('network') || lower.includes('peer')) response = beebeeResponses.network

  messages.value.push({ type: 'beebee', text: response.text })
  isLoading.value = false
}
</script>
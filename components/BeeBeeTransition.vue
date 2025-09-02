<template>
  <div class="beebee-transition-container">
    <!-- Seamless Blended Container -->
    <div 
      :class="[
        'transition-all duration-700 ease-in-out',
        isExpanded 
          ? 'fixed inset-0 z-50' 
          : 'max-w-2xl mx-auto'
      ]"
    >
      <!-- Chat Section - Always Visible -->
      <div 
        :class="[
          'transition-all duration-700 ease-in-out',
          isExpanded 
            ? 'absolute top-4 left-4 w-96 bg-white rounded-xl shadow-lg p-4 z-10' 
            : 'space-y-6'
        ]"
      >
        <!-- Chat Input -->
        <form @submit.prevent="handleChatSubmit" :class="isExpanded ? 'mb-4' : 'mb-8'">
          <div class="relative">
            <input
              v-model="chatQuery"
              type="text"
              placeholder="Ask beebee how to setup a network or anything ... .. ."
              :class="[
                'w-full px-6 py-4 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all',
                isExpanded ? 'text-base' : 'text-lg'
              ]"
            />
            <button
              type="submit"
              :disabled="!chatQuery.trim()"
              class="absolute right-2 top-2 bottom-2 px-6 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              →
            </button>
          </div>
        </form>

        <!-- Chat Messages -->
        <div 
          v-if="messages.length > 0" 
          :class="[
            'space-y-4 overflow-y-auto transition-all duration-700',
            isExpanded ? 'max-h-64' : 'max-h-96'
          ]"
        >
          <div 
            v-for="(message, index) in messages" 
            :key="index"
            :class="[
              'flex',
              message.type === 'user' ? 'justify-end' : 'justify-start'
            ]"
          >
            <div 
              :class="[
                'max-w-xs lg:max-w-md px-4 py-2 rounded-lg',
                message.type === 'user' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-100 text-gray-800'
              ]"
            >
              <div v-if="message.type === 'beebee'" class="flex items-start space-x-2">
                <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mt-1">
                  B
                </div>
                <div class="flex-1">
                  <p class="text-sm">{{ message.text }}</p>
                </div>
              </div>
              <p v-else class="text-sm">{{ message.text }}</p>
            </div>
          </div>
        </div>

        <!-- Loading State -->
        <div v-if="isLoading" class="flex justify-start">
          <div class="bg-gray-100 text-gray-800 max-w-xs lg:max-w-md px-4 py-2 rounded-lg">
            <div class="flex items-center space-x-2">
              <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                B
              </div>
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Minimize Button (only when expanded) -->
        <button 
          v-if="isExpanded"
          @click="handleMinimize"
          class="mt-4 w-full text-sm text-gray-500 hover:text-gray-700 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
        >
          ← Back to Chat Only
        </button>
      </div>

      <!-- healthCues App - Blended Background -->
      <div 
        v-if="isExpanded" 
        class="h-full transition-all duration-700 ease-in-out"
      >
        <HealthCuesApp 
          :chat-mode="true"
          @minimize="handleMinimize" 
        />
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import HealthCuesApp from './HealthCuesApp.vue'

// Reactive state
const chatQuery = ref('')
const messages = ref([])
const isLoading = ref(false)
const isExpanded = ref(false)

// Mock BeeBee responses that can trigger app expansion
const beebeeResponses = {
  'health': {
    text: "I can help you track and optimize your health! I work with devices like smart scales, fitness trackers, and blood test results to find personalized insights.",
    showExpansion: true
  },
  'device': {
    text: "healthCues works with many devices - smart scales, fitness trackers, continuous glucose monitors, and more. Each device adds data to help find your optimal health patterns.",
    showExpansion: true
  },
  'data': {
    text: "Your health data stays completely private and local. You own it, control it, and can export it anytime. Want to see how this works?",
    showExpansion: true
  },
  'network': {
    text: "healthCues is a peer-to-peer network where you can learn from others while keeping your data private. You contribute to collective intelligence without sharing personal information.",
    showExpansion: false
  },
  'default': {
    text: "I'm BeeBee, your health intelligence agent! I help you discover personalized health optimization through data from your devices and peer learning. What interests you most?",
    showExpansion: false
  }
}

// Methods
async function handleChatSubmit() {
  if (!chatQuery.value.trim()) return
  
  const userMessage = chatQuery.value.trim()
  
  // Add user message
  messages.value.push({
    type: 'user',
    text: userMessage
  })
  
  chatQuery.value = ''
  isLoading.value = true
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Generate BeeBee response based on keywords
  let response = beebeeResponses.default
  
  if (userMessage.toLowerCase().includes('health') || userMessage.toLowerCase().includes('track')) {
    response = beebeeResponses.health
  } else if (userMessage.toLowerCase().includes('device') || userMessage.toLowerCase().includes('scale') || userMessage.toLowerCase().includes('fitbit')) {
    response = beebeeResponses.device
  } else if (userMessage.toLowerCase().includes('data') || userMessage.toLowerCase().includes('privacy') || userMessage.toLowerCase().includes('sovereign')) {
    response = beebeeResponses.data
  } else if (userMessage.toLowerCase().includes('network') || userMessage.toLowerCase().includes('peer')) {
    response = beebeeResponses.network
  }
  
  // Add BeeBee response
  messages.value.push({
    type: 'beebee',
    text: response.text,
    showExpansion: response.showExpansion
  })
  
  isLoading.value = false
  
  // Auto-expand to healthCues UI if this is a health-related response
  if (response.showExpansion) {
    // Small delay to let user see the response, then expand
    setTimeout(() => {
      expandToFullApp()
    }, 1500)
  }
}

async function expandToFullApp() {
  // Seamlessly expand to healthCues UI
  isExpanded.value = true
}

async function handleMinimize() {
  // Smoothly return to chat-only mode
  isExpanded.value = false
}
</script>

<style scoped>
.beebee-transition-container {
  position: relative;
}

/* Smooth transitions for all interactive elements */
button {
  @apply transition-all duration-200;
}

/* Custom scrollbar for chat messages */
.overflow-y-auto::-webkit-scrollbar {
  width: 4px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  @apply bg-gray-100 rounded;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  @apply bg-gray-300 rounded;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-400;
}
</style>
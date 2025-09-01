<template>
  <div class="beebee-transition-container">
    <!-- Overlay for expanded mode -->
    <div 
      v-if="isExpanded" 
      class="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
      :class="{ 'opacity-100': showOverlay, 'opacity-0': !showOverlay }"
      @click="handleMinimize"
    ></div>

    <!-- Chat Widget / Expanded App Container -->
    <div 
      :class="[
        'transition-all duration-500 ease-in-out',
        isExpanded 
          ? 'fixed inset-4 z-50 rounded-2xl shadow-2xl' 
          : 'max-w-2xl mx-auto'
      ]"
    >
      <!-- Compact Chat Mode -->
      <div v-if="!isExpanded" class="space-y-6">
        <!-- Chat Input -->
        <form @submit.prevent="handleChatSubmit" class="mb-8">
          <div class="relative">
            <input
              v-model="chatQuery"
              type="text"
              placeholder="Ask beebee how to setup a network or anything ... .. ."
              class="w-full px-6 py-4 text-lg border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
            <button
              type="submit"
              :disabled="!chatQuery.trim()"
              class="absolute right-2 top-2 bottom-2 px-6 bg-pink-500 text-white rounded-full hover:bg-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              →
            </button>
          </div>
        </form>

        <!-- Chat Messages -->
        <div v-if="messages.length > 0" class="space-y-4 max-h-96 overflow-y-auto">
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
                  ? 'bg-pink-500 text-white' 
                  : 'bg-gray-100 text-gray-800'
              ]"
            >
              <div v-if="message.type === 'beebee'" class="flex items-start space-x-2">
                <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mt-1">
                  B
                </div>
                <div class="flex-1">
                  <p class="text-sm">{{ message.text }}</p>
                  <!-- Expansion Trigger -->
                  <div v-if="message.showExpansion" class="mt-3 pt-3 border-t border-gray-200">
                    <button 
                      @click="expandToFullApp"
                      class="inline-flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-800 font-medium"
                    >
                      <span>🚀</span>
                      <span>Open healthCues App</span>
                    </button>
                    <p class="text-xs text-gray-500 mt-1">
                      Continue with full data visualization and device management
                    </p>
                  </div>
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
      </div>

      <!-- Expanded healthCues App -->
      <div v-if="isExpanded" class="h-full">
        <HealthCuesApp @minimize="handleMinimize" />
      </div>
    </div>

    <!-- Authentication Modal -->
    <div 
      v-if="showAuthModal" 
      class="fixed inset-0 bg-black bg-opacity-50 z-60 flex items-center justify-center p-4"
    >
      <div class="bg-white rounded-2xl p-8 max-w-md w-full">
        <h3 class="text-2xl font-bold text-gray-900 mb-4">Welcome to healthCues!</h3>
        <p class="text-gray-600 mb-6">
          To continue with full app features, you can either sign in or try the demo mode.
        </p>
        
        <div class="space-y-4">
          <button 
            @click="handleDemoMode"
            class="w-full btn-primary"
          >
            🎮 Try Demo Mode
          </button>
          
          <button 
            @click="handleSignIn"
            class="w-full btn-secondary"
          >
            🔐 Sign In / Create Account
          </button>
          
          <button 
            @click="handleDownload"
            class="w-full btn-secondary"
          >
            💾 Download Desktop App
          </button>
        </div>
        
        <div class="mt-6 pt-4 border-t border-gray-200">
          <p class="text-xs text-gray-500 text-center">
            healthCues is local-first. Your data stays on your device.
          </p>
        </div>
        
        <button 
          @click="showAuthModal = false"
          class="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
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
const showOverlay = ref(false)
const showAuthModal = ref(false)

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
}

async function expandToFullApp() {
  // Show authentication modal first
  showAuthModal.value = true
}

async function handleDemoMode() {
  showAuthModal.value = false
  
  // Trigger expansion animation
  isExpanded.value = true
  
  await nextTick()
  showOverlay.value = true
}

function handleSignIn() {
  // In real app, this would handle authentication
  alert('Sign in functionality would be implemented here')
  showAuthModal.value = false
}

function handleDownload() {
  // In real app, this would trigger download
  alert('Desktop app download would start here')
  showAuthModal.value = false
}

async function handleMinimize() {
  showOverlay.value = false
  
  // Wait for overlay animation
  await new Promise(resolve => setTimeout(resolve, 300))
  
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
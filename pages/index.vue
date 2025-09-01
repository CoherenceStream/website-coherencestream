<template>
  <div>
    <!-- BeeBee Chat Hero Section -->
    <section class="bg-white py-16 md:py-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <!-- CoherenceStream Branding -->
        <div class="mb-12">
          <p class="text-sm text-gray-500">
            Supporting peers build networks of gaia intelligences 
          </p>
        </div>

        <!-- BeeBee Chat Interface -->
        <div class="max-w-2xl mx-auto">
          <div class="mb-8">
            <h2 class="text-lg font-medium text-gray-700 mb-4">
              💬 Chat with BeeBee
            </h2>
          </div>

          <!-- Chat Input -->
          <form @submit.prevent="handleChatSubmit" class="mb-8">
            <div class="relative">
              <input
                v-model="chatQuery"
                type="text"
                placeholder="Ask about health networks, besearch, or building your own HOP network..."
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

          <!-- Suggested Prompts -->
          <div class="flex flex-wrap justify-center gap-3">
            <button
              v-for="prompt in suggestedPrompts"
              :key="prompt"
              @click="selectPrompt(prompt)"
              class="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
            >
              {{ prompt }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- healthCues Network Showcase -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
          <!-- healthCues Branding -->
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-pink-600 mb-4">
              healthCues
            </h2>
            <p class="text-lg text-gray-600 mb-6">
              A peer-to-peer health network for personalized wellness optimization
            </p>
          </div>
          
          <!-- Benefits Summary -->
          <div class="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">What you get:</h3>
              <ul class="space-y-3">
                <li class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <span class="text-gray-700">Run personalized n=1 experiments with your health data</span>
                </li>
                <li class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <span class="text-gray-700">Connect DIY devices (scales, wearables, blood tests)</span>
                </li>
                <li class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <span class="text-gray-700">No-code data visualization and analysis</span>
                </li>
                <li class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <span class="text-gray-700">Learn from peers with similar health goals</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Perfect for:</h3>
              <ul class="space-y-3">
                <li class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <span class="text-gray-700">Health enthusiasts who want data-driven insights</span>
                </li>
                <li class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <span class="text-gray-700">People managing chronic conditions</span>
                </li>
                <li class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <span class="text-gray-700">Biohackers and quantified self practitioners</span>
                </li>
                <li class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <span class="text-gray-700">Anyone wanting to own their health data</span>
                </li>
              </ul>
            </div>
          </div>
          
          <!-- JOIN Button -->
          <div class="text-center">
            <button @click="joinHealthCues" class="btn-primary text-lg px-8 py-4 mb-4">
              JOIN healthCues Network
            </button>
            <p class="text-sm text-gray-500">
              Start your personalized health journey today
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call-to-Action -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Ready to Build Your Network?</h2>
        <p class="text-xl text-gray-600 mb-8">
          Join the movement toward sovereign health data and peer-to-peer wellness optimization
        </p>
        <button @click="setupNetwork" class="btn-primary text-lg px-8 py-4">
          🏗️ Setup New Network
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Page meta
useHead({
  title: 'CoherenceStream - Supporting peers build health networks',
  meta: [
    { name: 'description', content: 'CoherenceStream supports peers building health networks. Chat with BeeBee to learn about besearch, HOP protocol, and join networks like healthCues.' }
  ]
})

// Chat functionality
const chatQuery = ref('')
const suggestedPrompts = [
  'What is besearch?',
  'How do I start a health network?',
  'What is HOP protocol?',
  'Tell me about healthCues'
]

// Chat handlers
function handleChatSubmit() {
  if (!chatQuery.value.trim()) return
  
  // Redirect to BeeBee with query parameter
  const encodedQuery = encodeURIComponent(chatQuery.value.trim())
  window.location.href = `https://beebee.coherencestream.com?q=${encodedQuery}`
}

function selectPrompt(prompt) {
  chatQuery.value = prompt
  handleChatSubmit()
}

// Action handlers
function joinHealthCues() {
  // Redirect to healthCues network
  window.location.href = 'https://healthcues.coherencestream.com'
}

function setupNetwork() {
  alert('Setup Network: Thanks for your interest! We\'ll be in touch about building your own health network.')
}
</script>
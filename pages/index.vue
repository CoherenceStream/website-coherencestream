<template>
  <div>
    <!-- BeeBee Chat Hero Section -->
    <section class="bg-gradient-to-b from-indigo-50 to-white py-16 md:py-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <!-- BeeBee Chat Interface with Transition -->
        <BeeBeeTransition />
      </div>
    </section>

    <!-- Transition Zone -->
    <div class="h-8 bg-gradient-to-b from-white to-gray-50"></div>
    <!-- network experiments on networks -->
    <section class="bg-gradient-to-b from-indigo-50 to-white py-16 md:py-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p class="text-xl font-bold text-indigo-500 mb-4">
            Join, contribute or evolve experiments
          </p>
          <!-- table -->
      </div>
    </section>

    <!-- healthCues Network Showcase -->
    <section class="py-16 bg-gray-50">
        <div class="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <!-- healthCues Branding -->
          <div class="text-center mb-8">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="mb-12">
                <p class="text-xl font-bold text-indigo-500 mb-4">
                  build networks of gaia intelligences
                </p>
              </div>
            <h2 class="text-3xl font-bold text-indigo-600 mb-4">
              healthCues - DIY health & Tiny devices
            </h2>
            <p class="text-lg text-gray-600 mb-6">
              A peer-to-peer health network for discovering and learning personalized health optimization
            </p>
          </div>
          
          <!-- Benefits Summary -->
          <div class="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Start contributing to the first gaia intelligence:</h3>
              <ul class="space-y-3">
                <li class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <span class="text-gray-700">Connect sovereign devices (scales, wearables, blood tests)</span>
                </li>
                <li class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <span class="text-gray-700">Join besearch cycles of science</span>
                </li>
                <li class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <span class="text-gray-700">Use beebee AI agent & no-code data visualization and analysis</span>
                </li>
                <li class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <span class="text-gray-700">Learn alone and learn with peers</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Perfect for:</h3>
              <ul class="space-y-3">
                <li class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <span class="text-gray-700">Sovereign data advocates</span>
                </li>
                <li class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <span class="text-gray-700">Those seeking to age well</span>
                </li>
                <li class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <span class="text-gray-700">Biohackers and quantified selfers</span>
                </li>
                <li class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <span class="text-gray-700">Support the creation of decentralized gaia intelligences</span>
                </li>
              </ul>
            </div>
          </div>
          
          <!-- JOIN Button -->
          <div class="text-center">
            <button @click="joinHealthCues" class="btn-indigo text-lg px-8 py-4 mb-4">
              JOIN healthCues Network
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Call-to-Action -->
    <!--<section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Ready to Build Your Network?</h2>
        <p class="text-xl text-gray-600 mb-8">
          Join the movement toward sovereign health data and peer-to-peer wellness optimization
        </p>
        <button @click="setupNetwork" class="btn-teal text-lg px-8 py-4">
          🏗️ Setup New Network
        </button>
      </div>
    </section>-->
  </div>
</template>

<script setup>
import BeeBeeTransition from '~/components/BeeBeeTransition.vue'

// Page meta
useHead({
  title: 'CoherenceStream - Supporting peers build health networks',
  meta: [
    { name: 'description', content: 'CoherenceStream supports peers building health networks. besearch, HOP protocol, and join networks like healthCues.' }
  ]
})

// Action handlers
function joinHealthCues() {
  // Redirect to healthCues network
  window.location.href = 'https://healthcues.coherencestream.com'
}

</script>
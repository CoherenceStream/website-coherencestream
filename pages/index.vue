<template>
  <div>
        <!-- Static Hero Section (BeeBee transition removed) -->
    <section class="bg-white py-16 md:py-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="mb-6">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 heading">Build Gaia Intelligence Networks</h1>
          <p class="text-lg text-gray-600">
            Supporting peers to build coherent, sovereign-data networks of living systems
          </p>
        </div>
        <div class="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <NuxtLink to="/networks" class="btn-primary">Explore Networks</NuxtLink>
          <NuxtLink to="/contact" class="btn-secondary">Contact Us</NuxtLink>
        </div>
      </div>
    </section>

    <!-- healthCues Network Showcase -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
          <!-- healthCues Branding -->
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-teal-600 mb-4">
              healthCues - DIY health
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
            <button @click="joinHealthCues" class="btn-teal text-lg px-8 py-4 mb-4">
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
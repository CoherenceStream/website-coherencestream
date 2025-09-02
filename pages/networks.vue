<template>
  <div class="py-16">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-8 text-center">HOP Networks</h1>
      
      <p class="text-xl text-gray-600 text-center mb-12">
        Explore the different types of networks we are supporting peers to build.
      </p>
        
      <!-- Real Networks -->
      <div>
        <h2 class="text-3xl font-bold text-teal-600 mb-8 text-center">Networks in Development</h2>
        
        <!-- healthCues - Featured Network -->
        <div class="card-pink mb-8">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div class="flex items-center mb-4">
                <span class="text-3xl mr-3">🏥</span>
                <h3 class="text-2xl font-bold text-indigo-600">healthCues - DIY health</h3>
                <span class="ml-3 px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                  In Development
                </span>
              </div>
              
              <p class="text-gray-700 mb-4">
                Can DIY devices provide the data quality needed for besearch approach to science?
                Can we discover personalized optimal health through distributed ML?
                Come join, help build and test the infrastructure for Wellness 3.0
              </p>
              
              <div class="space-y-2 mb-6">
                <div class="flex items-center space-x-2">
                  <span class="w-2 h-2 bg-teal-500 rounded-full"></span>
                  <span class="text-sm">Smart scales for body composition</span>
                </div>
                <div class="flex items-center space-x-2">
                  <span class="w-2 h-2 bg-teal-500 rounded-full"></span>
                  <span class="text-sm">Wearable device integration</span>
                </div>
                <div class="flex items-center space-x-2">
                  <span class="w-2 h-2 bg-teal-500 rounded-full"></span>
                  <span class="text-sm">Blood biomarker tracking</span>
                </div>
                <div class="flex items-center space-x-2">
                  <span class="w-2 h-2 bg-teal-500 rounded-full"></span>
                  <span class="text-sm">Mobile apps (iOS & Android)</span>
                </div>
              </div>
              
              <div class="flex space-x-4">
                <button class="btn-primary">interested to join?</button>
              </div>
            </div>
            
            <div class="text-center">
              <div class="bg-teal-50 rounded-2xl p-8">
                <h4 class="text-lg font-semibold mb-4">Peer-to-Peer Stack</h4>
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-sm">HOP Protocol</span>
                    <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">P2P</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-sm">BentoBoxDS</span>
                    <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Open Source</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-sm">Coherence Ledger</span>
                    <span class="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">ML</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-sm">Holepuch, hypercore & bare.js Runtime</span>
                    <span class="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">Mobile</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Future Networks -->
        <div class="grid md:grid-cols-2 gap-8">
          <div class="card border-2 border-dashed border-gray-300">
            <div class="text-center">
              <div class="text-3xl mb-4">🔬</div>
              <h3 class="text-xl font-bold mb-3 text-gray-600">Local resilience</h3>
              <p class="text-gray-500 mb-4">
                Set up a solar and powered computers that can be deployed anywhere.
              </p>
              <span class="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                Planning Phase
              </span>
            </div>
          </div>
          
          <div class="card border-2 border-dashed border-gray-300">
            <div class="text-center">
              <div class="text-3xl mb-4">🌱</div>
              <h3 class="text-xl font-bold mb-3 text-gray-600">Algotecture</h3>
              <p class="text-gray-500 mb-4">
                How do air quality and built environments affect health? Connecting sensors to besearch cycles.              </p>
              <span class="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                Concept Stage
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Call to Action -->
      <div class="mt-16 text-center">
        <h3 class="text-2xl font-bold text-gray-900 mb-4">Ready to Build Your Own Network?</h3>
        <p class="text-gray-600 mb-8">
          Interested in joining the DIY health network or building your own Gaia intelligence network? We provide a helping hand, setup assistance, and ongoing support or 
        </p>
        <p class="text-gray-600 mb-8">
          Start by <a href="/">chatting with beebee</a> to explore which network fits your interests.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contact" class="btn-green">
            Get Started
          </NuxtLink>
          <button class="btn-secondary">
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Networks - CoherenceStream',
  meta: [
    { name: 'description', content: 'Explore CoherenceStream\'s health and besearch networks, including our flagship healthCues apps.' }
  ]
})
</script>
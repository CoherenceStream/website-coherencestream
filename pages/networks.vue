<template>
  <div class="py-16">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-8 text-center">Our Networks</h1>
      
      <p class="text-xl text-gray-600 text-center mb-12">
        Explore the different types of networks we're building and the real implementations in progress.
      </p>
      
      <!-- Network Types -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-blue-600 mb-8 text-center">Network Types</h2>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="card text-center">
            <div class="text-4xl mb-4">🏥</div>
            <h3 class="text-xl font-bold mb-3">Health Networks</h3>
            <p class="text-gray-600">
              Personalized wellness optimization through DIY devices, 
              biomarker tracking, and n=1 experiments.
            </p>
          </div>
          
          <div class="card text-center">
            <div class="text-4xl mb-4">🔬</div>
            <h3 class="text-xl font-bold mb-3">Research Networks</h3>
            <p class="text-gray-600">
              Collaborative besearch communities for advancing 
              scientific knowledge through distributed studies.
            </p>
          </div>
          
          <div class="card text-center">
            <div class="text-4xl mb-4">🌱</div>
            <h3 class="text-xl font-bold mb-3">Wellness Networks</h3>
            <p class="text-gray-600">
              Community-driven networks focused on lifestyle 
              optimization and preventive health measures.
            </p>
          </div>
        </div>
      </div>
      
      <!-- Real Networks -->
      <div>
        <h2 class="text-3xl font-bold text-pink-600 mb-8 text-center">Networks in Development</h2>
        
        <!-- healthCues - Featured Network -->
        <div class="card-pink mb-8">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div class="flex items-center mb-4">
                <span class="text-3xl mr-3">🏥</span>
                <h3 class="text-2xl font-bold text-pink-600">healthCues</h3>
                <span class="ml-3 px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                  In Development
                </span>
              </div>
              
              <p class="text-gray-700 mb-4">
                Our flagship health network focusing on personalized wellness optimization 
                through DIY devices and besearch methodology.
              </p>
              
              <div class="space-y-2 mb-6">
                <div class="flex items-center space-x-2">
                  <span class="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span class="text-sm">Smart scales for body composition</span>
                </div>
                <div class="flex items-center space-x-2">
                  <span class="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span class="text-sm">Wearable device integration</span>
                </div>
                <div class="flex items-center space-x-2">
                  <span class="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span class="text-sm">Blood biomarker tracking</span>
                </div>
                <div class="flex items-center space-x-2">
                  <span class="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span class="text-sm">Mobile apps (iOS & Android)</span>
                </div>
              </div>
              
              <div class="flex space-x-4">
                <button class="btn-primary">Join Waitlist</button>
                <button class="btn-secondary">Learn More</button>
              </div>
            </div>
            
            <div class="text-center">
              <div class="bg-pink-50 rounded-2xl p-8">
                <h4 class="text-lg font-semibold mb-4">Technology Stack</h4>
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
                    <span class="text-sm">bare.js Runtime</span>
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
              <h3 class="text-xl font-bold mb-3 text-gray-600">Research Network</h3>
              <p class="text-gray-500 mb-4">
                Collaborative research platform for distributed scientific studies.
              </p>
              <span class="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                Planning Phase
              </span>
            </div>
          </div>
          
          <div class="card border-2 border-dashed border-gray-300">
            <div class="text-center">
              <div class="text-3xl mb-4">🌱</div>
              <h3 class="text-xl font-bold mb-3 text-gray-600">Wellness Community</h3>
              <p class="text-gray-500 mb-4">
                Community-driven wellness optimization and lifestyle tracking.
              </p>
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
          We provide consultation, setup assistance, and ongoing support for new HOP networks.
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
    { name: 'description', content: 'Explore CoherenceStream\'s health and research networks, including our flagship healthCues platform.' }
  ]
})
</script>
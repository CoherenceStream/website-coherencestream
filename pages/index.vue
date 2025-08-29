<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Welcome to CoherenceStream.
        </h1>
        <div class="text-lg md:text-xl text-gray-700 leading-relaxed space-y-4">
          <p>
            CoherenceStream — supporting peers build health networks 
          </p>
        </div>
      </div>
    </section>

    <!-- healthCues Network Showcase -->
    <section class="py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="card-pink">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-pink-600 mb-4">
              🏥 Networks: healthCues
            </h2>
            <p class="text-xl text-gray-700 mb-6">
              Personalized wellness optimization through DIY devices and besearch methodology
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-6 mb-8">
            <div class="text-center">
              <div class="text-2xl mb-2">⚖️</div>
              <h3 class="font-semibold text-gray-900">Smart Scales</h3>
              <p class="text-sm text-gray-600">Body composition tracking</p>
            </div>
            <div class="text-center">
              <div class="text-2xl mb-2">⌚</div>
              <h3 class="font-semibold text-gray-900">Wearables</h3>
              <p class="text-sm text-gray-600">Continuous monitoring</p>
            </div>
            <div class="text-center">
              <div class="text-2xl mb-2">🩸</div>
              <h3 class="font-semibold text-gray-900">Blood Tests</h3>
              <p class="text-sm text-gray-600">Biomarker analysis</p>
            </div>
          </div>
          
          <div class="space-y-3 mb-8">
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-pink-500 rounded-full"></div>
              <span class="text-gray-700">besearch cycles of n=1 experiments for personalized optimization</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-pink-500 rounded-full"></div>
              <span class="text-gray-700">No code charting</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-pink-500 rounded-full"></div>
              <span class="text-gray-700">Orchestrate health agents and learng peer to peer</span>
            </div>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/networks" class="btn-primary text-center">
              Learn More
            </NuxtLink>
            <button @click="joinWaitlist" class="btn-secondary text-center">
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- BeeBee Chat Interface -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BeeBeeChat />
      </div>
    </section>

    <!-- Call-to-Action -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
        <p class="text-xl text-gray-600 mb-8">
          Let us help you build your own peer-to-peer health network
        </p>
        <button @click="setupNetwork" class="btn-green text-center py-6 px-12 flex items-center space-x-3 mx-auto text-lg">
          <span class="text-2xl">🏗️</span>
          <span class="font-semibold">Setup New Network</span>
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
// Page meta
useHead({
  title: 'CoherenceStream - A Besearch Entity',
  meta: [
    { name: 'description', content: 'CoherenceStream is a besearch entity building peer-to-peer health networks using HOP and BentoBoxDS technology.' }
  ]
})

// Action handlers
function setupNetwork() {
  alert('Setup Network: We\'ll help you build your own HOP network. Contact us to get started!')
}

function joinWaitlist() {
  alert('healthCues Waitlist: Thanks for your interest! We\'ll notify you when healthCues mobile apps are available.')
}

function newsletter() {
  alert('Newsletter: Stay updated on our latest besearch developments and network launches!')
}

function diyWaitlist() {
  alert('DIY Waitlist: Join the waitlist for DIY device kits and setup guides!')
}
</script>
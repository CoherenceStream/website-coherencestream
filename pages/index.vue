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
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <NetworkExperimentsTable 
            :experiments="networkExperiments"
            :title="'network experiments'"
            :description="'Join, contribute or evolve experiments. Copy and add to BentoBoxDS.'"
          />
      </div>
    </section>

    <!-- healthCues Network Showcase -->
    <section class="py-16 bg-gray-40 bg-blue-100 p-4">
        <div class="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <!-- healthCues Branding -->
          <div class="text-center mb-8">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold text-indigo-600 mb-4">
              healthCues - DIY health & Tiny devices
            </h2>
            <p class="text-lg text-gray-600 mb-6">
              Bring coherence to health wisdom with peers by gaining and asserting sovereignty over data from tiny devices, apply a new form a science called Besearch and direct autonomous AI agents.
            </p>
          </div>
          
          <!-- Benefits Summary -->
          <div class="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">How to help:</h3>
              <ul class="space-y-3">
                <li class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <span class="text-gray-700">Buy a wearable, smart scale or add blood test data</span>
                </li>
                <li class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <span class="text-gray-700">Join besearch cycles of science</span>
                </li>
                <li class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <span class="text-gray-700">Direct beebee to perform machine learning</span>
                </li>
                <li class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <span class="text-gray-700">Learn alone and learn with peers</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Are you:</h3>
              <ul class="space-y-3">
                <li class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <span class="text-gray-700">A sovereign data advocate</span>
                </li>
                <li class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <span class="text-gray-700">Biohackers or quantified selfer</span>
                </li>
                <li class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <span class="text-gray-700">Looking to age well</span>
                </li>
                <li class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <span class="text-gray-700">Open to exploring new ways of conducting science.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <!-- JOIN Button -->
          <div class="text-center">
            <NuxtLink to="/networks" class="text-gray-700 hover:text-indigo-600 transition-colors text-xl font-semibold">
              Learn more
            </NuxtLink>
            <!--<button @click="joinHealthCues" class="btn-indigo text-lg px-8 py-4 mb-4">
              JOIN healthCues - download BentoBoxDS
            </button>-->
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
import NetworkExperimentsTable from '~/components/NetworkExperimentsTable.vue'


// Network experiments data
const networkExperiments = [
  {
    network: 'healthCues',
    name: 'Body composition',
    experiment: 'changes over time',
    nxpCode: 'hop: coming soon 1',
    learnMoreUrl: 'https://coherencestream.com/networks',
    learnMoreText: 'coherencestream.com/networks'
  },
  {
    network: 'healthCues',
    name: 'Body weight',
    experiment: 'changes over time',
    nxpCode: 'hop: coming soon 2',
    learnMoreUrl: 'https://coherencestream.com/networks',
    learnMoreText: 'coherencestream.com/networks'
  },
  {
    network: 'caleAI',
    name: 'Daisyworld',
    experiment: 'simulate simple planet',
    nxpCode: 'hop: coming soon 3',
    learnMoreUrl: 'https://caleai.com/',
    learnMoreText: 'caleai.com'
  }
]

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
  // window.location.href = 'https://healthcues.coherencestream.com'

}

</script>
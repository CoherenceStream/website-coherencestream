<template>
  <div class="py-16">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-8 text-center">HOP Networks</h1>
      
      <p class="text-xl text-gray-600 text-center mb-12">
        Explore the different types of networks being built by peers.
      </p>
        
      <!-- Peer to Peer Networks -->
      <div>
        <!-- healthCues - Featured Network -->
        <div class="card-pink mb-8">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div class="items-center mb-4">
                <span class="text-3xl mr-3">🏥</span>
                <h3 class="text-2xl font-bold text-indigo-600">healthCues - DIY health & Tiny devices</h3>
                <span class="ml-3 px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                  In Development
                </span>
                <p class="text-gray-700 mb-4 mt-2">
                Can tiny devices, fitness trackers to smart scales etc, provide the data quality needed for besearch approach to science?
                Can we discover personalized optimal health through distributed ML?
                Come join the path where we get a copy of our own data, then partner with device manufacturer to build direct storage personal datastores.
              </p>
              </div>
            </div>
            <div class="flex space-x-4">
              <button class="btn-primary" @click="openVideo()">Watch healthCues in action</button>
            </div>
            <video-player v-if="isModalOpen === true" @close-modal="openVideo()"></video-player>
          </div>
          <div class="w-full">
            <div class="flex">
              <div class="w-1/2 p-4 bg-gray-200">
                <p class="text-gray-700 mb-4 mt-2">
                  The process:  Buy one or all tiny devices.  This will provide a download copy of sensor data or API access. This will be the first stage before we seek to build our own white label device providing direct storage. With data then:
                </p>
                <div class="space-y-2 mb-6">
                  <div class="flex items-center space-x-2">
                    <span class="w-2 h-2 bg-teal-500 rounded-full"></span>
                    <span class="text-sm">Download BentoBoxDS</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span class="w-2 h-2 bg-teal-500 rounded-full"></span>
                    <span class="text-sm">Install mobile device app to grant access to data</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span class="w-2 h-2 bg-teal-500 rounded-full"></span>
                    <span class="text-sm">Copy network experiment you want to join</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span class="w-2 h-2 bg-teal-500 rounded-full"></span>
                    <span class="text-sm">Start besearch cycles</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span class="w-2 h-2 bg-teal-500 rounded-full"></span>
                    <span class="text-sm">Grant agents machine learning capability.</span>
                  </div>
                </div>
              </div>
              <div class="w-1/2 p-4 bg-gray-300">
                <div class="text-center">
                    <div class="bg-teal-50 rounded-2xl p-8">
                      <h4 class="text-lg font-semibold mb-4">Tiny devices</h4>
                      <div class="space-y-3">
                        <div class="flex items-center justify-between">
                          <span class="text-sm"><a href="https://www.withings.com/uk/en/body-scan" class="text-blue-500 hover:underline">Buy Withings smart scale</a> | <a href="https://www.withings.com/uk/en/withings-app" class="text-blue-500 hover:underline">Mobile app</a></span>
                          <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Export or API data</span>
                        </div>
                        <div class="flex items-center justify-between">
                          <span class="text-sm"><a href="https://www.polar.com/uk-en/vantage/m3" class="text-blue-500 hover:underline">Polar fitness tracker</a> | <a href="https://flow.polar.com/start" class="text-blue-500 hover:underline">Mobile app</a></span>
                          <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Export or API data</span>
                        </div>
                        <div class="flex items-center justify-between">
                          <span class="text-sm">Blood biomarkers</span>
                          <span class="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Export data</span>
                        </div>
                        <div class="flex items-center justify-between">
                          <span class="text-sm">Air quality</span>
                          <span class="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">coming soon</span>
                        </div>
                      </div>
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
                How does air quality and built environments affect health? Connecting sensors to besearch cycles.              </p>
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
        <NuxtLink to="/contact" class="font-semibold text-gray-700 hover:text-indigo-600 transition-colors">
          Contact us
        </NuxtLink>
        <!--
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
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import VideoPlayer from '~/components/videoPlayer.vue';

useHead({
  title: 'Networks - CoherenceStream',
  meta: [
    { name: 'description', content: 'Explore CoherenceStream\'s health and besearch networks, including our flagship healthCues apps.' }
  ]
})

const isModalOpen = ref(false)

  /** methods */
  const openVideo = () => {
    isModalOpen.value = !isModalOpen.value;
  }

</script>
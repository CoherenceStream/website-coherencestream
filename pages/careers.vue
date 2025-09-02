<template>
  <div class="py-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-8 text-center">Join the Movement</h1>
      
      <div class="text-center mb-12">
        <p class="text-xl text-gray-600 mb-6">
          Help build Gaia intelligence that serves life, not just technology
        </p>
        <p class="text-gray-700">
          We're looking for builders, researchers, and visionaries who want to create 
          peer-to-peer networks that put sovereignty back in people's hands.
        </p>
      </div>

      <!-- What We're Building -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold text-indigo-600 mb-6 text-center">What We're Building</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="card text-center">
            <div class="text-3xl mb-3">🏥</div>
            <h3 class="font-semibold mb-2">DIY Health Networks</h3>
            <p class="text-sm text-gray-600">Sovereign devices, personal data, besearch cycles</p>
          </div>
          <div class="card text-center">
            <div class="text-3xl mb-3">🤖</div>
            <h3 class="font-semibold mb-2">Tiny AI Agents</h3>
            <p class="text-sm text-gray-600">Personal intelligence that runs on your hardware</p>
          </div>
          <div class="card text-center">
            <div class="text-3xl mb-3">🌐</div>
            <h3 class="font-semibold mb-2">P2P Infrastructure</h3>
            <p class="text-sm text-gray-600">HOP Protocol, Coherence Ledgers, Open Source</p>
          </div>
        </div>
      </div>

      <!-- Ways to Contribute -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold text-emerald-600 mb-6 text-center">Ways to Contribute</h2>
        
        <div class="space-y-6">
          <div class="card">
            <div class="flex items-start space-x-4">
              <div class="text-2xl">🔬</div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold mb-3">Explore the Besearch Lab</h3>
                <p class="text-gray-600 mb-4">
                  Dive into our research agenda, meet the people and ideas inspiring us, 
                  and discover how Decentralized machine learning can revolutionize science.
                </p>
                <div class="flex space-x-3">
                  <a href="https://beebeehop.any.org/lab" target="_blank" class="btn-primary">
                    Visit the LAB
                  </a>
                  <a href="https://beebeehop.any.org/besearch-agenda" target="_blank" class="btn-secondary">
                    Research Agenda
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="flex items-start space-x-4">
              <div class="text-2xl">💬</div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold mb-3">Join the Community</h3>
                <p class="text-gray-600 mb-4">
                  Connect with builders, researchers, and health enthusiasts in our 
                  Discord community. Share ideas, get support, and collaborate on projects.
                </p>
                <a href="https://discord.gg/JhdkXX54Xk" target="_blank" class="btn-primary">
                  Join Discord
                </a>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="flex items-start space-x-4">
              <div class="text-2xl">🛠️</div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold mb-3">Contribute to Open Source</h3>
                <p class="text-gray-600 mb-4">
                  Help build the infrastructure for Gaia intelligence. Work on HOP Protocol, 
                  BentoBoxDS, or create your own network applications.
                </p>
                <div class="flex space-x-3">
                  <a href="https://github.com/healthscience/hop" target="_blank" class="btn-secondary">
                    HOP Protocol
                  </a>
                  <a href="https://github.com/healthscience/bentoboxds" target="_blank" class="btn-secondary">
                    BentoBoxDS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Who We're Looking For -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold text-indigo-600 mb-6 text-center">Who We're Looking For</h2>
        <div class="card text-center">
          <p class="text-lg text-gray-700 mb-4">
            <strong>Rare risk-takers</strong> who see the potential in Gaia intelligence and want to build it from the ground up.
          </p>
          <p class="text-gray-600">
            Whether you're a researcher, developer, entrepreneur, or visionary - if you're excited by 
            peer-to-peer networks, sovereign data, and tiny AI agents, we want to connect.
          </p>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center bg-blue-50 rounded-2xl p-8">
        <h3 class="text-2xl font-bold text-gray-900 mb-4">Ready to Shape the Future?</h3>
        <p class="text-gray-600 mb-6">
          Whether you're interested in full-time collaboration, part-time contribution, 
          or just want to explore the ideas, we'd love to connect.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contact" class="btn-green">
            Get in Touch
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Join the Movement - CoherenceStream',
  meta: [
    { name: 'description', content: 'Help build Gaia intelligence through peer-to-peer health networks, tiny AI agents, and open source infrastructure.' }
  ]
})
</script>
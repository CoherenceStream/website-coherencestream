<template>
  <div class="py-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-8 text-center">About</h1>
      
      <div class="prose prose-lg mx-auto">
        <h2 class="text-2xl font-bold text-blue-600 mb-4">Our Mission</h2>
          <p>
            CoherenceStream is a <strong>besearch entity</strong> — a way to bring coherence 
            to connecting humans with gaia intelligences with sovereign data from tiny devices.  
          </p>
          <p>
            We believe the best form of super intelligence to reach for is Gaia intelligences (<a href="https://beebeehop.any.org/a-tiny-hop-to-gaia-intelligence">dialogue</a>). Unlike the current race to build centralized artificial super intelligence (ASI) using massive data centers and energy-hungry AI models, Gaia intelligences aims for a decentralized, nature-inspired approach. Instead of relying on a few powerful corporations controlling AI, Gaia intelligences seeks to create a harmonious, interconnected system—one that integrates human wisdom, local communities, and the natural world.
          </p>
          <p>
            This is why we're building CoherenceStream — to give everyone access and ability to build gaia intelligences to look after their health, personal to family, community and local environment.
          </p>
          <p>
            We are <strong>peer-first</strong>, <strong>local-first</strong>, and 
            <strong>human-first</strong> as we enter the age of AGI and super intelligences.
          </p>

        <h2 class="text-2xl font-bold text-green-600 mb-4">Besearch cycles</h2>
        <p class="text-gray-700 mb-6">
           Besearch - taking the best of the past knowledge and searching out future possibilities that puts agency in individuals to control their own optimization while contributing to collective intelligence for all.
        </p>
        <div id="besearch-cycle diagram">
          <img src="/assets/besearch-diagram.png" alt="besearch cycles diagram" class="h-200 w-900 rounded-1">
        </div>
        <ul class="list-disc pl-6 text-gray-700 mb-6">
          <li>healthCues = discover and apply personalized health optimization</li>
          <li>Besearch = The new scientific methodology (n=1 network paradigm)</li>
          <li>Coherence Ledger = The ML infrastructure that makes it all work</li>
          <li>Sovereign Data = The foundation that enables true personalization</li>
        </ul>

        <h2 class="text-2xl font-bold text-green-600 mb-4">Sovereign Data Requires Sovereign Hardware</h2>
        <p class="text-gray-700 mb-6">
          True data sovereignty starts with owning your infrastructure. We're building tools and putting the work to partner with device manufacturers to make devices author data directly to a peers personal datastore. From fitness trackers to environmental sensors, we're working to ensure your devices serve you, not distant corporations.
        </p>

        <h2 class="text-2xl font-bold text-pink-600 mb-4">Open Source Foundations</h2>
        <p>
          Every tool we build is open source because Gaia intelligences requires transparency. You can inspect, modify, and improve the systems that serve your health and community.  CoherenceStream is committed to giving back, innovating and improving the open source projects:
        </p>
        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="card">
            <h3 class="text-xl font-semibold mb-3">HOP Protocol</h3>
            <p class="text-gray-600">
              Health Oracle Protocol <a href="https://github.com/healthscience/hop">github</a> enables peer-to-peer networks to built on trust through each peers establishing a coherence ledger.  This ledger provides the basis for decentalized machine learning and besearch cycles. Data flows through networks you participate in, not platforms that extract from you.
            </p>
          </div>
          <div class="card">
            <h3 class="text-xl font-semibold mb-3">BentoBoxDS</h3>
            <p class="text-gray-600">
              The BentoBoxDS toolkit <a href="https://github.com/healthscience/bentoboxds">github</a> that is the basis for all the healthCues applications, mobile to web.  Direct the agent, beebee, to join networks and build visualizations that reveal insight and learning.  Run BentoBoxDS on your own hardware and with your own data.
            </p>
          </div>
        </div>
        <h2 class="text-2xl font-bold text-blue-600 mb-4">Our Vision</h2>
        <p class="text-gray-700">
         We envision a future where individuals control their health data and contribute to collective intelligence - building the harmonious, interconnected Gaia intelligences that serves life, not just technology.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'About - CoherenceStream',
  meta: [
    { name: 'description', content: 'Learn about CoherenceStream\'s mission to build peer-to-peer health networks using besearch methodology.' }
  ]
})
</script>
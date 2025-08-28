<template>
  <div class="py-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-8 text-center">Get in Touch</h1>
      
      <div class="grid md:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div>
          <h2 class="text-2xl font-bold text-blue-600 mb-6">Contact Information</h2>
          
          <div class="space-y-6">
            <div class="card">
              <h3 class="text-xl font-semibold mb-3">🏗️ Setup a New Network</h3>
              <p class="text-gray-600 mb-4">
                Ready to build your own HOP network? We provide consultation, 
                setup assistance, and ongoing support.
              </p>
              <button class="btn-green">Schedule Consultation</button>
            </div>
            
            <div class="card">
              <h3 class="text-xl font-semibold mb-3">💬 General Inquiries</h3>
              <p class="text-gray-600 mb-4">
                Questions about besearch, our technology, or partnerships?
              </p>
              <button class="btn-blue">Send Message</button>
            </div>
            
            <div class="card">
              <h3 class="text-xl font-semibold mb-3">🔬 Research Collaboration</h3>
              <p class="text-gray-600 mb-4">
                Interested in collaborating on besearch methodology or 
                contributing to open source projects?
              </p>
              <button class="btn-primary">Collaborate</button>
            </div>
          </div>
        </div>
        
        <!-- Contact Form -->
        <div>
          <h2 class="text-2xl font-bold text-pink-600 mb-6">Send us a Message</h2>
          
          <form @submit.prevent="submitForm" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                v-model="form.name"
                type="text"
                id="name"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                v-model="form.email"
                type="email"
                id="email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
            </div>
            
            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <select
                v-model="form.subject"
                id="subject"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a topic</option>
                <option value="network-setup">Network Setup</option>
                <option value="healthcues">healthCues Interest</option>
                <option value="partnership">Partnership</option>
                <option value="research">Research Collaboration</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                v-model="form.message"
                id="message"
                rows="5"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>
            
            <button type="submit" class="w-full btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

useHead({
  title: 'Contact - CoherenceStream',
  meta: [
    { name: 'description', content: 'Get in touch with CoherenceStream for network setup, partnerships, or general inquiries.' }
  ]
})

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

function submitForm() {
  // In a real app, this would send to a backend
  alert(`Thank you ${form.value.name}! We'll get back to you soon about: ${form.value.subject}`)
  
  // Reset form
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}
</script>
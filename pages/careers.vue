<template>
  <div class="py-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-8 text-center">Careers</h1>
      
      <div class="grid md:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div>
          <h2 class="text-2xl font-bold text-blue-600 mb-6">All things TINY.</h2>
          
          <div class="space-y-6">
            <div class="card">
            </div>
            
            <div class="card">
              <h3 class="text-xl font-semibold mb-3">🔬 Besearch Collaboration</h3>
              <p class="text-gray-600 mb-4">
                Interested in collaborating on besearch methodology or 
                contributing to open source projects?
              </p>
              <button class="btn-primary">LAB</button>
            </div>
          </div>
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
<template>
  <header class="bg-white border-b border-gray-100 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo and Brand -->
        <div class="flex items-center space-x-3">
          <img src="/logo.png" alt="CoherenceStream Logo" class="h-10 w-10 rounded-full">
          <div>
            <h1 class="text-xl font-bold text-gray-900">CoherenceStream</h1>
            <p class="text-sm text-blue-600 italic">A Besearch Entity</p>
          </div>
        </div>
        
        <!-- Navigation -->
        <nav class="hidden md:flex space-x-8">
          <NuxtLink to="/networks" class="text-gray-700 hover:text-blue-600 transition-colors">
            Networks
          </NuxtLink>
          <NuxtLink to="/about" class="text-gray-700 hover:text-blue-600 transition-colors">
            About
          </NuxtLink>
          <NuxtLink to="/contact" class="text-gray-700 hover:text-blue-600 transition-colors">
            Contact
          </NuxtLink>
        </nav>
        
        <!-- Mobile menu button -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-gray-100">
        <div class="flex flex-col space-y-3">
          <NuxtLink to="/networks" class="text-gray-700 hover:text-blue-600 transition-colors">
            Networks
          </NuxtLink>
          <NuxtLink to="/about" class="text-gray-700 hover:text-blue-600 transition-colors">
            About
          </NuxtLink>
          <NuxtLink to="/contact" class="text-gray-700 hover:text-blue-600 transition-colors">
            Contact
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>
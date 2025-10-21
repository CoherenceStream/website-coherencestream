<template>
  <div class="relative">
    <!-- Download button -->
    <button 
      @click="toggleDropdown"
      class="text-gray-700 hover:text-indigo-600 transition-colors cursor-pointer"
    >
      DOWNLOAD
    </button>
    
    <!-- Dropdown overlay -->
    <Transition name="dropdown">
      <div 
        v-if="isOpen" 
        class="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50"
        @click.stop
      >
        <!-- Title -->
        <div class="text-center mb-4">
          <h3 class="font-semibold text-gray-900">Download BentoBoxDS</h3>
          <p class="text-sm text-gray-600">BETA experimental release</p>
        </div>
        
        <!-- Primary download button -->
        <button 
          @click="downloadForOS"
          class="w-full bg-indigo-600 text-white rounded-full py-2 px-4 text-sm font-semibold hover:bg-indigo-700 transition-colors mb-3 flex items-center justify-center space-x-2"
        >
          <svg v-if="detectedOS === 'windows'" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
          </svg>
          <svg v-else-if="detectedOS === 'mac'" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          <svg v-else class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          <span>{{ primaryButtonText }}</span>
        </button>
        
        <!-- Other platforms -->
        <div class="border-t border-gray-200 pt-3">
          <p class="text-xs text-gray-600 mb-2">Other platforms:</p>
          <div class="flex justify-between">
            <button 
              v-if="detectedOS !== 'windows'"
              @click="downloadFor('windows')"
              class="text-xs text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Windows
            </button>
            <button 
              v-if="detectedOS !== 'mac'"
              @click="downloadFor('mac')"
              class="text-xs text-indigo-600 hover:text-indigo-700 font-medium"
            >
              macOS
            </button>
            <button 
              v-if="detectedOS !== 'linux'"
              @click="downloadFor('linux')"
              class="text-xs text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Linux
            </button>
          </div>
        </div>
        
        <!-- Links -->
        <div class="border-t border-gray-200 mt-3 pt-3 flex justify-center space-x-3 text-xs">
          <a 
            href="#" 
            class="text-gray-500 hover:text-gray-700 transition-colors"
            target="_blank"
          >
            Experimental Beta
          </a>
          <span class="text-gray-300">|</span>
          <a 
            href="/terms" 
            class="text-gray-500 hover:text-gray-700 transition-colors"
            target="_blank"
          >
            Terms & Conditions
          </a>
        </div>
      </div>
    </Transition>
    
    <!-- Click outside to close -->
    <div 
      v-if="isOpen" 
      class="fixed inset-0 z-40" 
      @click="close"
    ></div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const isOpen = ref(false)
const detectedOS = ref('linux')

// Download URLs for different platforms
const downloadUrls = {
  windows: 'https://github.com/healthscience/bentoboxds/releases/download/v0.4.1/bentoboxds-0.4.1-win-setup.exe',
  mac: 'https://github.com/healthscience/bentoboxds/releases/download/v0.4.1/bentoboxds-0.4.1.dmg',
  linux: 'https://github.com/healthscience/bentoboxds/releases/download/v0.4.1/bentoboxds-0.4.1.AppImage'
}

const primaryButtonText = computed(() => {
  switch (detectedOS.value) {
    case 'windows':
      return 'Download for Windows'
    case 'mac':
      return 'Download for macOS'
    case 'linux':
      return 'Download for Linux x86_64'
    default:
      return 'Download'
  }
})

// Detect operating system
const detectOS = () => {
  const userAgent = window.navigator.userAgent.toLowerCase()
  const platform = window.navigator.platform.toLowerCase()
  
  if (platform.includes('win') || userAgent.includes('windows')) {
    detectedOS.value = 'windows'
  } else if (platform.includes('mac') || userAgent.includes('macintosh')) {
    detectedOS.value = 'mac'
  } else if (platform.includes('linux') || userAgent.includes('linux')) {
    detectedOS.value = 'linux'
  }
}

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const close = () => {
  isOpen.value = false
}

const downloadForOS = () => {
  downloadFor(detectedOS.value)
  close()
}

const downloadFor = (os) => {
  const url = downloadUrls[os]
  if (url) {
    window.open(url, '_blank')
  }
  close()
}

onMounted(() => {
  detectOS()
})
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
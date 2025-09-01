<template>
  <div class="healthcues-app">
    <!-- App Header -->
    <div class="app-header bg-white border-b border-gray-200 px-6 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <div class="text-2xl font-bold text-pink-600">healthCues</div>
          <div class="text-sm text-gray-500">Local-first health intelligence</div>
        </div>
        <div class="flex items-center space-x-4">
          <button 
            @click="handleDownloadDesktop"
            class="flex items-center space-x-2 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors font-medium"
          >
            <span>💾</span>
            <span>Download Desktop</span>
          </button>
          <button @click="$emit('minimize')" class="text-gray-400 hover:text-gray-600">
            ← Back to Chat
          </button>
        </div>
      </div>
    </div>

    <!-- Main App Interface -->
    <div class="app-body flex h-screen">
      <!-- Sidebar Navigation -->
      <div class="w-64 bg-gray-50 border-r border-gray-200">
        <nav class="p-4 space-y-2">
          <button 
            v-for="tab in tabs" 
            :key="tab.id"
            @click="activeTab = tab.id"
            :class="[
              'w-full text-left px-4 py-3 rounded-lg transition-colors',
              activeTab === tab.id 
                ? 'bg-pink-100 text-pink-700 font-medium' 
                : 'text-gray-600 hover:bg-gray-100'
            ]"
          >
            <span class="mr-3">{{ tab.icon }}</span>
            {{ tab.name }}
          </button>
        </nav>
      </div>

      <!-- Main Content Area -->
      <div class="flex-1 flex flex-col">
        <!-- BeeBee Chat Panel (Always Visible) -->
        <div class="bg-blue-50 border-b border-blue-200 p-4">
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
              B
            </div>
            <div class="flex-1">
              <div class="bg-white rounded-lg p-3 shadow-sm">
                <p class="text-sm text-gray-800">
                  {{ currentBeeBeeMessage }}
                </p>
              </div>
              <div class="mt-2">
                <input
                  v-model="chatInput"
                  @keyup.enter="sendMessage"
                  placeholder="Continue chatting with BeeBee..."
                  class="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Dynamic Content Based on Active Tab -->
        <div class="flex-1 p-6 overflow-auto">
          <!-- Dashboard Tab -->
          <div v-if="activeTab === 'dashboard'" class="space-y-6">
            <h2 class="text-2xl font-bold text-gray-900">Your Health Dashboard</h2>
            
            <!-- Quick Stats -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="card text-center">
                <div class="text-3xl font-bold text-pink-600">7</div>
                <div class="text-sm text-gray-600">Connected Devices</div>
              </div>
              <div class="card text-center">
                <div class="text-3xl font-bold text-green-600">42</div>
                <div class="text-sm text-gray-600">Days of Data</div>
              </div>
              <div class="card text-center">
                <div class="text-3xl font-bold text-blue-600">3</div>
                <div class="text-sm text-gray-600">Active Experiments</div>
              </div>
            </div>

            <!-- Recent Insights -->
            <div class="card">
              <h3 class="text-lg font-semibold mb-4">Recent Insights from BeeBee</h3>
              <div class="space-y-3">
                <div class="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">B</div>
                  <div class="text-sm text-gray-700">
                    Your sleep quality improved 15% after adjusting room temperature to 68°F
                  </div>
                </div>
                <div class="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">B</div>
                  <div class="text-sm text-gray-700">
                    Morning protein intake correlates with better afternoon energy levels
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Devices Tab -->
          <div v-if="activeTab === 'devices'" class="space-y-6">
            <h2 class="text-2xl font-bold text-gray-900">Connected Devices</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="card">
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center space-x-3">
                    <div class="text-2xl">⚖️</div>
                    <div>
                      <h3 class="font-semibold">Smart Scale</h3>
                      <p class="text-sm text-gray-600">Withings Body+</p>
                    </div>
                  </div>
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <p class="text-sm text-gray-600">Last sync: 2 hours ago</p>
              </div>

              <div class="card">
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center space-x-3">
                    <div class="text-2xl">⌚</div>
                    <div>
                      <h3 class="font-semibold">Fitness Tracker</h3>
                      <p class="text-sm text-gray-600">Fitbit Sense</p>
                    </div>
                  </div>
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <p class="text-sm text-gray-600">Last sync: 15 minutes ago</p>
              </div>

              <div class="card border-2 border-dashed border-gray-300">
                <div class="text-center py-8">
                  <div class="text-3xl mb-2">➕</div>
                  <h3 class="font-semibold mb-2">Add New Device</h3>
                  <p class="text-sm text-gray-600 mb-4">Connect more health devices to expand your data</p>
                  <button class="btn-primary">Connect Device</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Data Tab -->
          <div v-if="activeTab === 'data'" class="space-y-6">
            <h2 class="text-2xl font-bold text-gray-900">Your Sovereign Data</h2>
            
            <div class="card">
              <h3 class="text-lg font-semibold mb-4">Data Storage</h3>
              <div class="space-y-3">
                <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div class="flex items-center space-x-3">
                    <div class="text-xl">💾</div>
                    <div>
                      <div class="font-medium">Local Storage</div>
                      <div class="text-sm text-gray-600">Stored on your device</div>
                    </div>
                  </div>
                  <div class="text-sm text-green-600 font-medium">2.3 GB</div>
                </div>
                <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div class="flex items-center space-x-3">
                    <div class="text-xl">🔒</div>
                    <div>
                      <div class="font-medium">Encrypted Backup</div>
                      <div class="text-sm text-gray-600">Your keys, your data</div>
                    </div>
                  </div>
                  <div class="text-sm text-blue-600 font-medium">Enabled</div>
                </div>
              </div>
            </div>

            <div class="card">
              <h3 class="text-lg font-semibold mb-4">Export Options</h3>
              <div class="flex space-x-3">
                <button class="btn-secondary">Export CSV</button>
                <button class="btn-secondary">Export JSON</button>
                <button class="btn-secondary">Generate Report</button>
              </div>
            </div>
          </div>

          <!-- Networks Tab -->
          <div v-if="activeTab === 'networks'" class="space-y-6">
            <h2 class="text-2xl font-bold text-gray-900">Peer Networks</h2>
            
            <div class="card">
              <h3 class="text-lg font-semibold mb-4">Connected Networks</h3>
              <div class="space-y-3">
                <div class="flex items-center justify-between p-3 bg-pink-50 rounded-lg">
                  <div class="flex items-center space-x-3">
                    <div class="text-xl">🏥</div>
                    <div>
                      <div class="font-medium">healthCues Network</div>
                      <div class="text-sm text-gray-600">247 active peers</div>
                    </div>
                  </div>
                  <div class="text-sm text-pink-600 font-medium">Connected</div>
                </div>
              </div>
            </div>

            <div class="card">
              <h3 class="text-lg font-semibold mb-4">Available Networks</h3>
              <div class="space-y-3">
                <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div class="flex items-center space-x-3">
                    <div class="text-xl">🌱</div>
                    <div>
                      <div class="font-medium">Local Resilience Network</div>
                      <div class="text-sm text-gray-600">Environmental health tracking</div>
                    </div>
                  </div>
                  <button class="btn-secondary text-sm">Join Network</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Component props
defineEmits(['minimize'])

// Reactive data
const activeTab = ref('dashboard')
const chatInput = ref('')
const currentBeeBeeMessage = ref("Great! Now I can help you visualize your health data and connect devices. What would you like to explore first?")

const tabs = [
  { id: 'dashboard', name: 'Dashboard', icon: '📊' },
  { id: 'devices', name: 'Devices', icon: '📱' },
  { id: 'data', name: 'Data', icon: '💾' },
  { id: 'networks', name: 'Networks', icon: '🌐' }
]

// Methods
function sendMessage() {
  if (!chatInput.value.trim()) return
  
  // Mock BeeBee response based on current tab
  const responses = {
    dashboard: "I can see you're looking at your dashboard. Would you like me to explain any of these insights?",
    devices: "I notice you have some devices connected. Want to add a new one or analyze data from existing devices?",
    data: "Your data is stored locally and encrypted. Would you like me to help you analyze any specific metrics?",
    networks: "You're connected to the healthCues network. Interested in joining other peer networks?"
  }
  
  currentBeeBeeMessage.value = responses[activeTab.value] || "How can I help you with that?"
  chatInput.value = ''
}

function handleDownloadDesktop() {
  // In real app, this would trigger desktop app download
  alert('Desktop app download would start here - healthCues for Windows, Mac, and Linux')
}
</script>

<style scoped>
.healthcues-app {
  @apply bg-white rounded-lg shadow-2xl overflow-hidden;
  height: 80vh;
  max-height: 800px;
}

.app-header {
  @apply flex-shrink-0;
}

.app-body {
  height: calc(100% - 73px); /* Subtract header height */
}
</style>
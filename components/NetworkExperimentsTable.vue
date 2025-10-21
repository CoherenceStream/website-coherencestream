<template>
  <div class="network-experiments-table-wrapper">
    <div class="network-experiments-header">
      <h2 class="network-experiments-title">{{ title }}</h2>
      <p v-if="description" class="network-experiments-description">{{ description }}</p>
    </div>
    
    <div class="network-experiments-table-container">
      <table class="network-experiments-table">
        <thead>
          <tr>
            <th>Network</th>
            <th>Name</th>
            <th>Experiment</th>
            <th>NXP code</th>
            <th>Learn more</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(experiment, index) in experiments" :key="index">
            <td>{{ experiment.network }}</td>
            <td>{{ experiment.name }}</td>
            <td>{{ experiment.experiment }}</td>
            <td>
              <div class="nxp-code-cell">
                <span class="nxp-code-text">{{ experiment.nxpCode }}</span>
                <button 
                  @click="copyCode(experiment.nxpCode, index)"
                  class="copy-button"
                  :class="{ 'copied': copiedIndex === index }"
                >
                  <span v-if="copiedIndex === index" class="copy-icon">✓</span>
                  <span v-else class="copy-icon">📋</span>
                  <span class="copy-text">{{ copiedIndex === index ? 'COPIED' : 'COPY CODE' }}</span>
                </button>
              </div>
            </td>
            <td>
              <a 
                :href="experiment.learnMoreUrl" 
                target="_blank" 
                rel="noopener noreferrer"
                class="learn-more-link"
              >
                {{ experiment.learnMoreText || experiment.learnMoreUrl }}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Mobile view -->
    <div class="network-experiments-mobile">
      <div 
        v-for="(experiment, index) in experiments" 
        :key="index"
        class="mobile-card"
      >
        <div class="mobile-row">
          <span class="mobile-label">Network:</span>
          <span class="mobile-value">{{ experiment.network }}</span>
        </div>
        <div class="mobile-row">
          <span class="mobile-label">Name:</span>
          <span class="mobile-value">{{ experiment.name }}</span>
        </div>
        <div class="mobile-row">
          <span class="mobile-label">Experiment:</span>
          <span class="mobile-value">{{ experiment.experiment }}</span>
        </div>
        <div class="mobile-row">
          <span class="mobile-label">NXP code:</span>
          <div class="mobile-value">
            <span class="nxp-code-text">{{ experiment.nxpCode }}</span>
            <button 
              @click="copyCode(experiment.nxpCode, index)"
              class="copy-button-mobile"
              :class="{ 'copied': copiedIndex === index }"
            >
              {{ copiedIndex === index ? '✓ Copied' : '📋 Copy' }}
            </button>
          </div>
        </div>
        <div class="mobile-row">
          <span class="mobile-label">Learn more:</span>
          <a 
            :href="experiment.learnMoreUrl" 
            target="_blank" 
            rel="noopener noreferrer"
            class="learn-more-link"
          >
            {{ experiment.learnMoreText || 'View details →' }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'NetworkExperimentsTable',
  props: {
    title: {
      type: String,
      default: 'network experiments'
    },
    description: {
      type: String,
      default: ''
    },
    experiments: {
      type: Array,
      required: true,
      validator: (experiments) => {
        return experiments.every(exp => 
          exp.hasOwnProperty('network') &&
          exp.hasOwnProperty('name') &&
          exp.hasOwnProperty('experiment') &&
          exp.hasOwnProperty('nxpCode') &&
          exp.hasOwnProperty('learnMoreUrl')
        )
      }
    },
    theme: {
      type: Object,
      default: () => ({
        primaryColor: '#4F46E5', // indigo-600
        secondaryColor: '#14B8A6', // teal-500
        borderColor: '#E5E7EB', // gray-200
        textColor: '#111827', // gray-900
        linkColor: '#4F46E5' // indigo-600
      })
    }
  },
  setup() {
    const copiedIndex = ref(null)

    const copyCode = async (code, index) => {
      try {
        await navigator.clipboard.writeText(code)
        copiedIndex.value = index
        setTimeout(() => {
          copiedIndex.value = null
        }, 2000)
      } catch (err) {
        console.error('Failed to copy:', err)
        // Fallback for older browsers
        const textArea = document.createElement('textarea')
        textArea.value = code
        textArea.style.position = 'fixed'
        textArea.style.left = '-999999px'
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        try {
          document.execCommand('copy')
          copiedIndex.value = index
          setTimeout(() => {
            copiedIndex.value = null
          }, 2000)
        } catch (err) {
          console.error('Fallback copy failed:', err)
        }
        document.body.removeChild(textArea)
      }
    }

    return {
      copiedIndex,
      copyCode
    }
  }
}
</script>

<style scoped>
/* Main wrapper */
.network-experiments-table-wrapper {
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

/* Header */
.network-experiments-header {
  margin-bottom: 2rem;
  text-align: center;
}

.network-experiments-title {
  font-size: 1.875rem;
  font-weight: 700;
  color: v-bind('theme.textColor');
  margin-bottom: 0.5rem;
}

.network-experiments-description {
  font-size: 1.125rem;
  color: #6B7280;
}

/* Desktop table container */
.network-experiments-table-container {
  display: block;
  overflow-x: auto;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

/* Table styles */
.network-experiments-table {
  width: 100%;
  border-collapse: collapse;
}

.network-experiments-table thead {
  background-color: #F9FAFB;
  border-bottom: 1px solid v-bind('theme.borderColor');
}

.network-experiments-table th {
  padding: 0.75rem 1.5rem;
  text-align: left;
  font-size: 0.875rem;
  font-weight: 600;
  color: v-bind('theme.textColor');
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.network-experiments-table tbody tr {
  border-bottom: 1px solid v-bind('theme.borderColor');
}

.network-experiments-table tbody tr:hover {
  background-color: #F9FAFB;
}

.network-experiments-table td {
  padding: 1rem 1.5rem;
  font-size: 0.875rem;
  color: #374151;
}

/* NXP code cell */
.nxp-code-cell {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.nxp-code-text {
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.875rem;
  color: #374151;
}

/* Copy button */
.copy-button {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.75rem;
  background-color: v-bind('theme.primaryColor');
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.copy-button:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.copy-button.copied {
  background-color: v-bind('theme.secondaryColor');
}

.copy-icon {
  font-size: 0.875rem;
}

.copy-text {
  text-transform: uppercase;
  letter-spacing: 0.025em;
}

/* Learn more link */
.learn-more-link {
  color: v-bind('theme.linkColor');
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.learn-more-link:hover {
  text-decoration: underline;
}

/* Mobile view - hidden by default */
.network-experiments-mobile {
  display: none;
}

/* Mobile card styles */
.mobile-card {
  background-color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.mobile-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.5rem 0;
  border-bottom: 1px solid #F3F4F6;
}

.mobile-row:last-child {
  border-bottom: none;
}

.mobile-label {
  font-weight: 600;
  color: #6B7280;
  font-size: 0.875rem;
  min-width: 100px;
}

.mobile-value {
  flex: 1;
  text-align: right;
  color: #374151;
  font-size: 0.875rem;
}

.copy-button-mobile {
  margin-left: 0.5rem;
  padding: 0.25rem 0.5rem;
  background-color: v-bind('theme.primaryColor');
  color: white;
  border: none;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  cursor: pointer;
  white-space: nowrap;
}

.copy-button-mobile.copied {
  background-color: v-bind('theme.secondaryColor');
}

/* Responsive breakpoint */
@media (max-width: 768px) {
  .network-experiments-table-container {
    display: none;
  }
  
  .network-experiments-mobile {
    display: block;
  }
  
  .network-experiments-header {
    text-align: left;
    padding: 0 1rem;
  }
  
  .network-experiments-title {
    font-size: 1.5rem;
  }
  
  .network-experiments-description {
    font-size: 1rem;
  }
}

/* Print styles */
@media print {
  .copy-button,
  .copy-button-mobile {
    display: none;
  }
}
</style>
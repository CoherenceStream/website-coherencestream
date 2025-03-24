<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-row class="hero-section">
        <v-col cols="12">
          <div class="hero-content">
            <h1 class="text-h3 font-weight-bold mb-4">
              healthCues
            </h1>
            <p class="text-h5 text-medium-emphasis mb-8">
              Grounded, Practical, Sovereign
            </p>
          </div>
          <div v-if="askbeebee" class="chat-container">
            <beebee-converse></beebee-converse>
          </div>
        </v-col>
      </v-row>

      <v-row class="demo-section">
        <v-col cols="12">
          <div class="section-header">
            <h2 class="text-h4 font-weight-bold mb-4">
              Newsletters & healthCues
            </h2>
            <p class="section-text mb-8">
              Put content in context and make it practical and actionable.
            </p>
          </div>
          <div class="video-container">
            <v-img
              :src="healthcuesToolkit"
              alt="healthCues toolkit"
              height="600"
              @click="showVideo = true"
            >
              <template v-slot:placeholder>
                <v-progress-circular
                  indeterminate
                  color="primary"
                ></v-progress-circular>
              </template>
              <v-btn
                icon="mdi-play"
                size="x-large"
                color="primary"
                class="play-button"
              ></v-btn>
            </v-img>
          </div>
        </v-col>
      </v-row>

      <v-row class="features-section">
        <v-col cols="12">
          <div class="section-header">
            <h2 class="text-h4 font-weight-bold mb-4">
              Features of healthCues
            </h2>
            <p class="section-text mb-8">
              Grounded, Practical, Sovereign
            </p>
          </div>
          <v-row>
            <v-col
              v-for="feature in features"
              :key="feature.title"
              cols="12"
              md="4"
              class="feature-card"
            >
              <div class="feature-content">
                <h3 class="text-h6 font-weight-bold mb-2">
                  {{ feature.title }}
                </h3>
                <ul class="feature-list">
                  <li
                    v-for="item in feature.items"
                    :key="item"
                    class="feature-item"
                  >
                    {{ item }}
                  </li>
                </ul>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>

  <v-dialog
    v-model="showVideo"
    width="80%"
    max-width="1200"
    content-class="video-dialog"
  >
    <v-card class="video-card">
      <v-card-title class="d-flex justify-space-between align-center">
        <h3 class="text-h5">Smart newsletters & healthCues</h3>
        <v-btn
          icon
          @click="showVideo = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <iframe
          width="100%"
          height="500"
          :src="demoVideoUrl"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BeebeeConverse from '@/components/products/beebee/chatConverse.vue'
import logoHC from '@/assets/logo.png'
import healthcuesToolkit from '@/assets/healthcues-toolkit.png'

const router = useRouter()
const hover = ref(null)
const showVideo = ref(false)
const askbeebee = ref(true)

const demoVideoUrl = 'https://www.youtube.com/embed/gsftHkr6--g?si=YkoST99wttMhzL8B'

const features = [
  {
    title: 'Grounded content',
    items: [
      'Content put in context',
      'Holistic cycles & spirals',
      'Self verify knowledge'
    ]
  },
  {
    title: 'Practical agents',
    items: [
      'Human directed agents',
      'Analytical insights',
      'Practical recommendations'
    ]
  },
  {
    title: 'Sovereign',
    items: [
      'Local first',
      'Data ownership & control',
      'Privacy preserving'
    ]
  }
]

const navigateTo = (route) => {
  router.push(route)
}
</script>

<style scoped>
:root {
  --jigsaw-color: #0ea5e9;
  --jigsaw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

/* Hero Section */
.hero-section {
  position: relative;
  padding: 2rem 0;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero-title {
  font-size: clamp(3rem, 7vw, 5rem);
  line-height: 1.2;
  margin-bottom: 2rem;
  font-weight: 700;
  color: #1e293b;
}

.hero-subtitle {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  line-height: 1.45;
  margin-bottom: 3rem;
  font-weight: 500;
  color: #475569;
}

/* Section Headers */
.section-header {
  position: relative;
  padding: 1rem;
  margin-bottom: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.section-header:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.section-title {
  color: #1e293b;
  margin-bottom: 2rem;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.section-text {
  color: #475569;
  font-size: 1.125rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;
  font-weight: 400;
  text-align: center;
}

.chat-button {
  color: white;
  background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
  text-transform: none;
  font-weight: 500;
  letter-spacing: normal;
  padding: 0.75rem 2.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  position: relative;
  overflow: hidden;
}

.chat-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.chat-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  background: linear-gradient(135deg, #0369a1 0%, #075985 100%);
}

.chat-button:hover::before {
  opacity: 1;
}

.chat-container {
  margin-top: 2rem;
  padding: 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.chat-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(14, 165, 233, 0.05) 0%, rgba(2, 132, 199, 0.05) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.chat-container:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.05);
}

.chat-container:hover::before {
  opacity: 1;
}

.video-container {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 16px;
  transition: all 0.3s ease;
}

.video-container:hover {
  transform: scale(1.02);
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(14, 165, 233, 0.9);
  color: white;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  transition: all 0.3s ease;
}

.play-button:hover {
  transform: translate(-50%, -50%) scale(1.1);
  background: rgba(2, 132, 199, 0.9);
}

.feature-card {
  padding: 2.5rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(14, 165, 233, 0.05) 0%, rgba(2, 132, 199, 0.05) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.05);
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-content {
  max-width: 300px;
  margin: 0 auto;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-item {
  color: #64748b;
  margin-bottom: 1rem;
  font-size: 0.95rem;
  font-weight: 400;
  position: relative;
  padding-left: 1.5rem;
}

.feature-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  background: #0ea5e9;
  border-radius: 50%;
  transition: transform 0.3s ease;
}

.feature-item:hover::before {
  transform: translateY(-50%) scale(1.2);
}

@media (max-width: 600px) {
  .hero-section {
    padding: 6rem 0;
  }

  .hero-title {
    font-size: clamp(2rem, 8vw, 4rem);
  }

  .hero-subtitle {
    font-size: clamp(1rem, 5vw, 2rem);
  }

  .hero-button {
    padding: 1rem 3rem;
    font-size: 1rem;
  }

  .button-container {
    padding: 1rem;
  }

  .chat-section,
  .demo-section,
  .features-section,
  .about-section {
    padding: 4rem 0;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .section-text {
    font-size: 1rem;
    padding: 0 1rem;
  }

  .chat-container {
    margin-top: 1rem;
    padding: 1.5rem;
  }

  .feature-card {
    padding: 1.5rem;
  }
}
</style>
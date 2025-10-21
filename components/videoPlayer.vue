<template>
  <div>
    <!-- Modal -->
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-bold">healthCues Video</h2>
          <button @click="closeModal()" class="text-gray-500 hover:text-gray-700">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div class="aspect-w-12 aspect-h-9">
          <iframe
            :src="videoUrl"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'


  const videoUrl = ref('https://rumble.com/embed/v6yefxs/')
  // videoUrl: '<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;"><iframe src="https://rumble.com/embed/v6yefxs/" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen scrolling="no" allow="encrypted-media *; fullscreen *;"></iframe></div>',

  const emit = defineEmits(['close-modal']);

  /** methods */
  const closeModal = () => {
    emit('close-modal');
  };

</script>

<style>
/* Add any additional styles here */
</style>
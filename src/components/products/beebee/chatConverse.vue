<template>
  <div id="beebee-oracle">
    <div id="beebee-converse">
      <v-text-field
        label="Ask the health oracle anything"
        variant="outlined"
        density="compact"
        hide-details
        single-line
      ></v-text-field>
    </div>
    <div id="beebee-button">
      <v-btn>beebee</v-btn>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

#beebee-oracle {
  display: grid;
  grid-template-columns: 7fr 1fr;
}

</style>
<template>
  <div class="text-center">
    <v-menu
      open-on-hover
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Support
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <router-link style="text-decoration: none; color: inherit;" to="/support">
            <v-list-item-title to="/support">{{ item.title }}</v-list-item-title>
          </router-link>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { title: 'Setup' },
        { title: 'BentoBox-DS' },
        { title: 'Library' },
        { title: 'HOP' },
      ],
    }),
  }
</script>
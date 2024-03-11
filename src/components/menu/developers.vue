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
          Developers
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <router-link style="text-decoration: none; color: inherit;" to="/developers">
            <v-list-item-title to="/developers">{{ item.title }}</v-list-item-title>
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
        { title: 'Community' },
        { title: 'Documentation' },
        { title: 'Code' },
      ],
    }),
  }
</script>
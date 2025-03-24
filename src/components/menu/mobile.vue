<template>
  <v-app-bar
    color="primary"
    prominent
    class="d-sm-none"
  >
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>CoherenceStream</v-toolbar-title>
    <v-spacer></v-spacer>
    <!--<v-btn variant="text" icon="mdi-magnify"></v-btn>
    <v-btn variant="text" icon="mdi-filter"></v-btn>-->
    <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
  </v-app-bar>
  <v-navigation-drawer
    v-model="drawer"
    location="top"
    temporary
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :to="item.value"
          router
          :key="i"
        >
          <v-list-item-title
             v-text="item.title"
             >
          </v-list-item-title>
        </v-list-item>
      </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
      items: [
        {
          title: 'Home',
          value: '/',
        },
        {
          title: 'Products',
          value: 'beebee',
        },
        {
          title: 'Usecaes',
          value: 'content-newsletter',
        },
        {
          title: 'Developers',
          value: 'developers',
        },
        {
          title: 'Support',
          value: 'support',
        },
        {
          title: 'Company',
          value: 'company',
        },
      ],
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>
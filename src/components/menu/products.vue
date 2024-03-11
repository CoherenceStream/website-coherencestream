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
          Products
        </v-btn>
      </template>

      <v-list>
        <v-list-item style="text-decoration: none; color: inherit;"
          v-for="(item, index) in items"
          :key="index"
          @click="menuSelect(item.route)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { title: 'Health', route: 'health' },
        { title: 'Creators', route: 'creators' },
        { title: 'Practices', route: 'practices' },
        { title: 'E-commerce', route: 'ecommerce' },
        { title: 'Payments', route: 'payments' },
      ],
    }),
    methods: {
      menuSelect (sl) {
        this.$router.push('/' + sl)
      }
    }
  }
</script>

<style scoped>

</style>
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
          Usecases
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
        { title: 'Influencers', route: 'creators' },
        { title: 'Rapamycin', route: 'rapamycin' },
        { title: 'Practitioners', route: 'health' },
        { title: 'E-commerce', route: 'ecommerce' } /*,
        { title: 'DataScience', route: 'datascience' },
        { title: 'Devices & sensors', route: 'sensordata' },*/
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
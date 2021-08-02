<template>
  <div>
    <Main />
  </div>
</template>

<script>
import Main from '@/components/partials/main.vue'

export default {
  components: {
    Main,
  },
  async created() {
    const { coords } = await this.$CapacitorGeolocation.getCurrentPosition()
    this.$store.commit('SET_GEOLOCATION', coords)
  },
}
</script>

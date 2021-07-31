<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/partials/header.vue'
import Footer from '@/components/partials/footer.vue'
export default {
  components: {
    Header,
    Footer,
  },
}
</script>

<style>
body {
  font-family: 'Source Sans Pro', sans-serif;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 67%,
    rgba(0, 212, 255, 1) 100%
  );
  color: #fff;
  line-height: 1.5;
  letter-spacing: 0em;
}
</style>

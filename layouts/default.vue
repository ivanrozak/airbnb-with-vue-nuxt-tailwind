<template>
  <div class='font-sans font-medium'>
  <navbar></navbar>
  <Nuxt />

  </div>
</template>

<script>
import Navbar from '~/components/TheNavBar';
export default {
  name: 'default',
  components:{Navbar},
}
</script>

<style>
@import "~/assets/css/components.css";
</style>

<template>
  <figure class='relative overflow-hidden w-1/5 rounded-xl h-60-vh shadow-lg transform transition hover:-translate-y-2'>
    <img
      :src='url'
      :alt='`image in ${city}`'
      class='h-full absolute w-full h-full object-cover'
    >
    <figcaption class='absolute bottom-0 p-4 text-white text-3xl'>
      <div class='font-bold'>{{ city }}</div>
      <div class='uppercase font-thin'>{{ country }}</div>
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: 'cardCity',
  props: {
    country: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>

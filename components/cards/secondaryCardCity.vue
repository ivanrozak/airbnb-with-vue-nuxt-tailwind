<template>
  <div
    class='flex items-center w-full rounded-lg overflow-hidden'>
    <figure v-for='location in locations' class='relative h-80 w-1/2'>
      <img :src='location.url' :alt='location.city' class='absolute w-full h-full'>
      <figcaption class='absolute bottom-0 p-2 w-full'>
        <h3 class='text-md text-white text-center text-3xl'>
          <span class='font-semibold'>
          {{ location.city }}
          </span>
          <span class='block uppercase font-thin'>
            {{ location.country }}
          </span>
        </h3>
      </figcaption>

    </figure>
  </div>
</template>

<script>
export default {
  name: 'secondaryCardCity',
  components: {},
  data() {
    return {
      locations: [
        {
          lat: 48.856614,
          lng: 2.3522219,
          city: 'Paris',
          country: 'France',
          url: 'https://images.unsplash.com/photo-1564594736624-def7a10ab047?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
        }, {
          lat: 48.856614,
          lng: 2.3522219,
          city: 'Paris',
          country: 'France',
          url: 'https://images.unsplash.com/photo-1564594736624-def7a10ab047?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
        }
      ]
    }
  }
}
</script>

<style scoped>
.h-80 {
  height: 30rem;
}
</style>

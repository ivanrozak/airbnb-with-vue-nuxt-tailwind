<template>
  <figure class='rounded-lg overflow-hidden shadow-lg bg-white transform transition hover:-translate-y-2'>
    <img :src='img' :alt='title' class='w-full'>
    <figcaption class='p-6'>
      <div class='flex space-x-2 items-center'>
        <svg class='fill-current h-6 w-6 text-yellow-400'>
          <use href='~/assets/svg/sprite.svg#icon-star-full' />
        </svg>
        <span>{{ rating }}</span>
        <span class='text-gray-500'>({{ feedbackNumber }})</span>
      </div>
      <h3 class='font-bold text-2xl my-4'>
        {{ title }}
      </h3>
      <div class='text-gray-500 my-4'>
        <span class='text-gray-900 font-bold text-md'>${{ price }} </span> / night
      </div>
      <div class='flex justify-between items-center'>
        <svg class='fill-current h-6 w-6 text-brand'>
          <use href='~/assets/svg/sprite.svg#icon-home'></use>
        </svg>
        <div class='flex space-x-1 items-center'>
          <svg class='fill-current h-6 w-6 text-brand'>
            <use href='~/assets/svg/sprite.svg#icon-users'></use>
          </svg>
          <span> {{ guest }} guests</span>
        </div>
      </div>
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: 'cardHome',
  props: {
    rating: {
      type: Number,
      required: true
    },
    feedbackNumber: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    guest: {
      type: Number,
      required: true
    },
    img: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
</style>

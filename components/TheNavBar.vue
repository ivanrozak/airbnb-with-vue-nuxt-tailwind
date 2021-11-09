<template>
  <header class='px-10 py-6'>
    <nav class='flex justify-between items-center'>
      <div>
        <img src='~/assets/svg/logo.svg' alt='airbnb logo' class='h-20'>
      </div>
      <div class='space-x-4 flex items-center'>
        <input type='text' class='text-gray-800 shadow-sm form-input border-2 border-gray-200 rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:border-transparent focus:ring-brand transition focus:ring-offset-2' placeholder='Enter City'>
        <input type='date' class='text-gray-800 shadow-sm form-date border-2 rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:border-transparent focus:ring-brand transition focus:ring-offset-2'>
        <input type='date' class='text-gray-800 shadow-sm form-date border-2 rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:border-transparent focus:ring-brand transition focus:ring-offset-2'>
        <button type='submit' class='btn'>
          <svg class='fill-current text-white w-8 h-8'>
            <use href='~/assets/svg/sprite.svg#icon-search'>
            </use>
          </svg>
        </button>
      </div>
        <a href='#' class='inline-flex px-5 py-3 items-center space-x-2 btn'>
          <svg class='fill-current text-white h-7 w-7'>
            <use href='~/assets/svg/sprite.svg#icon-enter'></use>
          </svg>
          <span class='text-white'>
          sign up
        </span>
        </a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
</style>

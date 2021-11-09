<template>
  <h2 class='text-4xl font-bold text-gray-600 mb-12'>{{title}}</h2>
</template>

<script>
export default {
  name: 'titleBase',
  props: {
    title: {
      type: String,
      required: true
    }
  }

}
</script>

<style scoped>
</style>

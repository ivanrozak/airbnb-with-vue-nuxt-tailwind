<template>
  <div>
    <div class='px-10 py-12'>
      <figure class='relative mx-auto h-60-vh rounded-2xl overflow-hidden w-full'>
        <img
          src='https://images.unsplash.com/photo-1501855901885-8b29fa615daf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80'
          class='w-full h-full object-cover'
          alt='home cover image'>
        <figcaption class='font-bold w-full text-center absolute text-white bottom-10 text-2xl capitalize text-shadow'>
          - Settle in somewhere new. Discover stays to live, work, or just relax.
        </figcaption>
      </figure>
    </div>
    <section class='py-12 px-10'>
      <title-base title='Premium Listings'></title-base>
      <div class='w-full justify-between flex'>
        <card-city v-for='location in locations' :url='location.url' :city='location.city' :country='location.country'
                   :key='location.city'></card-city>
      </div>
    </section>
    <section class='py-12 bg-gray-100 px-10'>
      <title-base title='Recently Added'></title-base>
      <div class='cards-home flex justify-between items-center'>
        <card-home v-for='home in homes' :key='home.id' class='w-1/4'
                   :feedback-number='home.feedbackNumber'
                   :title='home.title'
                   :rating='home.rating'
                   :guest='home.guest'
                   :img='home.img'
                   :price='home.price'
        ></card-home>
      </div>
    </section>
    <section class='py-12 px-10'>
      <secondary-card-city></secondary-card-city>
    </section>
  </div>
</template>

<script>
import titleBase from '~/components/titleBase'
import cardCity from '~/components/cards/cardCity'
import cardHome from '~/components/cards/cardHome'
import {v4} from 'uuid';
import secondaryCardCity from '~/components/cards/secondaryCardCity'
export default {
  components: {
    titleBase, cardCity, cardHome,secondaryCardCity
  },
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
        }, {
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
      ],
      homes: [{
         id:v4(),
        rating: 4.2,
        feedbackNumber: 123,
        title: 'A Short Walk From Paradise',
        price: 89,
        guest: 2,
        img: 'https://res.cloudinary.com/masteringnuxt/image/upload/w_360,h_175/house-d1_ajnv57'
      }, {
        id:v4(),
        rating: 4.2,
        feedbackNumber: 123,
        title: 'A Short Walk From Paradise',
        price: 89,
        guest: 2,
        img: 'https://res.cloudinary.com/masteringnuxt/image/upload/w_360,h_175/house-d1_ajnv57'
      }, {
         id:v4(),
        rating: 4.2,
        feedbackNumber: 123,
        title: 'A Short Walk From Paradise',
        price: 89,
        guest: 2,
        img: 'https://res.cloudinary.com/masteringnuxt/image/upload/w_360,h_175/house-d1_ajnv57'
      }]
    }
  }
}
</script>
<style>

</style>

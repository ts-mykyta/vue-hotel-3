<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Header from '../components/HeaderLayout.vue'
import Footer from '../components/FooterLayout.vue'

const hotelsData = [
  {
    id: 1,
    imgUrl: "/assets/img/test_hotel.jpg",
    hotelName: "Bellagio Resort & Casino, Las Vegas",
    hotelDescr: "Bellagio Resort & Casino, Las Vegas, Nevada: Immerse yourself in the heart of Las Vegas luxury at Bellagio Resort & Casino, an iconic landmark famed for its exquisite gardens and breathtaking water fountains. Step onto the sprawling casino floor, a haven for players of all levels with classic table games, cutting-edge slots, and a dedicated poker room. Unwind in their opulent accommodations, featuring plush furnishings and breathtaking views of the vibrant Las Vegas Strip.",
    siteLink: "https://bellagio.mgmresorts.com/en.html?ecid=GMB_BE_HO"
  },
]

const route = useRoute()

const hotelData = ref(null)

const loadHotelData = (hotelId) => {
  hotelData.value = hotelsData.find(hotel => hotel.id === parseInt(hotelId))
}

watch(
  () => route.params.id,
  (newId) => {
    loadHotelData(newId)
  }
)

onMounted(() => {
  loadHotelData(route.params.id)
})
</script>

<template>
  <Header />
  <main class="main">
    <div class="container">
        <div class="details" v-if="hotelData">
            <h1 class="details__title">{{ hotelData.hotelName }}</h1>

            <div class="details__img">
                <img :src="hotelData.imgUrl" :alt="hotelData.hotelName">
            </div>

            <p class="details__descr">{{ hotelData.hotelDescr }}</p>

            <a class="details__btn" :href="hotelData.siteLink">Book Now</a>
        </div>
    </div>
  </main>
  <Footer />
</template>

<style scoped lang="sass">
@import "../assets/styles/main"

.main
    padding: 50px 0

.details
    background: $white
    padding: 10px
    @media (min-width: 768px)
        padding: 80px

    &__title
        font-family: "Alegreya SC", sans-serif
        font-size: 34px
        font-weight: 500
        line-height: 51px
        text-align: center
        margin-bottom: 10px

    &__img
        margin: 0 auto
        width: 100%
        max-width: 800px
        margin-bottom: 20px
        img
            width: 100%
            height: 100%
            object-fit: cover

    &__descr
        font-size: 16px
        font-weight: 400
        line-height: 24px
        margin-bottom: 20px

    &__btn
        display: flex
        justify-content: center
        align-items: center
        max-width: 200px
        margin: 0 auto
        background: $blue
        color: $white
        border-radius: 20px
        padding: 15px 0
        transition: $transition

        &:hover
            opacity: .8

</style>
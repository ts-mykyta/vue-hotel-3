<script setup>
import Header from '../../components/HeaderLayout.vue';
import Footer from '../../components/FooterLayout.vue';
import PromoLayout from '../../components/blocks/PromoLayout.vue';
import CatalogLayout from '../../components/blocks/CatalogLayout.vue';


const hotelsData = [
    {
        "id": 1,
        "imgUrl": "/assets/img/test_hotel.jpg",
        "hotelName": "Bellagio Resort & Casino, Las Vegas",
        "hotelDescr": "Bellagio Resort & Casino, Las Vegas, Nevada: Immerse yourself in the heart of Las Vegas luxury at Bellagio Resort & Casino, an iconic landmark famed for its exquisite gardens and b…",
        "hotelLinkDetail": "usa/hotel/1",
        "hotelLink": "some_url"
    },
    {
        "id": 1,
        "imgUrl": "/assets/img/test_hotel.jpg",
        "hotelName": "Bellagio Resort & Casino, Las Vegas",
        "hotelDescr": "Bellagio Resort & Casino, Las Vegas, Nevada: Immerse yourself in the heart of Las Vegas luxury at Bellagio Resort & Casino, an iconic landmark famed for its exquisite gardens and b…Bellagio Resort & Casino, Las Vegas, Nevada: Immerse yourself in the heart of Las Vegas luxury at Bellagio Resort & Casino, an iconic landmark famed for its exquisite gardens and b",
        "hotelLinkDetail": "usa/hotel/1",
        "hotelLink": "some_url"
    },
    {
        "id": 1,
        "imgUrl": "/assets/img/test_hotel.jpg",
        "hotelName": "Bellagio Resort & Casino, Las Vegas",
        "hotelDescr": "Bellagio Resort & Casino, Las Vegas, Nevada: Immerse yourself in the heart of Las Vegas luxury at Bellagio Resort & Casino, an iconic landmark famed for its exquisite gardens and b…",
        "hotelLinkDetail": "usa/hotel/1",
        "hotelLink": "some_url"
    },
    {
        "id": 1,
        "imgUrl": "/assets/img/test_hotel.jpg",
        "hotelName": "Bellagio Resort & Casino, Las Vegas",
        "hotelDescr": "Bellagio Resort & Casino, Las Vegas, Nevada: Immerse yourself in the heart of Las Vegas luxury at Bellagio Resort & Casino, an iconic landmark famed for its exquisite gardens and b…",
        "hotelLinkDetail": "usa/hotel/1",
        "hotelLink": "some_url"
    },
]
</script>

<template>
    <Header />
    <main class="main">
        <PromoLayout 
            imgUrl="/assets/img/country_promo.jpg"
            title="Best Hotels & Casinos In USA"
        />

        <CatalogLayout 
            :elementsData="hotelsData"
        />
    </main>
    <Footer />
</template>

<style scoped lang="sass">
@import "../../assets/styles/main"
</style>
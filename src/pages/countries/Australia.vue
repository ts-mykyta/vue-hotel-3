<script setup>
import Header from '../../components/HeaderLayout.vue';
import Footer from '../../components/FooterLayout.vue';
import PromoLayout from '../../components/blocks/PromoLayout.vue';
import CatalogLayout from '../../components/blocks/CatalogLayout.vue';


const hotelsData = [
    {
        "id": 13,
        "imgUrl": "/assets/img/australia/mindil-beach-casino-resort.jpg",
        "hotelName": "Mindil Beach Casino Resort",
        "hotelDescr": "Mindil Beach Casino Resort is a highly recommended hotel with wonderful and uninterrupted ocean views, making it an ideal place to stay and catch the sunset. The hotel has a great location, close to Mindil Markets...",
        "hotelLinkDetail": "/hotel/13",
    },
    {
        "id": 14,
        "imgUrl": "/assets/img/australia/pullman-reef-hotel-casino.jpg",
        "hotelName": "Pullman Reef Hotel Casino",
        "hotelDescr": "Featuring elegant rooms with a spa bath and a balcony overlooking Cairns or Trinity Inlet, Pullman Reef Hotel is only 250 metres from Cairns Esplanade. It features a casino and 4 bars with live music. The modern air...",
        "hotelLinkDetail": "/hotel/14",
    },
    {
        "id": 15,
        "imgUrl": "/assets/img/australia/big4.jpg",
        "hotelName": "BIG4 Casino Holiday Park",
        "hotelDescr": "BIG4 Casino Holiday Park is situated in the Richmond Valley on the north coast of NSW, just a 4-minute drive from the Casino town centre and the Richmond River. The property is uniquely set on the grounds of the former...",
        "hotelLinkDetail": "/hotel/15",
    },
    {
        "id": 16,
        "imgUrl": "/assets/img/australia/adelaide-casino.webp",
        "hotelName": "Adelaide Casino",
        "hotelDescr": "Located in Southern Australia, the Adelaide Casino is situated on the banks of the River Torrens. The casino offers you a mesmerizing experience with its Sky Channel feature and information touch screens. The...",
        "hotelLinkDetail": "/hotel/16",
    },
    {
        "id": 17,
        "imgUrl": "/assets/img/australia/casino-canberra.webp",
        "hotelName": "Casino Canberra",
        "hotelDescr": "The Casino Canberra was the first ever Casino established in the Australian continent. Though it is perhaps the only casino in Australia that doesn’t have the license for operating poker machines, it tries its...",
        "hotelLinkDetail": "/hotel/17",
    },
    {
        "id": 18,
        "imgUrl": "/assets/img/australia/country-club-casino.webp",
        "hotelName": "Country Club Casino",
        "hotelDescr": "With a prime location in Tasmania, the Country Club Casino provides a phenomenal experience of the beautiful Tamar Valley. It provides you with a choice of two types of accommodation: Country Club Resort and...",
        "hotelLinkDetail": "/hotel/18",
    },
    
]
</script>

<template>
    <Header />
    <main class="main">
        <PromoLayout 
            imgUrl="/assets/img/country_promo.jpg"
            title="Best Hotels & Casinos In Australia"
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
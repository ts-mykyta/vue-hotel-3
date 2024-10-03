<script setup>
import Header from '../../components/HeaderLayout.vue';
import Footer from '../../components/FooterLayout.vue';
import PromoLayout from '../../components/blocks/PromoLayout.vue';
import CatalogLayout from '../../components/blocks/CatalogLayout.vue';


const hotelsData = [
    {
        "id": 7,
        "imgUrl": "/assets/img/canada/.jpg",
        "hotelName": "",
        "hotelDescr": "",
        "hotelLinkDetail": "/hotel/7",
    },
    {
        "id": 8,
        "imgUrl": "/assets/img/canada/.jpg",
        "hotelName": "",
        "hotelDescr": "",
        "hotelLinkDetail": "/hotel/8",
    },
    {
        "id": 9,
        "imgUrl": "/assets/img/canada/.jpg",
        "hotelName": "",
        "hotelDescr": "",
        "hotelLinkDetail": "/hotel/9",
    },
    {
        "id": 10,
        "imgUrl": "/assets/img/canada/.jpg",
        "hotelName": "",
        "hotelDescr": "",
        "hotelLinkDetail": "/hotel/10",
    },
    {
        "id": 11,
        "imgUrl": "/assets/img/canada/.jpg",
        "hotelName": "",
        "hotelDescr": "",
        "hotelLinkDetail": "/hotel/11",
    },
    {
        "id": 12,
        "imgUrl": "/assets/img/canada/.jpg",
        "hotelName": "",
        "hotelDescr": "",
        "hotelLinkDetail": "/hotel/12",
    },
    
]
</script>

<template>
    <Header />
    <main class="main">
        <PromoLayout 
            imgUrl="/assets/img/country_promo.jpg"
            title="Best Hotels & Casinos In Canada"
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
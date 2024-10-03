<script setup>
import Header from '../../components/HeaderLayout.vue';
import Footer from '../../components/FooterLayout.vue';
import PromoLayout from '../../components/blocks/PromoLayout.vue';
import CatalogLayout from '../../components/blocks/CatalogLayout.vue';


const hotelsData = [
    {
        "id": 13,
        "imgUrl": "/assets/img/canada/.jpg",
        "hotelName": "",
        "hotelDescr": "",
        "hotelLinkDetail": "/hotel/13",
    },
    {
        "id": 14,
        "imgUrl": "/assets/img/canada/.jpg",
        "hotelName": "",
        "hotelDescr": "",
        "hotelLinkDetail": "/hotel/14",
    },
    {
        "id": 15,
        "imgUrl": "/assets/img/canada/.jpg",
        "hotelName": "",
        "hotelDescr": "",
        "hotelLinkDetail": "/hotel/15",
    },
    {
        "id": 16,
        "imgUrl": "/assets/img/canada/.jpg",
        "hotelName": "",
        "hotelDescr": "",
        "hotelLinkDetail": "/hotel/16",
    },
    {
        "id": 17,
        "imgUrl": "/assets/img/canada/.jpg",
        "hotelName": "",
        "hotelDescr": "",
        "hotelLinkDetail": "/hotel/17",
    },
    {
        "id": 18,
        "imgUrl": "/assets/img/canada/.jpg",
        "hotelName": "",
        "hotelDescr": "",
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
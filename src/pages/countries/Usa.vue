<script setup>
import Header from '../../components/HeaderLayout.vue';
import Footer from '../../components/FooterLayout.vue';
import PromoLayout from '../../components/blocks/PromoLayout.vue';
import CatalogLayout from '../../components/blocks/CatalogLayout.vue';


const hotelsData = [
    {
        "id": 1,
        "imgUrl": "/assets/img/usa/aria.jpg",
        "hotelName": "ARIA Resort & Casino",
        "hotelDescr": "Architectural beauty abounds at the Forbes Travel Guide Four-Star ARIA Resort & Casino, but at this Sin City hot spot, there is more than meets the eye...",
        "hotelLinkDetail": "/hotel/1",
    },
    {
        "id": 2,
        "imgUrl": "/assets/img/usa/pechanga-resort-casino.jpg",
        "hotelName": "Pechanga Resort Casino",
        "hotelDescr": "Nestled in the mountains of Temecula on the homelands of the Pechanga Band of Luiseño Indians, Pechanga Resort Casino offers a sprawling retreat featuring a...",
        "hotelLinkDetail": "/hotel/2",
    },
    {
        "id": 3,
        "imgUrl": "/assets/img/usa/m-resort-spa.jpg",
        "hotelName": "M Resort Spa Casino",
        "hotelDescr": "Guests often retreat to M Resort Spa Casino to relax, gamble and escape the non-stop action of the Strip. The Forbes Travel Guide Recommended resort is about 10...",
        "hotelLinkDetail": "/hotel/3",
    },
    {
        "id": 4,
        "imgUrl": "/assets/img/usa/tulalip-resort-casino-exterior.jpg",
        "hotelName": "Tulalip Resort Casino",
        "hotelDescr": "Tulalip Resort Casino’s grand scale is evident from the moment you drive past its massive orca whale fountain near the main entrance. Inside, three towering poles...",
        "hotelLinkDetail": "/hotel/4",
    },
    {
        "id": 5,
        "imgUrl": "/assets/img/usa/viejas-casino-resort-swimming-pool.jpg",
        "hotelName": "Viejas Casino & Resort",
        "hotelDescr": "Located 30 minutes inland from San Diego, Viejas Casino & Resort is a place designed for you to be both entertained and pampered. Encircled by rolling green hills, the resort overlooks a 1,600-acre reservatio....",
        "hotelLinkDetail": "/hotel/5",
    },
    {
        "id": 6,
        "imgUrl": "/assets/img/usa/yaamava-resort-casino-exterior.jpg",
        "hotelName": "Yaamava’ Resort & Casino",
        "hotelDescr": "For 35 years, the Inland Empire’s San Manuel was a casino without a hotel. In 2021, all that changed with the opening of Yaamava' Resort & Casino at San Manuel, a new luxury enclave tucked inside Highland...",
        "hotelLinkDetail": "/hotel/6",
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
<script setup>
import Header from '../components/HeaderLayout.vue';
import Footer from '../components/FooterLayout.vue';
import Promo from '../components/blocks/PromoLayout.vue';
import Catalog from '../components/blocks/CatalogLayout.vue';



</script>

<template>
    <Header />
    <main class="main">
        <Promo 
            title="Discover Australia!" 
            text="Welcome to Australia! This incredible country is full of breathtaking natural wonders, vibrant cities, and exciting experiences just waiting to be discovered. At Auhotelsbest, we’re here to help you make the most of your Australian adventure. From the best hotels to must-see attractions and hidden gems, we provide all the information you need for an unforgettable holiday. Let us be your guide to exploring the beauty and excitement of Australia!"
            imgUrl="/promo/home_promo.jpg"
            specialClasses="promo--home"
        />

        <Catalog
            :elementsData="dataObjAU"
            title="Top Hotels in Australia"
        />

        <Catalog
            :elementsData="dataObjEat"
            title="Best Places to eat"
        />

        <Catalog
            :elementsData="dataObjVisit"
            title="Places to visit:"
        />
    </main>
    <Footer />
</template>

<style scoped></style>
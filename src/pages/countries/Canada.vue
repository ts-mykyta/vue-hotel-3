<script setup>
import Header from '../../components/HeaderLayout.vue';
import Footer from '../../components/FooterLayout.vue';
import PromoLayout from '../../components/blocks/PromoLayout.vue';
import CatalogLayout from '../../components/blocks/CatalogLayout.vue';


const hotelsData = [
    {
        "id": 7,
        "imgUrl": "/assets/img/canada/grey-eagle-resort-casino.jpg",
        "hotelName": "Grey Eagle Resort & Casino",
        "hotelDescr": "Grey Eagle Resort & Casino, located in Calgary's SW and only minutes from downtown, here you will be sitting on the doorstep of the Rockies with unparalleled comfort and amenities. In addition to our resort, a 2,500 seat...",
        "hotelLinkDetail": "/hotel/7",
    },
    {
        "id": 8,
        "imgUrl": "/assets/img/canada/camrose-resort-casino-hotel.jpg",
        "hotelName": "Camrose Resort Casino Hotel",
        "hotelDescr": "With the Camrose Resort Casino Hotel, the entertainment is steps away whether guests are in the mood for casino fun or need banquet space for an exquisite event. Being the leading full service hotel in Camrose they match...",
        "hotelLinkDetail": "/hotel/8",
    },
    {
        "id": 9,
        "imgUrl": "/assets/img/canada/eugene-golf.jpg",
        "hotelName": "St. Eugene Golf Resort & Casino",
        "hotelDescr": "Framed by the Rockies, the Purcell’s and the famous St Mary River, the St. Eugene Golf Resort & Casino is a spectacular destination for getaways, vacations, conferences, retreats and weddings. The resort is...",
        "hotelLinkDetail": "/hotel/9",
    },
    {
        "id": 10,
        "imgUrl": "/assets/img/canada/the-omni-king-edward.jpg",
        "hotelName": "The Omni King Edward Hotel",
        "hotelDescr": "Located in the heart of Downtown Toronto, ON, The Omni King Edward Hotel is a legendary urban oasis. Built in 1903 and re-imagined for the 21st century, this elegant hotel features a fine dining restaurant, posh bar, and...",
        "hotelLinkDetail": "/hotel/10",
    },
    {
        "id": 11,
        "imgUrl": "/assets/img/canada/hotel-omni-mont-royal.jpg",
        "hotelName": "Hotel Omni Mont-Royal",
        "hotelDescr": "Situated on Sherbrooke Street in downtown Montreal's historic district near McGill University, Hotel Omni Mont-Royal is an elegant high-rise. With never more than 12 rooms per floor, the hospitality experience is...",
        "hotelLinkDetail": "/hotel/11",
    },
    {
        "id": 12,
        "imgUrl": "/assets/img/canada/radisson-blu-toronto-downtown.jpg",
        "hotelName": "Radisson Blu Toronto Downtown",
        "hotelDescr": "At the Radisson Blu Toronto Downtown, you're at the centre of the city! Our hotel puts you within steps of the Entertainment District and attractions like the CN Tower, Rogers Centre, St. Lawrence Market, Metro...",
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
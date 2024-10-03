<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Header from '../components/HeaderLayout.vue'
import Footer from '../components/FooterLayout.vue'

const hotelsData = [
  {
    id: 1,
    imgUrl: "/assets/img/usa/aria.jpg",
    hotelName: "ARIA Resort & Casino",
    hotelDescr: "Architectural beauty abounds at the Forbes Travel Guide Four-Star ARIA Resort & Casino, but at this Sin City hot spot, there is more than meets the eye. This all-encompassing resort offers endless dining options, shopping, spa treatments and non-stop entertainment. From the excitement at Jewel Nightclub and the more sedate Alibi Ultra Lounge to the three pools and casino, you’ll be sure to find something to love at this luxe Las Vegas locale.",
    siteLink: "https://aria.mgmresorts.com/en.html"
  },
  {
    id: 2,
    imgUrl: "/assets/img/usa/pechanga-resort-casino.jpg",
    hotelName: "Pechanga Resort Casino",
    hotelDescr: "Nestled in the mountains of Temecula on the homelands of the Pechanga Band of Luiseño Indians, Pechanga Resort Casino offers a sprawling retreat featuring a vast array of activities and entertainment both indoors and out. Recently expanded to include a new hotel tower, a massive event space and an sizable pool complex, it’s the largest resort of its type in Southern California. The freshly renovated and newly enlarged lobby boasts an airy light-filled atrium and a stunning chandelier-like water feature that stretches from ceiling to floor. Throughout the property, you’ll be treated to amazing views, Vegas-style glitz and glamour, Native American art installations and décor that pays homage to Wi’aasal — the 1,000-year-old sacred great oak nearby. With four-season sunshine, a vibrant gaming scene, an extensive collection of dining venues, A-list headliner performances and a warm and welcoming staff, Pechanga Resort Casino beckons for a stay any time of year.",
    siteLink: "https://www.pechanga.com"
  },
  {
    id: 3,
    imgUrl: "/assets/img/usa/m-resort-spa.jpg",
    hotelName: "M Resort Spa Casino",
    hotelDescr: "Guests often retreat to M Resort Spa Casino to relax, gamble and escape the non-stop action of the Strip. The Forbes Travel Guide Recommended resort is about 10 miles south of Mandalay Bay at an ideal location for those who don’t want to be immersed in the late-night party culture or large crowds that Las Vegas attracts. Although the hotel’s beauty is a draw, its 92,000-square-foot casino is the main attraction. It caters to gamblers of all skill levels. The casino features video poker and more than 1,000 slot machines for guests who prefer solo gambling, and its 40 table games include roulette, blackjack, minibaccarat, pai gow and three-card poker. In addition, the casino has a high-limit salon for guests hoping to hit it big, and sports fans can place bets on their favorite events, too.",
    siteLink: "https://www.themresort.com/"
  },
  {
    id: 4,
    imgUrl: "/assets/img/usa/tulalip-resort-casino-exterior.jpg",
    hotelName: "Tulalip Resort Casino",
    hotelDescr: "Tulalip Resort Casino’s grand scale is evident from the moment you drive past its massive orca whale fountain near the main entrance. Inside, three towering poles, carved by Tulalip tribe members, greet you near the check-in desk. In the casino, one section of soaring ceiling mimics a salmon stream, where swirls of green and blue all but conceal images of this region’s most important fish. In The Draft, the casino’s sports bar and grill, the big game is broadcast on an enormous 161-by-91 matrix of high-definition televisions. Massive though it may be, the guest experience is intimate at the Washington resort. Whether you’re being personally escorted through the quiet, dim chambers of the T Spa, relaxing away the weekend in one of the five specialty suites or diving into a made-to-order dish from the Mongolian Grill in the Eagles Buffet, you’ll feel as though you are the resort’s most important guest.",
    siteLink: "https://www.everythingtulalip.com/properties/tulalip-resort-casino/"
  },
  {
    id: 5,
    imgUrl: "/assets/img/usa/viejas-casino-resort-swimming-pool.jpg",
    hotelName: "Viejas Casino & Resort",
    hotelDescr: "Located 30 minutes inland from San Diego, Viejas Casino & Resort is a place designed for you to be both entertained and pampered. Encircled by rolling green hills, the resort overlooks a 1,600-acre reservation, home of the Viejas Band of the Kumeyaay Indians. The design is contemporary and sophisticated, yet the feel is warm and inviting due to a staff that is eager to make you feel welcome. Throughout the resort, original art installations reflect the Native American elements of earth, water and fire like indoor and outdoor fountains and waterfalls, fire pits and two-way fireplaces. The casino resort is also ablaze with activity. At any given time there is an abundance of gaming options and ongoing promotions, plus a spectrum of culinary choices ranging from fine dining to poolside snacking. Expect ceaseless live entertainment, a monthly multimedia light and fireworks show, and luxury bargain shopping at next-door Viejas Outlets shopping center.",
    siteLink: "https://viejas.com/"
  },
  {
    id: 6,
    imgUrl: "/assets/img/usa/yaamava-resort-casino-exterior.jpg",
    hotelName: "Yaamava’ Resort & Casino",
    hotelDescr: "For 35 years, the Inland Empire’s San Manuel was a casino without a hotel. In 2021, all that changed with the opening of Yaamava' Resort & Casino at San Manuel, a new luxury enclave tucked inside Highland, California’s picturesque San Bernardino Mountains. Just 70 minutes outside of Los Angeles, the 432-room resort tower has everything you need when you’re done at the slots — the casino boasts more than 6,500 of them — including an innovative wellness-driven spa, fully stocked poolside cabanas, nearly a dozen dining options that range from Chinese delicacies to prime steaks and rare vintages, and inviting rooms that provide a respite after a long day. To the Serrano people, the word yaamava’ means “spring,” and the 17-floor resort tower personifies many of the characteristics of the season for which it is named. The structure looks as if it is woven from the earth, spouting from the hillside. Behind the front desk, a botanical art installation adds a soothing vibe along with the lobby’s water features and natural stone accents. And if you look closely, you can make out the signature letter “Y” just about everywhere on the property.",
    siteLink: "https://www.yaamava.com/"
  },
  {
    id: 7,
    imgUrl: "/assets/img/canada/.jpg",
    hotelName: "",
    hotelDescr: "",
    siteLink: ""
  },
  {
    id: 8,
    imgUrl: "/assets/img/canada/.jpg",
    hotelName: "",
    hotelDescr: "",
    siteLink: ""
  },
  {
    id: 9,
    imgUrl: "/assets/img/canada/.jpg",
    hotelName: "",
    hotelDescr: "",
    siteLink: ""
  },
  {
    id: 10,
    imgUrl: "/assets/img/canada/.jpg",
    hotelName: "",
    hotelDescr: "",
    siteLink: ""
  },
  {
    id: 11,
    imgUrl: "/assets/img/canada/.jpg",
    hotelName: "",
    hotelDescr: "",
    siteLink: ""
  },
  {
    id: 12,
    imgUrl: "/assets/img/canada/.jpg",
    hotelName: "",
    hotelDescr: "",
    siteLink: ""
  },
  {
    id: 13,
    imgUrl: "/assets/img/australia/.jpg",
    hotelName: "",
    hotelDescr: "",
    siteLink: ""
  },
  {
    id: 14,
    imgUrl: "/assets/img/australia/.jpg",
    hotelName: "",
    hotelDescr: "",
    siteLink: ""
  },
  {
    id: 15,
    imgUrl: "/assets/img/australia/.jpg",
    hotelName: "",
    hotelDescr: "",
    siteLink: ""
  },
  {
    id: 16,
    imgUrl: "/assets/img/australia/.jpg",
    hotelName: "",
    hotelDescr: "",
    siteLink: ""
  },
  {
    id: 17,
    imgUrl: "/assets/img/australia/.jpg",
    hotelName: "",
    hotelDescr: "",
    siteLink: ""
  },
  {
    id: 18,
    imgUrl: "/assets/img/australia/.jpg",
    hotelName: "",
    hotelDescr: "",
    siteLink: ""
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
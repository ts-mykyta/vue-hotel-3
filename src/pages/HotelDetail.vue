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
    imgUrl: "/assets/img/canada/grey-eagle-resort-casino.jpg",
    hotelName: "Grey Eagle Resort & Casino",
    hotelDescr: "Grey Eagle Resort & Casino, located in Calgary's SW and only minutes from downtown, here you will be sitting on the doorstep of the Rockies with unparalleled comfort and amenities. In addition to our resort, a 2,500 seat Event Center for concerts, large trade shows, conventions, and meetings. The resort offers complimentary parking, Wi-Fi, indoor pool, outdoor hot tub and a spacious state-of-the-art fitness centre. Our casino is one of Alberta's most popular, featuring a modern design with elegance that flows through the entire resort. The resort has everything you could need at a home away from home. Attractions nearby include Chinook Centre Mall, The World Famous Stampede Park, Calaway Park, Canada Olympic Park, the Calgary Zoo, Heritage Park, Glenmore Reservoir, Trail System, Kananaskis Country and much more. Welcome to a completely new experience here at Calgary's first class resort and casino.",
    siteLink: "https://www.greyeagleresortandcasino.ca/"
  },
  {
    id: 8,
    imgUrl: "/assets/img/canada/camrose-resort-casino-hotel.jpg",
    hotelName: "Camrose Resort Casino Hotel",
    hotelDescr: "With the Camrose Resort Casino Hotel, the entertainment is steps away whether guests are in the mood for casino fun or need banquet space for an exquisite event. Being the leading full service hotel in Camrose they match top of the line accommodations with entertainment options for everyone. Enjoy live entertainment, so guests never have to go far (or even leave the hotel) for a night to remember. Banquet facilities are available for special events, a favorite for weddings, birthdays and corporate meetings. With a pool and waterslide on site as well, it is ideal for family vacations and promises a great time for all ages. However, guests who want to explore beyond the walls of the facility will find downtown shopping and dinner theatre options just a few kilometers away. Whether travelers prefer a game of golf to complement their trip or checking out the local attractions, simply ask a helpful staff member for tips and recommendations.",
    siteLink: "https://www.camroseresortcasino.com/"
  },
  {
    id: 9,
    imgUrl: "/assets/img/canada/eugene-golf.jpg",
    hotelName: "St. Eugene Golf Resort & Casino",
    hotelDescr: "Framed by the Rockies, the Purcell’s and the famous St Mary River, the St. Eugene Golf Resort & Casino is a spectacular destination for getaways, vacations, conferences, retreats and weddings. The resort is located 10 minutes from Cranbrook, 5 minutes from the Cranbrook Rockies International Airport and 20 minutes from the picturesque town of Kimberley. Within its historic walls and the connecting Lodge are beautifully appointed, elegant guestrooms and conference facilities. Within the Resort lies the Interpretive Centre, operated by The Ktunaxa Nation Council. Daily tours allow guests to learn more about the building’s fascinating history, people, and culture found only in this part of the world. St. Eugene offers a wealth of culinary experiences to please the palate and delight the senses of each guest. With 4 spectacular onsite food and beverage choices including informal fine dining in Numa, overlooking the sun-drenched deck and golf course. Or wind down with a glass of wine at our refined cozy Numa Lounge. For individuals looking for a more relaxed setting, simply enjoy the 19th Hole Bar & Grill, located at the St. Eugene Golf Course. Also on site is the newly renovated Casino of the Rockies – The bold, nature-based design concept pays homage to the Ktunaxa First Nations’ connection to the earth, and highlights flora and fauna native to the mountains and foothills in our backyard.",
    siteLink: "https://www.steugene.ca/"
  },
  {
    id: 10,
    imgUrl: "/assets/img/canada/the-omni-king-edward.jpg",
    hotelName: "The Omni King Edward Hotel",
    hotelDescr: "Located in the heart of Downtown Toronto, ON, The Omni King Edward Hotel is a legendary urban oasis. Built in 1903 and re-imagined for the 21st century, this elegant hotel features a fine dining restaurant, posh bar, and afternoon tea. Discover retail shops, including a tailor, coffee lounge, salon, and spa. Walk to the King subway station in two minutes and explore numerous boutiques, restaurants, and entertainment venues nearby. Our prime location in Toronto's financial district provides you convenient access to the city's top attractions including the Metro Toronto Convention Centre, Sony Centre, Eaton Centre and Distillery District. If you're searching for a wedding venue, The Omni King Edward Hotel offers three beautiful ballrooms and a magical setting for a downtown Toronto wedding. From weddings to meetings in one of our 13 spacious conference rooms, The Omni King Edward Hotel has the spaces to accommodate all of your events.",
    siteLink: "https://www.omnihotels.com/hotels/toronto-king-edward"
  },
  {
    id: 11,
    imgUrl: "/assets/img/canada/hotel-omni-mont-royal.jpg",
    hotelName: "Hotel Omni Mont-Royal",
    hotelDescr: "Situated on Sherbrooke Street in downtown Montreal's historic district near McGill University, Hotel Omni Mont-Royal is an elegant high-rise. With never more than 12 rooms per floor, the hospitality experience is enhanced by luxurious and comforting loft style guestrooms. Towering over Mont-Royal Park, the hotel features a French cafe and vibrant bar. There's also a fitness center and seasonal outdoor pool, plus 23,000 square feet of meeting space. Book your stay at Hotel Omni Mont Royal within the Golden Square Mile's historical district and enjoy close proximity to Montreal's Old Town and easy access to metro stations. You will also be footsteps away from Montreal's finest shopping, dining, art galleries and more. Whether you are looking for romance or family fun, we have a hotel package that will let you experience the charm of Quebec, Canada. If you're looking for a romantic destination in Canada, Hotel Omni Mont-Royal is an ideal spot.",
    siteLink: "https://www.omnihotels.com/hotels/montreal-mont-royal"
  },
  {
    id: 12,
    imgUrl: "/assets/img/canada/radisson-blu-toronto-downtown.jpg",
    hotelName: "Radisson Blu Toronto Downtown",
    hotelDescr: "At the Radisson Blu Toronto Downtown, you're at the centre of the city! Our hotel puts you within steps of the Entertainment District and attractions like the CN Tower, Rogers Centre, St. Lawrence Market, Metro Toronto Convention Centre, Union Station, Billy Bishop Toronto City Airport and Centre Island - just to name a few. Start your day right with a scrumptious breakfast at The View, our breakfast restaurant. When you're done exploring the sights, relax under the sun at Lakeview Pool Lounge, our rooftop pool with the best view of the CN Tower!",
    siteLink: "https://www.choicehotels.com/ontario/toronto/radisson-blu-hotels/cnc41"
  },
  {
    id: 13,
    imgUrl: "/assets/img/australia/mindil-beach-casino-resort.jpg",
    hotelName: "Mindil Beach Casino Resort",
    hotelDescr: "Mindil Beach Casino Resort is a highly recommended hotel with wonderful and uninterrupted ocean views, making it an ideal place to stay and catch the sunset. The hotel has a great location, close to Mindil Markets and the casino and a five-minute drive from the CBD. The breakfast menu is great and the table service adds to the overall experience. Dinner options are fantastic, especially at Vue restaurant and guests appreciate the excellent staff, food and reasonable prices. The hotel has comfortable and clean rooms, although some feel that they are outdated and require refurbishment. Housekeeping standards vary for some, while others were impressed by how clean and spotless the rooms were. The hotel staff is very friendly and helpful and the pools are an amazing highlight. The private beach area and proximity to the Mindil Beach Market are added bonuses, although noise from the pool can be an issue. While some guests had issues with the casino, most reviews of the casino are positive.",
    siteLink: "https://www.mindilbeachcasinoresort.com.au/"
  },
  {
    id: 14,
    imgUrl: "/assets/img/australia/pullman-reef-hotel-casino.jpg",
    hotelName: "Pullman Reef Hotel Casino",
    hotelDescr: "Featuring elegant rooms with a spa bath and a balcony overlooking Cairns or Trinity Inlet, Pullman Reef Hotel is only 250 metres from Cairns Esplanade. It features a casino and 4 bars with live music. The modern air-conditioned rooms have flat-screen cable TV and a tea and coffee maker. Each room has a large bathroom with luxury C.O. Bigelow toiletries. Pullman Reef Hotel Casino is 5 minutes’ walk from Cairns Convention Centre, and 15 minutes’ drive from Cairns Airport. Pullman Reef Hotel features a rooftop swimming pool, spa pool and sauna. The tour desk can arrange activities such as diving and snorkeling, and day trips to the Great Barrier Reef. The award-winning Tamarind Restaurant features Thai-inspired fusion cuisine. Flinders Bar & Grill offers light meals in a casual setting.",
    siteLink: "https://www.reefcasino.com.au/"
  },
  {
    id: 15,
    imgUrl: "/assets/img/australia/big4.jpg",
    hotelName: "BIG4 Casino Holiday Park",
    hotelDescr: "BIG4 Casino Holiday Park is situated in the Richmond Valley on the north coast of NSW, just a 4-minute drive from the Casino town centre and the Richmond River. The property is uniquely set on the grounds of the former Casino Airport, with the original buildings and existing section of runway to explore. The holiday park offers a range of accommodation options including cottages which are styled to mirror the natural surrounds and a variety of spacious sites, large enough to accommodate a caravan, boat or RV. The town of Casino is known as the 'Beef Capital' of Australia and hosts the community festival of Beef Week annually in the last week of May. Guests can also visit the surrounding national parks as well as the historic and art deco buildings of Casino, which can be enjoyed on the 40-minute Heritage Walk. Guests may also choose to take a walk or enjoy a picnic along the Richmond River before heading to the Platypus Pool, where you may be lucky enough to see a platypus. BIG4 Casino Holiday Park is a 2-hour drive from the Gold Coast and a 3-hour drive from Brisbane. The nearest airport is Lismore Airport, 28 km from the property.",
    siteLink: "https://www.big4.com.au/caravan-parks/nsw/northern-rivers/big4-casino-holiday-park"
  },
  {
    id: 16,
    imgUrl: "/assets/img/australia/adelaide-casino.webp",
    hotelName: "Adelaide Casino",
    hotelDescr: "Located in Southern Australia, the Adelaide Casino is situated on the banks of the River Torrens. The casino offers you a mesmerizing experience with its Sky Channel feature and information touch screens. The Adelaide Casino provides a thrilling gaming experience with a wide range of table games like Blackjack, Caribbean Stud, Baccarat, Vegas Star Roulette, Poker, Rapid Roulette and much more. At an average, the casino provides to its customers 15 jackpot wins in a week- something you’ll not get to avail at any other casino! An additional feature of the casino is its poker zone, providing you with the option of playing tournaments or cash games. Add one more on that – the Adelaide Casino is provided with VIP Gaming Program also- The Grange Room, The Black Room, and The Platinum Room.",
    siteLink: "https://skycityadelaide.com.au/"
  },
  {
    id: 17,
    imgUrl: "/assets/img/australia/casino-canberra.webp",
    hotelName: "Casino Canberra",
    hotelDescr: "The Casino Canberra was the first ever Casino established in the Australian continent. Though it is perhaps the only casino in Australia that doesn’t have the license for operating poker machines, it tries its best to provide a promising experience to its customers by providing a good variety of games. As a token of love, the Casino Canberra offers a program named the Infinity Reward to its customers, which they can use to benefit themselves on the offers on food, gifts, accommodation and much more. The customers are awarded points in their Infinity Reward card at the end of every game that they have played, depending on the type of game and the duration for which it has been played.",
    siteLink: "https://casinocanberra.com.au/"
  },
  {
    id: 18,
    imgUrl: "/assets/img/australia/country-club-casino.webp",
    hotelName: "Country Club Casino",
    hotelDescr: "With a prime location in Tasmania, the Country Club Casino provides a phenomenal experience of the beautiful Tamar Valley. It provides you with a choice of two types of accommodation: Country Club Resort and Country Club Villas. The Country Club Resort provides you with the basic facilities like Wi-Fi, parking, bar, newspaper, swimming pool and a Golf course assuring supreme quality and comfort at your end. The Country Club Villa, on the other hand, provides you with the on-site facilities of the fitness center, spa, tennis court, and an indoor swimming pool- all at your door. It offers accommodation in the form of 1, 2 and 3 bedroom suites.",
    siteLink: "https://countryclubtasmania.com.au/casino/"
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
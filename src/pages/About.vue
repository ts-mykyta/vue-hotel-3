<script setup>
import Header from '../components/HeaderLayout.vue'
import Footer from '../components/FooterLayout.vue'
</script>

<template>
  <Header />
  <main class="main">
    <div class="container">
        <div class="text">
            <section>
                <h1>ABOUT US</h1>
                <p>Welcome to Hotels & Casinos Top, your ultimate online guide for discovering the finest hotels and casinos worldwide. Our passion lies in providing detailed, current information on the best gaming and hospitality establishments worldwide. At Hotels & Casinos Top, finding the ideal destination for your gaming and leisure needs can be overwhelming. That’s why we strive to present a curated selection of the top hotels and casinos, making your choices more straightforward and your experiences unforgettable.</p>
            </section>
            
            <section>
                <h2>BOOK HERE</h2>
            </section>
            
            <section>
                <h3>What Sets Us Apart</h3>
                <ul>
                    <li><strong>Expertise:</strong> Our dedicated writers and researchers comprise avid travelers and gaming enthusiasts. With firsthand industry knowledge, our reviews and recommendations are insightful, accurate, and trustworthy.</li>
                    <li><strong>Comprehensive Coverage:</strong> From the glitz and glamor of Las Vegas to the hidden gems spread across the nation, we cover various casino destinations, each with unique charm and attractions.</li>
                    <li><strong>Unbiased Reviews:</strong> We take pride in our impartiality. Our reviews are accessible from the influence of partnerships or sponsorships, providing honest and unbiased insights into each casino and hotel.</li>
                    <li><strong>User-Friendly Interface:</strong> Our website is designed with you in mind. It’s easy to navigate, allowing you to quickly find the information you need to plan your next gaming getaway.</li>
                </ul>
            </section>
            
            <section>
                <h3>What You’ll Find on Our Website</h3>
                <ul>
                    <li><strong>In-Depth Casino Reviews:</strong> Read detailed reviews of some of the world’s most renowned casinos, including information on gaming options, dining, entertainment, and more.</li>
                    <li><strong>Hotel Recommendations:</strong> Discover luxurious accommodations and resorts that complement top-notch gaming experiences.</li>
                    <li><strong>Latest News and Updates:</strong> Stay informed about the latest developments, promotions, and events in the casino world.</li>
                    <li><strong>Helpful Tips:</strong> Get access to guides and tips to enhance your casino experience, whether you’re a seasoned pro or a first-time visitor.</li>
                </ul>
            </section>
        </div>
    </div>
  </main>
  <Footer />
</template>

<style scoped lang="sass">
@import "../assets/styles/main"

.main
    padding: 50px 0


.text
    background: $white
    padding: 10px
    @media (min-width: 768px)
        padding: 80px

    h1, h2, h3
        font-family: "Alegreya SC", sans-serif
        font-size: 34px
        font-weight: 500
        line-height: 51px
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
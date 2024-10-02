<script setup>
import Header from '../components/HeaderLayout.vue';
import Footer from '../components/FooterLayout.vue';
import Promo from '../components/blocks/PromoLayout.vue';
import ContactForm from '../components/blocks/ContactForm.vue';



</script>

<template>
    <Header />
    <main class="main">
        <Promo 
            title="Exclusive Casino Hotel Stays" 
            text="Spoil in unparalleled luxury and entertainment with our exclusive casino hotel stays, offering world-class amenities and unforgettable experiences"
            imgUrl="/assets/img/home/home_promo.jpeg"
            specialClasses="promo--home"
        />

        <section class="top">
            <div class="container">
                <h2>Top Casino Hotels</h2>
                <div class="top__wrapper">
                    <div class="country">
                        <router-link to="/usa" exact-active-class="country__link">
                            <div class="country__img">
                                <img src="/assets/img/home/test_hot.jpg" alt="">
                            </div>
                            <h3 class="country__title">Australia</h3>     
                        </router-link>
                    </div>
                    <div class="country">
                        <router-link to="/usa" exact-active-class="country__link">
                            <div class="country__img">
                                <img src="/assets/img/home/test_hot.jpg" alt="">
                            </div>
                            <h3 class="country__title">Canada</h3>     
                        </router-link>
                    </div>
                    <div class="country">
                        <router-link to="/usa" exact-active-class="country__link">
                            <div class="country__img">
                                <img src="/assets/img/home/test_hot.jpg" alt="">
                            </div>
                            <h3 class="country__title">USA</h3>     
                        </router-link>
                    </div>
                </div>
            </div>
        </section>

        <ContactForm id="contact-form" />
    </main>
    <Footer />
</template>

<style scoped lang="sass">
@import "../assets/styles/main"

.top
    padding: 70px 0
    h2
        color: $white
        text-align: center
        font-family: "Alegreya SC", sans-serif
        font-size: 46px
        font-weight: 500
        margin-bottom: 10px

    &__wrapper
        display: flex
        justify-content: center
        align-items: center
        flex-wrap: wrap
        gap: 20px


.country
    max-width: 340px

    &__img
        width: 100%
        margin-bottom: -6px
        
        img
            width: 100%
            height: 100%
            object-fit: cover
            border-radius: 20px 20px 0 0
    
    &__title
        display: flex
        justify-content: center
        align-items: center
        font-size: 28px
        text-transform: uppercase
        background: $blue
        color: $white
        padding: 20px 0
        border-radius: 0 0 20px 20px
                
</style>
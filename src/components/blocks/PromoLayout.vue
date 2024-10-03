<script setup>
const props = defineProps({
    imgUrl: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: false
    },
    specialClasses: {
        type: String,
        required: false
    }
})


const scrollToForm = () => {
  const form = document.getElementById('contact-form');
  if (form) {
    form.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
    <section class="promo" :class="specialClasses" :style="{ backgroundImage: `url(${props.imgUrl})` }">
        <h1 class="promo__title">{{ title }}</h1>
        <div class="promo__descr">{{ text }}</div>
        <a @click="scrollToForm" class="promo__contact">Contact us</a>
    </section>
</template>

<style scoped lang="sass">
@import "../../assets/styles/main"

@keyframes promoscale
    0%
        transform: scale(1)
    50%
        transform: scale(1.1)
    100%
        transform: scale(1)
    
.promo
    height: 350px
    background-position: center center
    background-size: cover

    display: flex
    flex-direction: column
    justify-content: center
    align-items: center

    &__contact
        display: none

    &--home
        height: 100vh
        animation: promoscale ease-in 18s infinite

        .promo__contact 
            display: flex
            color: $white
            padding: 10px 30px
            background: $blue
            border-radius: 20px
            cursor: pointer

        .promo__title
            font-size: 42px
            max-width: 1300px

            @media (min-width: 768px)
                font-size: 72px

        .promo__descr
            font-size: 22px
            width: 100%
            max-width: 1150px

    &__title
        color: #fff
        font-size: 36px
        font-weight: 600
        font-family: "Alegreya SC", sans-serif
        text-transform: uppercase
        max-width: 800px
        margin-bottom: 20px
        text-align: center
    
    &__descr
        color: #fff
        width: 100%
        max-width: 900px
        font-size: 18px
        font-weight: 400
        line-height: 30px
        text-align: center
        padding: 0 10px
        margin-bottom: 20px


@media (max-width: 420px)
    .promo
        &__title
            font-size: 30px
        
        &__descr
            font-size: 16px

</style>
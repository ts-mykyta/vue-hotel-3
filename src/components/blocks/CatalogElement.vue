<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
    elementData: {
        type: Object,
        required: true
    }
})

const router = useRouter()

const goToHotelDetail = () => {
  router.push({ name: 'HotelDetail', params: { id: props.elementData.id } })
}
</script>

<template>
<div class="hotel" @click="goToHotelDetail">
    <div class="hotel__img">
        <img :src="elementData.imgUrl" alt="hotel">
    </div>

    <div class="hotel__descr">
        <h2 class="hotel__title">{{ elementData.hotelName }}</h2>
        <p>{{ elementData.hotelDescr }}</p>
    </div>

    <div class="hotel__btn">Read More</div>
</div>
</template>

<style scoped lang="sass">
@import "../../assets/styles/main"

.hotel 
    width: 100%
    height: 100%
    background: $white
    border-radius: 8px
    position: relative
    cursor: pointer

    &__img
        width: 100%
        height: 220px
        img
            width: 100%
            height: 100%
            object-fit: cover
            border-radius: 8px 8px 0 0
    
    &__descr
        padding: 20px 20px 40px 20px
        p
            color: rgb(119, 119, 119)
            font-size: 16px
            font-weight: 400
            margin-bottom: 20px

    &__title
        font-family: "Alegreya SC", sans-serif
        line-height: 28px
        font-weight: 500
        font-size: 24px
        margin-bottom: 20px

    &__btn
        position: absolute
        left: 0
        bottom: 0
        width: 100%
        background: $blue
        display: flex
        justify-content: center
        align-items: center
        padding: 15px
        text-transform: uppercase
        color: $white
        font-size: 14px
        font-weight: 600
        border-radius: 8px


</style>
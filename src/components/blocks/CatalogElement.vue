<script setup>
const props = defineProps({
    elementData: {
        type: Object,
        required: true
    }
})
</script>

<template>
<div class="catalog__element">
    <a :href="elementData.elemLink ? elementData.elemLink : '#'" class="catalog__element-img">
        <img :src="props.elementData.imgUrl" alt="img">
    </a>
    <div class="catalog__element-content">
        <div class="catalog__element-title">{{ elementData.elemTitle }}</div>
        <div class="catalog__element-text">{{ elementData.elemText }}</div>
        <a :href="elementData.elemLink ? elementData.elemLink : '#'" target="_blank" class="catalog__element-btn">Read More</a>
    </div>
</div>
</template>

<style scoped lang="sass">
@import "../../assets/styles/main"
</style>
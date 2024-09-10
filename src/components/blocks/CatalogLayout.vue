<script setup>
import CatalogElement from './CatalogElement.vue';


const props = defineProps({
    title: {
        type: String,
        required: true
    },

    elementsData: {
        type: Array,
        required: true
    }
    
})
</script>

<template>
    <section class="catalog">
        <div class="container">
            <h1 class="catalog__title">{{ title }}</h1>

            <div class="catalog__wrapper" >
                <CatalogElement
                    v-for="(item, index) in elementsData" :key="index" 
                    :elementData="item"
                />
            </div>
        </div>
    </section>
</template>

<style scoped lang="sass">
@import "../../assets/styles/main"
</style>
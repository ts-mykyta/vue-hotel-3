<script setup>
import { useRoute } from 'vue-router';
import { ref, watchEffect, computed } from 'vue';

const isMenuActive = ref(false);
const route = useRoute();
const isHomePage = computed(() => route.path === '/'); 

function toggleMenu() {
  isMenuActive.value = !isMenuActive.value;
}
</script>

<template>
    <header :class="['header', { 'header--active': isMenuActive, 'header--home': isHomePage }]">
        <div class="container">
            <div class="header__wrapper">
                <div class="header__logo">
                    <router-link to="/" exact-active-class="header__menu-link--active">
                        <span>Hotels & Casino</span>
                    </router-link>
                </div>

                <nav class="header__menu">
                    <ul>
                        <li class="header__menu-link">
                            <router-link to="/about" exact-active-class="header__menu-link--active">
                                <span>About Us</span>
                            </router-link>
                        </li>
                        <li class="header__menu-link">
                            <router-link to="/usa" exact-active-class="header__menu-link--active">
                                <span>Canada</span>
                            </router-link>
                        </li>
                        <li class="header__menu-link">
                            <router-link to="/usa" exact-active-class="header__menu-link--active">
                                <span>Australia</span>
                            </router-link>
                        </li>
                        <li class="header__menu-link">
                            <router-link to="/usa" exact-active-class="header__menu-link--active">
                                <span>Usa</span>
                            </router-link>
                        </li>
                    </ul>
                </nav>

                <div class="header__contact">
                    Contact Us
                </div>

                <div class="header__burger" @click="toggleMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped lang="sass">
@import '../assets/styles/main'

.header
    background: $white
    color: $blue
    position: relative
    padding: 20px 0
    z-index: 99999

    &__wrapper
        display: flex
        justify-content: space-between
        align-items: center

    &__logo
        font-family: "Alegreya SC", sans-serif
        font-size: 25px
        font-weight: 500
        transition: $transition

        &:hover
            opacity: .8
    
    &__menu
        position: absolute
        width: 100%
        left: 0
        top: 70px
        opacity: 0
        visibility: hidden
        background: $white
        color: $gray
        text-transform: uppercase
        transition: $transition
        z-index: -1
        
        li
            display: block
            padding: 10px 0 10px 10px
            border-bottom: 1px solid lightgray
            font-weight: 500
            cursor: pointer

            a
                color: $black

            &:hover
                background: $blue
                color: $white
            

    &__burger
        background: $blue
        cursor: pointer
        display: flex
        flex-direction: column
        gap: 3px
        width: 38px
        padding: 6px

        span
            display: block
            width: 100%
            height: 3px
            transition: $transition
            background: $white

    &__contact
        display: none

    


.header--home
    background: inherit
    color: $white
    border-bottom: 1px solid lightgray 
    position: absolute
    top: 0
    width: 100%       
 
    .header__menu
        li
            a
                color: $gray
                
            &:hover
                background: $gray
            

    .header__burger
        background: $white


        span
            background: $black
            


.header.header--active
    .header__menu
        opacity: 1
        visibility: visible

    .header__burger
        span:nth-child(1)
            transform: rotate(-45deg) translate(-4px, 3px)
        span:nth-child(2)
            opacity: 0
        span:nth-child(3)
            transform: rotate(45deg) translate(-5px, -5px)


@media (min-width: 768px)
    .header
        &__menu
            width: auto
            position: relative
            top: 0
            left: 0
            opacity: 1
            visibility: visible
            background: inherit
            z-index: 9

            ul
                display: flex
                justify-content: space-between
                align-items: center
                gap: 20px

                li
                    border: none
                    color: $white

                    &:hover
                        background: none
                        opacity: .8
        
        &__contact
            display: flex
            justify-content: center
            align-items: center
            cursor: pointer
            color: $white
            background: $blue
            width: 155px
            height: 46px
            border-radius: 25px

            &:hover
                opacity: .8

        &__burger
            display: none
    

    .header--home      
        .header__menu
            li
                a
                    color: $white
                &:hover
                    background: none
</style>
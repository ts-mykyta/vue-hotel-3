<script setup>
import { useRoute } from 'vue-router';
import { ref, watchEffect } from 'vue';

const isMenuActive = ref(false);

function toggleMenu() {
  isMenuActive.value = !isMenuActive.value;
}

watchEffect(() => {
  if (isMenuActive.value) {
    document.body.classList.add('body--hidden');
  } else {
    document.body.classList.remove('body--hidden');
  }
});
</script>

<template>
    <header :class="['header', { 'header--active': isMenuActive }]">
        <div class="container">
            <div class="header__wrapper">
                <nav class="header__menu">
                    <ul>
                        <li class="header__menu-link">
                            <router-link to="/" exact-active-class="header__menu-link--active">
                                <span>Home</span>
                            </router-link>
                        </li>
                        <li class="header__menu-link">
                            <router-link to="/business" exact-active-class="header__menu-link--active">
                                <span>Business</span>
                            </router-link>
                        </li>
                        <li class="header__menu-link">
                            <router-link to="/casino" exact-active-class="header__menu-link--active">
                                <span>Casino</span>
                            </router-link>
                        </li>
                        <li class="header__menu-link">
                            <router-link to="/budget" exact-active-class="header__menu-link--active">
                                <span>Budget</span>
                            </router-link>
                        </li>
                        <li class="header__menu-link">
                            <router-link to="/boutique" exact-active-class="header__menu-link--active">
                                <span>Boutique</span>
                            </router-link>
                        </li>
                        <li class="header__menu-link">
                            <router-link to="/contact" exact-active-class="header__menu-link--active">
                                <span>Contact us</span>
                            </router-link>
                        </li>
                    </ul>
                </nav>

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
</style>
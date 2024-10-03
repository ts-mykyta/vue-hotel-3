<script setup>
import { ref} from 'vue';
import ContactPopup from './ContactPopup.vue';

function getCurrentYear() {
    return new Date().getFullYear();
}

// Popup
const visible = ref(false);

function showPopup() {
  visible.value = true;
}

function closePopup() {
  visible.value = false;
}

</script>

<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__logo">
                <router-link to="/" exact-active-class="header__menu-link--active">
                    <span>Hotels & Casinos</span>
                    <div style="text-align: center; margin-top: -10px;">Top</div>
                </router-link>
            </div>

            <ul class="footer__menu">
                <li class="header__menu-link">
                    <router-link to="/about" exact-active-class="header__menu-link--active">
                        <span>About Us</span>
                    </router-link>
                </li>
                <li class="header__menu-link">
                    <router-link to="/terms" exact-active-class="header__menu-link--active">
                        <span>Terms and Conditions</span>
                    </router-link>
                </li>
                <li class="header__menu-link">
                    <router-link to="/privacy" exact-active-class="header__menu-link--active">
                        <span>Privacy Policy</span>
                    </router-link>
                </li>
                <li class="header__menu-link">
                    <span @click="showPopup">Contact Us</span>
                </li>
            </ul>


            <div class="footer__copyright">
                Copyright © {{ getCurrentYear() }} Hotels & Casinos
            </div>
        </div>

        <ContactPopup :visible="visible" @close="closePopup" />
    </footer>
</template>

<style scoped lang="sass">
@import '../assets/styles/main'


.footer
    background: $blue
    color: $white
    padding: 20px 0

    &__logo
        font-family: "Alegreya SC", sans-serif
        font-size: 32px
        font-weight: 500
        transition: $transition
        text-transform: uppercase
        text-align: center
        margin-bottom: 10px

    &__menu 
        display: flex
        justify-content: center
        align-items: center
        flex-wrap: wrap
        gap: 10px
        margin-bottom: 10px

        li
            cursor: pointer

    &__copyright
        text-align: center
</style>
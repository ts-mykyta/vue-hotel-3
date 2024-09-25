<script setup>
import { defineProps, defineEmits } from 'vue';
import ContactForm from './blocks/ContactForm.vue';

const props = defineProps({
  visible: Boolean,
});

const emit = defineEmits(['close']);

function closePopup() {
  emit('close');
}
</script>

<template>
    <div v-if="visible" class="popup-overlay">
      <div class="popup">
        <button class="close-button" @click="closePopup">&times;</button>
  
        <h2>Contact us now</h2>
  
        <form @submit.prevent>
          <input type="text" placeholder="Your Name" class="input-field" />
  
          <input type="email" placeholder="Email Address" class="input-field" />

          <textarea class="input-field" placeholder="Message"></textarea>
  
          <div class="checkbox-group">
            <label>
              <input type="checkbox" />
              I would like to receive exclusive promotions via Email & SMS
            </label>
            <label>
              <input type="checkbox" />
              I accept the 
              <!-- <a href="#" class="terms-link">Terms and Conditions</a> -->
              <router-link to="/terms" class="terms-link" target="_blank">
                  <span>Terms and Conditions</span>
              </router-link> 
            </label>
          </div>
  
          <button type="submit" class="submit-button">Submit Now</button>
        </form>
      </div>
    </div>
</template>
  
<style scoped lang="scss">
  @import '../assets/styles/main';
  
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  
  .popup {
    color: $black;
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    width: 400px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    position: relative;
  }
  
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
  }
  
  h2 {
    font-size: 24px;
    margin-bottom: 20px;
    font-family: "Alegreya SC", sans-serif;
    text-transform: uppercase;
  }
  
  textarea {
    resize: none;
  }

  .input-field {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .checkbox-group {
    text-align: left;
    margin-bottom: 15px;
  }
  
  .checkbox-group label {
    display: block;
    font-size: 14px;
    margin-bottom: 5px;
  }
  
  .terms-link {
    color: $blue;
    text-decoration: underline;
  }
  
  .submit-button {
    background-color: $blue;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    margin-top: 15px;
  }
  
  .submit-button:hover {
    opacity: .8
  }
</style>
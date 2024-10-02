<script setup>
</script>

<template>
<section class="contact">
    <div class="container">
        <div class="contact-form" id="contact-form">
            <h2>CONTACT US NOW</h2>
            <p>If you have any questions, please send us a message or send us an email to 
                <a href="mailto:support@hotelscasinotop.com">support@hotelscasinotop.com</a>, 
                and we will respond to your message as promptly as possible.
            </p>
            <form>
                <input type="text" placeholder="Your Name" required>
                <input type="email" placeholder="Email Address" required>
                <textarea placeholder="Message" required></textarea>
                <button type="submit">SEND</button>
            </form>
        </div>
    </div>
</section>
</template>

<style scoped lang="sass">
@import "../../assets/styles/main"

.contact-form
  background-color: #ffffff
  max-width: 500px
  margin: 50px auto
  padding: 20px
  border-radius: 8px
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1)

  @media (min-width: 768px)
    padding: 50px

  h2
    font-family: "Alegreya SC", sans-serif
    text-align: center
    color: #222
    margin-bottom: 20px

  p
    color: #555
    line-height: 1.6
    margin-bottom: 20px

    a
      color: $blue
      text-decoration: none

      &:hover
        text-decoration: underline

  form
    display: flex
    flex-direction: column
    gap: 15px

    input,
    textarea
      width: 100%
      padding: 15px
      border: 1px solid #ccc
      border-radius: 5px
      font-size: 16px

      &:focus
        outline: none
        border-color: #007bff
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5)

    textarea
      font-family: sans-serif
      resize: vertical
      height: 100px
      resize: none

    button
      background-color: #007bff
      color: #fff
      padding: 15px
      border: none
      border-radius: 5px
      cursor: pointer
      font-size: 16px
      transition: background-color 0.3s

      &:hover
        background-color: #0056b3
</style>
<template>
<div class="element" :class="{ show }">
  <div class="wraper">
    <img src="./../assets/loRes.png" alt="Loading" class="thumb">
    <spinner></spinner>
  </div>
  <div class="info container">
    <h2>Searching</h2>
  </div>
</div>
</template>

<script>
import Spinner from './Spinner'
export default {
  name: 'loding-media',
  props: {
    show: false
  },
  components: {
    Spinner
  }
}

</script>

<style lang="stylus" scoped>

@require './../assets/style/colors'

.element
  width calc(100%/3)
  opacity 0
  transition 0.3s ease opacity
  .info
    color $secondary-text
    h2
      font-family 'Poppins'
      font-size 24px
      color $primary-text
      margin 15px 0px 5px 0px
  .wraper
    position relative
    .thumb
      width 100%

.show
  opacity 1

/* Tablets */
@media all and (max-width 800px)
  .element
    width 50%


/* Mobile */
@media all and (max-width 500px)
  .element
    width 100%;

</style>

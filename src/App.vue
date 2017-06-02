<template>
<div id="app">
  <top-bar></top-bar>
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
</div>

</template>

<script>
import TopBar from '@/components/TopBar'
export default {
  components: {
    TopBar
  }
}

</script>

<style lang="stylus">

@require './assets/style/colors'

body,
html
  width 100%
  height 100%
  font-family 'Roboto', sans-serif
  margin 0
  color $primary-text

  body
    overflow-y scroll

*
  box-sizing border-box

a
  &:link
    color $primary-text
    text-decoration none
  &:visited
    color $primary-text
    text-decoration none

.button, button, input[type="button"]
    padding 8px 18px
    border 2px solid $red-variant
    color white !important
    text-decoration none
    border-radius 3px
    font-size 12px
    font-family 'Montserrat'
    display inline-block

.container
  width 80%
  margin 0 auto

.fade-enter-active, .fade-leave-active
  transition all .5s ease

.fade-enter, .fade-leave-active
  opacity 0

</style>

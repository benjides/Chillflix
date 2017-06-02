<template>
<transition-group name="blur" tag="div" class="thumb">
  <img class="placeholder blur-transition" key="placeholder" src="./../assets/loRes.png"></img>
  <img v-show="src === hiRes" :src="hiRes" key="hiRes" class="img blur-transition"></img>
</transition-group>
</template>

<script>
export default {
  props: [
    'fanart'
  ],
  data () {
    return {
      src: null,
      hiRes: `https://image.tmdb.org/t/p/original${this.fanart}`
    }
  },
  mounted () {
    let hiRes = new Image()
    hiRes.onload = () => {
      this.src = this.hiRes
    }
    hiRes.src = this.hiRes
  }
}

</script>

<style lang="stylus" scoped>

.thumb
  width 100%
  position relative
  overflow hidden
  display flex

img
  width 100%

.placeholder
  height 100%

.img
  position absolute

.blur-transition
  transition opacity linear .4s 0s
  opacity 1

.blur-enter,
.blur-leave
  opacity 0

</style>

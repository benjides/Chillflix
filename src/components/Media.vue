<template>
<div class="element">
  <router-link :to="{ path: `${$store.state.type}/${media.id}` }">
    <blurry-image :fanart="media.fanart"></blurry-image>
  </router-link>
  <div class="info container">
    <h2>{{media.title}}</h2>
    <div class="subinfo">
      <div class="stars">
        <i class="material-icons"
          v-for="i in 5"
          :key="i"
          :class="{ active: i <= Math.floor(media.rating / 2)}">
            fiber_manual_record
        </i>
      </div>
      <div class="year">{{media.year}}</div>
      <div v-if="seasons" class="seasons">{{seasons}}</div>
    </div>
    <div class="overview">{{media.overview}}</div>
  </div>
</div>

</template>

<script>
import pluralize from 'pluralize'
import BlurryImage from './BlurryImage'
export default {
  name: 'media',
  components: {
    BlurryImage
  },
  props: {
    media: Object
  },
  computed: {
    fanart: function () {
      return this.media.fanart ? `https://image.tmdb.org/t/p/original${this.media.fanart}` : '/static/assets/placeholder.png'
    },
    seasons: function () {
      return this.media.num_seasons ? pluralize('Season', this.media.num_seasons, true) : null
    }
  }
}
</script>

<style lang="stylus">

@require './../assets/style/colors'

.element
  width calc(100%/3)
  .info
    color $secondary-text
    h2
      font-family 'Poppins'
      font-size 24px
      color $primary-text
      margin 15px 0px 5px 0px
    .overview
      max-height 100px
      margin 15px 0px 50px 0px
      overflow hidden
      text-overflow ellipsis
      display -webkit-box
      -webkit-line-clamp 5
      -webkit-box-orient vertical
      text-overflow ellipsis

.subinfo
  div
    margin 10px
    display inline
  .stars
    margin-left 0
    i
      font-size 10px
      margin 0
    .active
      color $red-variant;

/* Tablets */
@media all and (max-width 800px)
  .element
    width 50%

/* Mobile */
@media all and (max-width 500px)
  .element
    width 100%;

</style>

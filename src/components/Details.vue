<template>
<div class="details">
  <spinner v-if="loading"></spinner>

  <div class="details-wraper" v-if="!loading">
    <c-title :title="item.title"></c-title>
    <img class="cover" :src="fanart" :alt="item.title" />
    <div class="contents">
      <div class="info container">
        <span class="duration">{{item.runtime}} minutes</span>
        <h1>{{item.title}}</h1>
        <span v-if="seasons">{{seasons}}</span>
        <div class="subinfo">
          <div class="stars">
            <i class="material-icons"
              v-for="i in 5"
              :key="i"
              :class="{ active: i <= Math.floor(item.rating / 2)}">
              fiber_manual_record
            </i>
          </div>
          <div class="rating">
            <span>{{rating}}/</span>
            <span class="ten">10</span>
          </div>
          <div class="year">{{item.year}}</div>
          <div class="genre">{{genres}}</div>
        </div>
        <div class="overview">{{item.overview}}</div>
        <a :href="item.catalog" class="button" target="_blank">EXPLORE TORRENTS</a>
        <a v-if="item.trailer" :href="item.trailer" class="button" target="_blank">WATCH TRAILER</a>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import pluralize from 'pluralize'
import Spinner from './Spinner'
import Title from './Title'
export default {
  name: 'details',
  components: {
    Spinner,
    'c-title': Title
  },
  props: {
    type: String
  },
  data () {
    return {
      item: {},
      loading: true
    }
  },
  created () {
    this.$store.dispatch('fetchId', { type: this.type, id: this.$route.params.id })
      .then(item => {
        this.item = item
        this.loading = false
      })
  },
  computed: {
    fanart: function () {
      return `https://image.tmdb.org/t/p/original${this.item.fanart}`
    },
    seasons: function () {
      return this.item.num_seasons ? pluralize('Season', this.item.num_seasons, true) : null
    },
    rating: function () {
      return parseFloat(this.item.rating).toFixed(1)
    },
    genres: function () {
      if (this.item.genres === undefined) {
        return null
      }
      return this.item.genres.map(genre => {
        return genre.charAt(0).toUpperCase() + genre.slice(1)
      }).join(', ')
    }
  }
}
</script>

<style lang="stylus">

@require './../assets/style/colors'

.details-wraper
  position absolute
  top 0px
  width 100%
  height 100%
  z-index 50
  .cover
    z-index -10
    object-fit cover
    height 100%
    width 100%
    position fixed

  .contents
      display flex
      align-items center
      height 100%

  .info
      color $white
      background-color rgba(0,0,0,0.4)
      padding 20px
      h1
        font-family 'Poppins'
        margin: -10px 0
        font-size 45px

  .duration
      color $red-variant

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
        color $red
    .ten
      font-size 24px
      margin -5px

  .overview
    margin 20px 0px

/* Mobile */
@media all and (max-width 500px)
  .details-wraper
    .container
      width 100%

    .contents
      align-items initial
    .info
      padding 70px 18px 0 18px
      h1
        font-size 30px
      .overview
        overflow overlay

</style>

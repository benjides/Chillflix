<template>
<div>
  <c-title :title="type.charAt(0).toUpperCase() + type.slice(1)"></c-title>
  <div class="rooster">
    <h1 v-if="!q">Trending {{type}}</h1>
    <h1 v-else>Search results for : {{q}}</h1>
    <transition-group tag="section" class="content" name="item">
      <media v-for="elem in display" :media="elem" :key="elem"></media>
      <loading-media :show="searching" key="searching"></loading-media>
    </transition-group>
  </div>
</div>

</template>

<script>
import Media from './Media'
import LoadingMedia from './LoadingMedia'
import Title from './Title'
import _ from 'lodash'

export default {
  name: 'rooster',
  props: {
    type: String
  },
  components: {
    Media,
    LoadingMedia,
    'c-title': Title
  },
  data () {
    return {
      loading: true,
      searching: false,
      q: ''
    }
  },
  created () {
    this.$store.dispatch('fetchTrending', {
      type: this.type
    }).then(() => {
      this.loading = false
    })
  },
  watch: {
    '$route.query.q': function (q) {
      this.filter(q)
      this.q = q
    }
  },
  computed: {
    display () {
      if (this.q) {
        return this.$store.getters.activeList.filter(item => item.title.toUpperCase().includes(this.q.toUpperCase()))
      }
      return this.$store.getters.trendingList
    }
  },
  methods: {
    filter (q) {
      if (q) {
        this.searching = true
        this.search(q, this)
      }
    },
    search: _.debounce((q, v) => {
      v.$store.dispatch('search', {q})
        .then(() => {
          v.searching = false
        })
    }, 700)
  }
}
</script>


<style lang="stylus">

@require './../assets/style/colors'

.rooster
  margin-top 70px
  h1
    width 100%
    text-transform uppercase
    text-align center
.content
  display flex
  flex-wrap wrap

</style>

<template>
<section class="content">
  <h1>Popular {{$route.name}}</h1>
  <media v-if="!loading" v-for="media in sliceData" :media="media"></media>
</section>

</template>

<script>
import Media from './Media.vue'
import api from '../api/api.js'

export default {
  components: {
    'media': Media
  },
  data () {
    return {
      loading: true,
      error: false,
      data: []
    }
  },
  created () {
    this.fetchData()
  },
  computed: {
    sliceData: function () {
      return this.data.slice(0, this.data.length - (this.data.length % 6))
    }
  },
  watch: {
    $route () {
      this.fetchData()
    }
  },
  methods: {
    fetchData () {
      this.loading = true
      switch (this.$route.name) {
        case 'Shows':
          api.popularShows(this)
          break
        case 'Movies':
          api.popularMovies(this)
          break
      }
      this.loading = false
      this.data = api.media
    }
  }
}

</script>

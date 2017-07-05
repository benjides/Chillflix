<template>
<div>
  <footer>
    <div class="nav container">
      <ul>
        <router-link tag='li' to="/shows">
          <a>
            <i class="material-icons">tv</i>
          </a>
        </router-link>
        <router-link tag='li' to="/movies">
          <a>
            <i class="material-icons">local_movies</i>
          </a>
        </router-link>
        <li>
          <div v-on:click="search = !search">
            <i v-if="!search" class="material-icons">search</i>
            <i v-if="search" class="material-icons">close</i>
          </div>
        </li>
      </ul>
    </div>
  </footer>
  <transition name="fade">
    <div v-if="search" class="search-wraper">
      <div class="form-wraper">
        <div class="input">
          <input type="text" v-model="q" placeholder="Search">
        </div>
      </div>
    </div>
  </transition>
</div>
</template>

<script>
export default {
  data () {
    return {
      q: '',
      search: false
    }
  },
  created () {
    this.q = this.$route.query.q
  },
  watch: {
    q: function (q, old) {
      if (q) {
        let uri = `/${this.$store.state.type}?q=${q}`
        old ? this.$router.replace(uri) : this.$router.push(uri)
      } else {
        this.$router.push('')
      }
    }
  },
  methods: {
    toggle: function () {
      this.search = !this.search
    }
  }
}
</script>

<style lang="stylus">

  @require './../assets/style/colors'

  .search-wraper
    width 100%
    height 100%
    position fixed
    top 0
    z-index 95
    background-color rgba(0, 0, 0, 0.85)
    .form-wraper
      padding 40px 0 50px 0
      background-color black
      .input
        width 90%
        margin 0 auto
    input
      color white
      background transparent
      border 0px
      padding 0 0 10px
      border-bottom 2px solid $primary-text
      width 100%
      transition 0.2s ease all
      font-size 30px
      &:focus
        outline none
        border-bottom 2px solid $red

  footer
    position fixed
    bottom 0
    height 55px
    width 100%
    z-index 100
    background-color white
    display none
    flex-wrap wrap
    align-items center
    border-top 1px solid #eee

  .nav ul
    padding 0
    margin 0
    display flex
    justify-content space-around
    li
      display inline
      padding 5px
      i
        vertical-align middle
    .active
      a
        color $red

  .fade-enter-active, .fade-leave-active
    transition opacity .4s

  .fade-enter, .fade-leave-to
    opacity 0

  /* Mobile */
  @media all and (max-width 500px)
    footer
      display flex

</style>

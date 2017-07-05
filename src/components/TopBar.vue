<template>
  <header>
    <div class="navbar container">
        <div class="menu">
          <ul>
            <router-link tag='li' to="/shows">
              <a>
                <i class="material-icons">tv</i>
                <span>Shows</span>
              </a>
            </router-link>
            <router-link tag='li' to="/movies">
              <a>
                <i class="material-icons">local_movies</i>
                <span>Movies</span>
              </a>
            </router-link>
          </ul>
        </div>
        <div class="logo">
          <img src="./../assets/logo.png" alt="Chillflix">
        </div>
        <div class="search">
          <i class="material-icons">search</i>
          <input type="search" v-model="q" placeholder="Search">
        </div>
      </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      q: ''
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
  }
}
</script>

<style lang="stylus">

  @require './../assets/style/colors'

  header
    position absolute
    top 0
    height 70px
    width 100%
    z-index 90

  .navbar
    display flex
    flex-wrap wrap
    align-items center
    height 100%
    .menu,.search
      width 25%
    i
      vertical-align middle

  .menu ul
    padding 0
    margin 0
    display inline
    li
      display inline
      border-bottom 1px solid transparent
      padding 5px
      &:hover
        border-bottom 1px solid $red
      i
        display none
    .active
      a
        color $red


  .logo
    height 100%
    flex-grow 1
    img
      height 100%
      padding 15px
      display block
      margin 0 auto

  .menu
    i
    vertical-align middle

  .search
    position relative
    i
      position absolute
      left 0px
      color $secondary-text
    input
      background transparent
      border 0px
      padding 0 0 10px
      border-bottom 1px solid $primary-text
      width 100%
      transition 0.2s ease all
      text-indent 35px
      &:focus
        outline none
        border-bottom 1px solid $red


  /* Tablets */
  @media all and (max-width 800px)
    .menu
      i
        display none
      ul
        li
          span
            display none
          i
            display inline


  /* Mobile */
  @media all and (max-width 500px)
    .container
      width 90%

    .menu,.search
      display none

</style>

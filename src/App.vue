<template>
  <div class="wraper">
    <header>
        <div class="navbar container">
          <div class="menu">
            <i class="material-icons">menu</i>
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
            <img src="./assets/logo.png" alt="Logo">
          </div>

          <div class="account">
            <i class="material-icons">search</i>
            <input type="search" v-model="q">
          </div>

        </div>

    </header>
    <router-view></router-view>

  </div>

</template>

<style>
  @import "./assets/css/app.css";
</style>

<script>
  export default {
    data () {
      return {
        q: ''
      }
    }
  }
</script>

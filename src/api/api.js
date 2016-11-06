const POPCORN_TIME = 'https://movies-v2.api-fetch.website/'

export default {

  media: [],
  // Shows
  popularShows (context) {
    this.media = []
    context.$http.get(POPCORN_TIME + 'shows/1/')
      .then((response) => {
        if (response.status === 200) {
          this.shows = response.data.results
          response.data.forEach(item => {
            this.fetchShow(context, item._id)
          })
        } else {
          this.error = true
        }
      })
  },
  fetchShow (context, id) {
    context.$http.get(POPCORN_TIME + 'show/' + id + '/')
      .then((response) => {
        if (response.status === 200) {
          var show = response.data
          show.type = 'show'
          show.id = id
          show.overview = show.synopsis
          show.rating = show.rating.percentage
          this.media.push(show)
        }
      })
  },
  // Movies
  popularMovies (context) {
    this.media = []
    context.$http.get(POPCORN_TIME + 'movies/1/')
      .then((response) => {
        if (response.status === 200) {
          this.shows = response.data.results
          response.data.forEach(item => {
            this.fetchMovie(context, item._id)
          })
        } else {
          this.error = true
        }
      })
  },
  fetchMovie (context, id) {
    var movie = {}
    movie.type = 'movie'
    context.$http.get(POPCORN_TIME + 'movie/' + id + '/')
      .then((response) => {
        if (response.status === 200) {
          var movie = response.data
          movie.overview = movie.synopsis
          movie.rating = movie.rating.percentage
          this.media.push(movie)
        }
      })
  }
}

import axios from 'axios'

const TMDB = 'https://api.themoviedb.org/3/'
import {TMDB_KEY} from './../env'

const params = {
  api_key: TMDB_KEY,
  append_to_response: 'credits'
}

export function tmdb (type, id) {
  let url = TMDB
  switch (type) {
    case 'shows':
      url += `tv/${id}`
      break
    case 'movies':
      url += `movie/${id}`
      break
  }
  return axios.get(url, { params })
}

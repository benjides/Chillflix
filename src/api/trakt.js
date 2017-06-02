import axios from 'axios'

import {TRAKT_KEY} from './../env'
const TRAKT = 'https://api.trakt.tv/'

const headers = {
  'Content-Type': 'application/json',
  'Trakt-Api-Version': '2',
  'Trakt-Api-Key': TRAKT_KEY
}
const params = {
  limit: 24,
  extended: 'full'
}

export function trending (type) {
  let url = `${TRAKT}${type}/trending`
  return axios.get(url, {params, headers})
}

export function search (type, q) {
  type = type.slice(0, -1)
  let url = `${TRAKT}search/${type}?query=${q}`
  return axios.get(url, {params, headers})
}

export function idLookup (id) {
  let url = `${TRAKT}search/imdb/${id}`
  return axios.get(url, {params, headers})
}

import axios from 'axios'

const POPCORNTIME = 'https://movies-v2.api-fetch.website/'

export function popcorntime (type, id) {
  let url = POPCORNTIME + type.slice(0, -1) + '/' + id
  return axios.get(url)
}

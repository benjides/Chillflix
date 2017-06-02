import {trending, search, idLookup} from './trakt'
import {popcorntime} from './popcorntime'
import {tmdb} from './tmdb'

export function trendingByType (type) {
  let index = type.slice(0, -1)
  return trending(type).then(response => {
    return Promise.all(response.data.map(item => {
      return fetchItem(type, item[index]).then(item)
    }))
  })
}

export function searchByType (type, q, ids) {
  let index = type.slice(0, -1)
  return search(type, q).then(response => {
    return Promise.all(response.data.map(item => {
      if (ids[item[index].ids.imdb] || !item[index].ids.imdb) {
        return Promise.resolve()
      }
      return fetchItem(type, item[index]).then(item)
    }))
  }).then(response => response.filter(item => item !== undefined && 'id' in item))
}

export function fetchById (type, id) {
  let index = type.slice(0, -1)
  return idLookup(id).then(response => {
    return fetchItem(type, response.data[0][index])
  })
}

function fetchItem (type, item) {
  return Promise.all([
    tmdb(type, item.ids.tmdb),
    popcorntime(type, item.ids.imdb)
  ]).then(([tmdb, popcorn]) => {
    item.id = item.ids.imdb
    item.fanart = tmdb.data.backdrop_path
    item.poster = tmdb.data.poster_path
    item.cast = tmdb.data.credits.cast
    switch (type) {
      case 'shows':
        item.num_seasons = tmdb.data.number_of_seasons
        item.catalog = `https://rarbg.to/tv/${item.id}/`
        break
      case 'movies':
        item.catalog = `https://rarbg.to/torrents.php?imdb=${item.id}`
        break
    }
    return item
  }).catch(() => {
    console.log('Error occured while fetching ' + item.id)
    return
  })
}

// function reflect (promise) {
//   return promise
//   .then(v => {
//     return { v, status: 'resolved' }
//   }, e => {
//     return { e, status: 'rejected' }
//   })
// }

// function serial (promises) {
//   return new Promise(resolve => {
//     next(promises, []).then(data => {
//       resolve(data)
//     })
//   })
//   function next (promises, results) {
//     if (!promises.length) {
//       return Promise.resolve(results)
//     }
//     promises.shift().then(item => {
//       results.push(item)
//       next(promises, results)
//     }).catch(err => {
//       console.log(err)
//       next(promises, results)
//     })
//   }
// }

// function addTorrents (type, data) {
//   return Promise.resolve([])
//   // if (!data) {
//   //   return Promise.resolve([])
//   // }
//   // let results = []
//   // switch (type) {
//   //   case 'shows':
//   //     for (let episode of data.episodes) {
//   //       let torrents = []
//   //       for (let quality in episode.torrents) {
//   //         let torrent = episode.torrents[quality]
//   //         torrent.quality = quality
//   //         torrents.push(torrent)
//   //       }
//   //       episode.torrents = torrents
//   //       results.push(episode)
//   //     }
//   //     break
//   //   case 'movies':
//   //     for (let quality in data.torrents.en) {
//   //       let torrent = data.torrents.en[quality]
//   //       torrent.quality = quality
//   //       results.push(torrent)
//   //     }
//   //     break
//   // }
//   // return Promise.resolve(results)
// }

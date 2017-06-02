import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import { trendingByType, searchByType, fetchById } from '@/api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    type: null,
    shows: {},
    movies: {},
    lists: {
      'shows': [],
      'movies': []
    }
  },
  actions: {
    setType: ({ commit }, { type }) => {
      commit('SET_TYPE', { type })
    },
    fetchTrending: ({ commit, state }, { type }) => {
      commit('SET_TYPE', { type })
      if (!_.isEmpty(state[type])) {
        return Promise.resolve()
      }
      return trendingByType(type)
        .then(media => {
          commit('SET_MEDIA', { type, media })
        })
    },
    search: ({ commit, state }, { q }) => {
      return searchByType(state.type, q, state[state.type])
        .then(results => {
          return results.map(item => commit('ADD_MEDIA', { item }))
        })
    },
    fetchId: ({ commit, state }, { type, id }) => {
      commit('SET_TYPE', { type })
      if (state[type][id]) {
        return Promise.resolve(state[type][id])
      }
      return fetchById(type, id)
        .then(item => {
          commit('ADD_MEDIA', { item })
          return item
        })
    }
  },
  mutations: {
    SET_TYPE: (state, { type }) => {
      state.type = type
    },
    SET_MEDIA: (state, { type, media }) => {
      state.lists[type] = media
      media.map(item => {
        Vue.set(state[state.type], item.id, item)
      })
    },
    ADD_MEDIA: (state, { item }) => {
      Vue.set(state[state.type], item.id, item)
    }
  },
  getters: {
    trendingList: state => {
      return state.lists[state.type]
    },
    activeList: state => {
      return _.values(state[state.type])
    }
  }
})

export default store

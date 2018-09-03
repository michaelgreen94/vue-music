import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

let songApi = axios.create({
  baseURL: 'https://itunes.apple.com/search?term=',
  timeout: 3000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    song: {},
    songs: [],
    playlist: {},
    playlists: []
  },
  mutations: {
    displaySongs(state, data) {
      state.songs = data
    }
  },
  actions: {
    findSongs({ commit, dispatch }, details) {
      songApi.get(details)
        .then(res => {
          commit('displaySongs', res.data.results)
        })
    }
  }
})

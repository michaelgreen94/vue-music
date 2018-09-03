import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import Song from './models/Song'

let songApi = Axios.create({
  baseURL: 'https://itunes.apple.com/search?term=',
  timeout: 3000
})

let serverApi = Axios.create({
  baseURL: '//localhost:3000/api/playlists'
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
    },
    allPlaylists(state, data) {
      state.playlists = [data]
    },
    selectedPlaylist(state, data) {
      state.playlist = data
    }
  },
  actions: {
    findSongs({ commit, dispatch }, details) {
      songApi.get(details)
        .then(res => {
          let songs = res.data.results.map(s => new Song(s))
          commit('displaySongs', songs)
        })
    },
    createPlaylist({ commit, dispatch }, params) {
      // debugger
      serverApi.post('/', params)
        .then(res => {
          dispatch('getPlaylists')
        })
    },
    getPlaylists({ commit, dispatch }) {
      serverApi.get('/')
        .then(res => {
          commit('allPlaylists', res.data)
        })
    },
    getPlaylist({ commit, dispatch }, playlistId) {
      serverApi.get('/' + playlistId)
        .then(res => {
          commit('selectedPlaylist', res.data)
        })
    },
    deletePlaylist({ commit, dispatch }, playlistId) {
      serverApi.delete('/' + playlistId)
        .then(res => {
          dispatch('getPlaylists', res.data)
        })
    },
    addToPlaylist({ commit, dispatch, state }, song) {
      serverApi.post('/' + state.playlist._id, song)
        .then(res => {
          dispatch('getPlaylist', res.data)
        })
    }
  }
})

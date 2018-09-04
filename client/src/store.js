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
    //gets songs from API
    findSongs({ commit, dispatch }, details) {
      songApi.get(details)
        .then(res => {
          let songs = res.data.results.map(s => new Song(s))
          commit('displaySongs', songs)
        })
    },
    //creates a new playlist
    createPlaylist({ commit, dispatch }, params) {
      serverApi.post('/', params)
        .then(res => {
          dispatch('getPlaylists')
        })
    },
    //gets the list of playlists
    getPlaylists({ commit, dispatch }) {
      serverApi.get('/')
        .then(res => {
          commit('allPlaylists', res.data)
        })
    },
    //gets the active playlist (the one thats selected to view by user)
    getPlaylist({ commit, dispatch }, playlistId) {
      serverApi.get('/' + playlistId)
        .then(res => {
          commit('selectedPlaylist', res.data)
        })
    },
    //this ones obvious, deletes playlist
    deletePlaylist({ commit, dispatch }, playlistId) {
      serverApi.delete('/' + playlistId)
        .then(res => {
          dispatch('getPlaylists', res.data)
        })
    },
    //adds song to selected playlist
    addToPlaylist({ commit, dispatch, state }, song) {
      serverApi.post('/' + state.playlist._id, song)
        .then(res => {
          dispatch('getPlaylist', state.playlist._id)
        })
    },
    //deletes selected song from active playlist 
    deleteFromPlaylist({ commit, dispatch, state }, songId) {
      serverApi.delete('/' + state.playlist._id + '/song/' + songId)
        .then(res => {
          dispatch('getPlaylist', state.playlist._id)
        })
    }
  }
})

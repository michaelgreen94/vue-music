<template>
  <div class="playlist">
    <h1>Create Playlist</h1>
    <form @submit.prevent="createPlaylist">
      <label for="name">Your Name </label>
      <input id="name" type="text" v-model="playlistParams.ownerName">
      <label for="title">Name your Playlist </label>
      <input type="text" id="title" v-model="playlistParams.title">
      <button type="submit">Create</button>
    </form>
    <div class="selected-playlist" v-for="song in playlist.songs">
      <h4>Artist: {{song.artistName}}</h4>
      <h4>Track: {{song.trackName}}</h4>
      <h4>Album: {{song.collectionName}}</h4>
      <img :src="song.artworkUrl60" alt="">
      <audio controls :src="song.previewUrl" @play="pauseEm(song.previewUrl)" />
      <button @click="deleteFromPlaylist(song._id)">Delete</button>
    </div>
    <div class="all-playlists" v-for="playlist in playlists">
      <h4>{{playlist.title}}</h4>
      <button @click="selectPlaylist(playlist._id)">Select Playlist</button>
      <button @click="deletePlaylist(playlist._id)">Delete</button>
    </div>
  </div>
</template>

<!-- v-if="playlist._id" -->

<script>
  export default {
    name: 'Playlist',
    data() {
      return {
        playlistParams: {}
      }
    },
    computed: {
      playlist() {
        return this.$store.state.playlist
      },
      playlists() {
        return this.$store.state.playlists
      }
    },
    methods: {
      createPlaylist() {
        this.$store.dispatch('createPlaylist', this.playlistParams)
        this.playlistParams = {}
      },
      selectPlaylist(playlistId) {
        this.$store.dispatch('getPlaylist', playlistId)
      },
      deletePlaylist(playlistId) {
        this.$store.dispatch('deletePlaylist', playlistId)
      },
      deleteFromPlaylist(songId) {
        this.$store.dispatch('deleteFromPlaylist', songId)
      },
      pauseEm(Url) {
        let songs = document.getElementsByTagName('audio')
        for (let i = 0; i < songs.length; i++) {
          let song = songs[i]
          console.log(song)
          if (song.src != Url) {
            song.pause()
          }
        }
      }
    }
  }
</script>

<style>
  .playlist {
    height: 100%;
    background-color: #212121;
    display: flex;
    display: inline-block;
  }

  .all-playlists {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    border: 1px solid black;
    background: linear-gradient(to top, grey, darkgrey, white);
  }
</style>
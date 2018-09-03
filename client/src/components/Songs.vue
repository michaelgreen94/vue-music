<template>
  <div class="songs">
    <h1>Songs here</h1>
    <div class="song-results" v-for="song in songs">
      <h4>Artist: {{song.artistName}}</h4>
      <h4>Track: {{song.trackName}}</h4>
      <h4>Album: {{song.collectionName}}</h4>
      <img :src="song.artworkUrl60" alt="">
      <audio controls :src="song.previewUrl" />
      <button @click="addToPlaylist(song)">Add to Playlist</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Songs",
    data() {
      return {
        activeSong: { songId: "" }
      }
    },
    computed: {
      songs() {
        return this.$store.state.songs
      }
    },
    methods: {
      currentSong(id) {
        this.activeSong.songId = id
      },
      addToPlaylist(song) {
        this.$store.dispatch('addToPlaylist', song)
      }
    }
  }
</script>

<style>
  .song-results {
    border: 1px solid black;
  }
</style>
<template>
  <div class="songs">
    <h1>Songs here</h1>
    <div class="song-results" v-for="song in songs" :key="song.id">
      <h4>Artist: {{song.artistName}}</h4>
      <h4>Song Name: {{song.trackName}}</h4>
      <img :src="song.artworkUrl60" alt="">
      <audio controls>
        <source v-bind:src="song.previewUrl" type="audio/ogg" @click="currentSong()">
      </audio>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Songs",
    data() {
      return {
        activeSong: {}
      }
    },
    computed: {
      songs() {
        return this.$store.state.songs
      }
    },
    method: {
      currentSong() {
        activeSong = 
      }
    }
  }
</script>

<style>
  .song-results {
    border: 1px solid black;
  }
</style>
<template>
  <div class="songs">
    <h1>Songs here</h1>
    <div class="song-results" v-for="song in songs" :key="song.id">
      <h4>Artist: {{song.artistName}}</h4>
      <h4>Song Name: {{song.trackName}}</h4>
      <img :src="song.artworkUrl60" alt="">
      <audio controls>
        <source :src="song.previewUrl" type="audio/ogg">
      </audio>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Songs",
    computed: {
      songs() {
        return this.$store.state.songs
      }
    }
  }
</script>

<style>
</style>
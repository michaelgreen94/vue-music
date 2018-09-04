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
  .songs {
    height: 40rem;
    width: 35rem;
    overflow: auto;
    background: linear-gradient(to top, grey, darkgrey, white);
    border-radius: 10px;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: grey;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, .3)
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: white;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, .3)
  }
</style>
<template>
  <div class="songs">
    <div class="song-results" v-for="song in songs">
      <i class="addPlayL fas fa-plus-circle" @click="addToPlaylist(song)"></i>
      <p class="truncate">{{song.artistName}}</p>
      <p class="truncate">{{song.trackName}}</p>
      <p class="truncate">{{song.collectionName}}</p>
      <audio class="shrink" controls :src="song.previewUrl" @play="pauseEm(song.previewUrl)" />
    </div>
    <!-- <div v-else class="no-music">
      <h1>Oh no you havent searched for music</h1>
    </div> -->
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
  .songs {
    height: 50%;
    width: 50%;
    overflow: auto;
    background: linear-gradient(to top, #1db954, #212121, #535353);
    border-radius: 5px;
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

  .song-results {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
    border-top: 1px solid black;
    align-items: center;
    color: white;
    margin: 0 5px 0 .5rem;
  }

  .truncate {
    width: 10rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .addPlayL {
    cursor: pointer;
    font-size: 1.5rem;
    padding: 0 .5rem 0 .5rem;
    color: black
  }

  .shrink {
    transform: scale(.8, .7);
  }
</style>
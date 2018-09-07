<template>
  <div class="songs">
    <div class="song-results" v-for="song in songs">
      <button @click="addToPlaylist(song)">Add to Playlist</button>
      <p class="truncate">{{song.artistName}}</p>
      <p class="truncate">{{song.trackName}}</p>
      <p class="truncate">{{song.collectionName}}</p>
      <audio controls :src="song.previewUrl" @play="pauseEm(song.previewUrl)" />
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
    width: auto;
    overflow: auto;
    background: linear-gradient(to top, grey, darkgrey, white);
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
    border: 1px solid black;
  }

  .truncate {
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
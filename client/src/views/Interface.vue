<template>
  <div class="home">
    <div class="header">
      <img class="logo" alt="Vue logo" src="../assets/logo.png">
      <form class="form" @submit.prevent="findSongs">
        <input id="search" type="text" placeholder="Search Music" v-model="details">
        <input type="submit">
      </form>
    </div>
    <div class="display">
      <Songs />
      <playlist />
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Songs from '@/components/Songs.vue'
  import Playlist from '@/components/Playlist.vue'

  export default {
    name: 'Interface',
    beforeMount() {
      this.getPlaylists()
    },
    data() {
      return {
        details: ""
      }
    },
    methods: {
      findSongs() {
        this.$store.dispatch('findSongs', this.details)
      },
      getPlaylists() {
        this.$store.dispatch('getPlaylists')
      }
    },
    components: {
      Songs,
      Playlist
    }
  }
</script>

<style>
  .display {
    width: 100%;
    justify-content: space-around;
    display: flex;
    align-items: center;
    height: 100vh;
  }

  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: slategray;
    /* padding-bottom: .5rem; */
    align-items: center;
  }

  /* .form {
    align-self: flex-end
  } */

  .logo {
    height: 5vh
  }
</style>
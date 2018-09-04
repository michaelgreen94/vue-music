<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <form @submit.prevent="findSongs">
      <label for="search">What Can I help you Find? </label>
      <input id="search" type="text" placeholder="Search Music" v-model="details">
      <input type="submit">
    </form>
    <div class="display">
      <Songs/>
      <playlist/>
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
  }
</style>
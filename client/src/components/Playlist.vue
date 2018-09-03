<template>
  <div class="playlist">
    <h1>playlists here</h1>
  </div>
</template>

<script>
  export default {
    name: 'Playlist',
    data: {
      playlist() {
        return this.$store.state.playlist
      }
    }
  }
</script>
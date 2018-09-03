export default class Song {
  constructor(data) {
    this.artistName = data.artistName
    this.trackName = data.trackName
    this.collectionName = data.collectionName
    this.artworkUrl60 = data.artworkUrl60
    this.previewUrl = data.previewUrl
  }
}
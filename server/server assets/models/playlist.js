let mongoose = require('mongoose')
let Schema = mongoose.Schema
let schemaName = 'Playlist'

let songSchema = new Schema({
  //what to keep on a song
  trackName: { type: String, required: true },
  albumArt: { type: String, required: true },
  artistName: { type: String, required: true },
  album: { type: String, required: true },
  previewUrl: { type: String, required: true }

})

let schema = new Schema({
  ownerName: { type: String, required: true },
  title: { type: String, required: true },
  vote: { type: Number, default: 0 },
  songs: [songSchema]
})

module.exports = mongoose.model(schemaName, schema)
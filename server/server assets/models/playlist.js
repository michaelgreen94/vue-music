let mongoose = require('mongoose')
let Schema = mongoose.Schema
let schemaName = 'Playlist'

let songSchema = new Schema({
  //what to keep on a song
  name: { type: String }
})

let schema = new Schema({
  title: { type: String, required: true },
  songs: [songSchema]
})

module.exports = mongoose.model(schemaName, schema)
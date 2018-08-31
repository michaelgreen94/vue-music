let mongoose = require('mongoose')
let Schema = mongoose.Schema
let schemaName = 'Song'

let schema = new Schema({
  artist: { type: String },
  songName: { type: String }
})

module.exports = mongoose.model(schemaName, schema)
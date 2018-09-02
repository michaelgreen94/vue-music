let router = require('express').Router()
let Playlist = require('../models/playlist')

//get all playlists
router.get('/', (req, res, next) => {
  Playlist.find({})
    .then(playlists => {
      return res.send(playlists)
    })
    .catch(next)
})

//get specific playlist
router.get('/:id', (req, res, next) => {
  Playlist.findById(req.params.id)
    .then(playlist => {
      return res.send(playlist)
    })
    .catch(next)
})

//get specific song off playlist
router.get('/:playlistId/song/:songId', (req, res, next) => {
  Playlist.findById(req.params.playlistId)
    .then(playlist => {
      let song = playlist.songs.id(req.params.songId)
      return res.send(song)
    })
    .catch(next)
})

//add a playlist
router.post('/', (req, res, next) => {
  Playlist.create(req.body)
    .then(playlist => {
      res.send(playlist)
    })
    .catch(next)
})

//add a soong to specific playlist
router.post('/:id', (req, res, next) => {
  Playlist.findById(req.params.id)
    .then(playlist => {
      playlist.songs.push(req.body)
      playlist.save(playlist)
      res.send(playlist)
    })
    .catch(next)
})

//remove a song from a specific playlist
router.delete('/:playlistId/song/:songId', (req, res, next) => {
  Playlist.findById(req.params.playlistId)
    .then(playlist => {
      playlist.songs.id(req.params.songId).remove()
      playlist.save(playlist)
      res.send(playlist)
    })
    .catch(next)
})

//playlist.songs.id(someSongId).remove()

//makes change to specific playlist
router.put('/:id', (req, res, next) => {
  Playlist.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.send({
      message: 'Updated'
    }))
})

//deletes specific playlist
router.delete('/:id', (req, res, next) => {
  Playlist.findByIdAndRemove(req.params.id)
    .then(() => res.send({
      message: 'Delorted'
    }))
})

module.exports = router
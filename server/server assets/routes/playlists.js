let router = require('express').Router()
let Playlist = require('../models/playlist')

router.get('/', (req, res, next) => {
  Playlist.find({})
    .then(playlists => {
      return res.send(playlists)
    })
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  Playlist.findById(req.params.id)
    .then(playlist => {
      return res.send(playlist)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
  Playlist.create(req.body)
    .then(playlist => {
      res.send(playlist)
    })
    .catch(next)
})

router.post('/:id', (req, res, next) => {
  Playlist.findById(req.params.id)
    .then(playlist => {
      playlist.songs.push(req.body)
      //playlist.songs.id(someSongId).remove()
      res.send(playlist)
    })
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  Playlist.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.send({
      message: 'Updated'
    }))
})

router.delete('/:id', (req, res, next) => {
  Playlist.findByIdAndRemove(req.params.id)
    .then(() => res.send({
      message: 'Delorted'
    }))
})

module.exports = router
let router = require('express').Router()
let Songs = require('../models/song')

router.get('/', (req, res, next) => {
  Songs.find({})
    .then(songs => {
      return res.send(songs)
    })
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  Songs.findById(req.params.id)
    .then(song => {
      return res.send(song)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
  Songs.create(req.body)
    .then(song => {
      res.send(song)
    })
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  Songs.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.send({
      message: 'Updated'
    }))
})

router.delete('/:id', (req, res, next) => {
  Songs.findByIdAndRemove(req.params.id)
    .then(() => res.send({
      message: 'Delorted'
    }))
})

module.exports = router
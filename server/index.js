let express = require('express')
let bp = require('body-parser')
require('./server assets/db/db-config')
let server = express()
let port = 3000
let cors = require('cors')

server.use(cors())

server.use(bp.json())
server.use(bp.urlencoded({
  extended: true
}))

let songRoutes = require('./server assets/routes/songs')

server.use('/api', songRoutes)

server.use('/api/*', (err, req, res, next) => {
  res.status(400).send(err)
})

server.use('*', (req, res, next) => {
  res.status(404).send('Not Today')
})
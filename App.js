const express = require('express')
const morgan = require('morgan')
const ApplicationDumpRouter = require('./Router/ApplicationDumpRouter')
const app = express()

app.use(morgan('tiny'))

app.use('/dump', ApplicationDumpRouter)
module.exports = app




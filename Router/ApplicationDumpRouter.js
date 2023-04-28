const express = require('express')
const { DumpAll } = require('../Controller/ApplicationDumpController')
const ApplicationDumpRouter = express.Router()

ApplicationDumpRouter.route('/v1/public/application').get(DumpAll)

module.exports = ApplicationDumpRouter
const express = require('express')
const { DumpAll } = require('../Controller/ApplicationDumpController')
const { DumpApp } = require('../Scheduler/ScheduleDump')
const ApplicationDumpRouter = express.Router()

ApplicationDumpRouter.route('/v1/public/application').get(DumpAll)
ApplicationDumpRouter.route('/v1/schedule/public/application').get(DumpApp)


module.exports = ApplicationDumpRouter
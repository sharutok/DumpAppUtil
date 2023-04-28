const schedule = require('node-schedule');
const { writeStatus, DumpAll } = require('../Controller/ApplicationDumpController');
const moment = require("moment")
exports.DumpApp = async (req, res) => {
    try {
        await Promise.resolve[await DumpAll(), await writeStatus()]
    } catch (error) {
        console.log("error", error);
    }
}

schedule.scheduleJob("47 0 * * *", () => {
    console.log(`started scheduler at ${moment().format("MM-DD-YYYY HH-MM")}`);
    this.DumpApp()
})
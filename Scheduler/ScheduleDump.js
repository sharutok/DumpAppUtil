const schedule = require('node-schedule');

exports.DumpDB = async (req, res) => {
    try {
        await Promise.all[NoSQLDumpAll(), SQLDumpAll()]
        console.log("Dumped");
        res && res.json({ mess: "dumped" })
    } catch (error) {
        res && res.json({ mess: "error", error })
    }

}

schedule.scheduleJob("0 0 * * *", () => {
    this.DumpDB()
})
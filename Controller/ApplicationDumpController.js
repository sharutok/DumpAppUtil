const { default: axios } = require('axios');
const util = require('util');
const fs = require('fs');
const path = require('path')
const exec = util.promisify(require('child_process').exec);
const moment = require('moment')
const GitHub = require('github-api');
const date = moment().format('DD-MM-YYYY')
const g_token = process.env.github_token


exports.DumpAll = async (req, res) => {
    const gh = new GitHub({
        token: g_token
    });
    // Get a list of all repositories (both public and private) for the authenticated user
    const data = await gh.getUser().listRepos({ visibility: 'all' })


    try {

        const dumpFolderPath = path.join(__dirname, '../', "Dump")
        if (!fs.existsSync(dumpFolderPath)) {
            console.log('created');
            fs.mkdirSync(dumpFolderPath);
        } else console.log(`Exisits Dump folder`);


        const AppFolderPath = path.join(__dirname, '../Dump', date)

        if (!fs.existsSync(AppFolderPath)) {
            await Promise.resolve(data.data.map(async x => {
                if (x.private) {
                    if (true) {
                        const { stdout, stderr } = await exec(`git clone https://github.com/sharutok/anime-news.git ./Dump/${date}/${x.name}`);
                        console.log('stdout:', stdout);
                    }
                    console.log(x.name,
                        // x.clone_url,
                        x.private);
                }
            }))
            console.log('created');
            fs.mkdirSync(AppFolderPath);
        } else console.log(`Exisits Dump ${date} folder`);

        console.log(`Finished ${date}`);

        res && res.send(data.data)
    } catch (err) {
        console.error(err);
    };

};


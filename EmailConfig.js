const nodemailer = require("nodemailer");
require("dotenv").config({ path: "./.env" });

const sendEmail = async (option) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: false,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const mailOption = {
        from: "Ador Welding <itpune@adorians.com>",
        to: [
            // "sanjaydeshmukh@adorians.com",
            // "sanjaydeshmukh@adorians.com",
            // "avinash@adorians.com",
            // "lpbansod@adorians.com",
        ],
        cc: [
            "sharankudtarkar@adorians.com",
            // "sanjaydeshmukh@adorians.com",
            // "sanjaydeshmukh@adorians.com",
            // "avinash@adorians.com",
            // "lpbansod@adorians.com",
        ],
        bcc: ["sharankudtarkar@adorians.com"],
        subject: option.subject,
        html: option.html,
        attachments: [
            {
                filename: option.filename,
                path: option.path,
            },
        ],
    };
    await transporter.sendMail(mailOption);
};
module.exports = sendEmail;

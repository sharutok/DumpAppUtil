const app = require("./App");


const PORT = process.env.NODE_ENV === "production" ? 8030 : 5005;

app.listen(PORT, () => {
    console.log(`app listining to ${PORT}`);
})
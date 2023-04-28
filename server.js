const app = require("./App");


const PORT = process.env.NODE_ENV === "production" ? 5005 : 5005;

app.listen(PORT, () => {
    console.log(`app listining to ${PORT}`);
})
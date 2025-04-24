const express = require('express');

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
    res.send("Hello Word");
})

app.get("/phuoc", (req, res) => {
    res.send("Hello Phuoc");
})

app.listen(PORT, () => {
    console.log(`My app is running on port: ${PORT}`)
});
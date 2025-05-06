// const express = require('express');
import express from 'express';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 8080;

//config view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get("/", (req, res) => {
    res.render("home.ejs");
})

app.get("/phuoc", (req, res) => {
    res.send("Hello Phuoc");
})

app.listen(PORT, () => {
    console.log(`My app is running on port: ${PORT}`)
});
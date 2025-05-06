// const express = require('express');
import express from 'express';
import 'dotenv/config';

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send("Hello Word Update11");
})

app.get("/phuoc", (req, res) => {
    res.send("Hello Phuoc");
})

app.listen(PORT, () => {
    console.log(`My app is running on port: ${PORT}`)
});
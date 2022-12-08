const express = require("express");
const app = express();
const importData = require("./ingredientData.json");
let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get("/ingredients", (req, res) => {
    res.send(importData);
})

app.listen(port, () => {
    console.log(`Example app is listening at http://localhost:${port}`);
})
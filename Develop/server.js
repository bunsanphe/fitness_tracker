const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8000;

const app = epxress();

app.use(express.urlencoded[{ extended: true }]);
app.use(express.json());
app.use(express.static("public"));

const databaseUrl = process.env.MONGODB_URI || "workout";
const collections = [""]

app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}` )
})
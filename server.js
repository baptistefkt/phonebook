const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

const urlencodedParser = bodyParser.urlencoded({
    extended: true
});

app.use(urlencodedParser);
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => res.send("Hello World with Express"));

app.listen(PORT, function() {
    console.log("Running phonebook on port " + PORT);
});

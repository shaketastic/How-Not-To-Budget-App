// dependencies
const express = require("express");
const cors = require("cors");

const transController = require("./controllers/transController.js");

// config
const app = express();

// middleware
app.use(express.json()) // parse incoming JSON
app.use(cors());

// routes 

app.get("/", (req, res) => {
    res.send("Welcome to the How Not to Budget App! Happy Spending");
});

app.use("/transactions", transController);


// error
app.get("*", (req, res) => {
    res.status(404).json({error: "This Page cannot be Found"});
})


module.exports = app;
const express = require("express");
const transactions = express.Router();
const billsArray = require("../models/transactions.js");

// index/read transactions
transactions.get("/", (req, res) => {
    res.json(billsArray);
});

// show/read one transaction
transactions.get("/:id", (req, res) => {
    const { id } = req.params;
    if(billsArray[id]) {
    res.json(billsArray[id])    
    } else {
    res.status(404).json({error: "The transaction with ID was NOT FOUND"});
    }
});

// create transaction and validate
transactions.post("/", (req, res) => {
    billsArray.push(req.body);
    res.json(billsArray[billsArray.length - 1]);
});

// destroy and delete transaction
transactions.delete
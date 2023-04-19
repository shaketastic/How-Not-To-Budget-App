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
// alternate: const id = req.params.id if(billsArray[id]) billsArray.splice(id, 1) res.json(billsArray)
transactions.delete("/:id", (req, res) => {
    const { id } = req.params;

    if(billsArray[id]) {
        let removed = billsArray.splice(id, 1);
        res.json(removed[0]);
    } else {
        res.status(404).json({error: "The transaction with ID was NOT FOUND"});
    }
});

// update a transaction and catch error
transactions.put("/:id", (req, res) => {
    const { id } = req.params;

    if(!billsArray[id]) {
        res.status(404).json({error: "The transaction with ID was NOT FOUND"})
        return;
    }

    let { name, date, amount, from, category } = req.body;
    if(name && date && amount !== undefined && from) {
        billsArray[id] = { 
            name, date, amount, from, category 
        }; 
            res.json(billsArray[id]);    
        } else {
            res.status(404).json({ 
                error: "Please provide all necessary fields"
            })
        }   
});
    // if(billsArray[id]) {
    //   billsArray[id] = req.body;
    //   res.status(200).json(billsArray[id]);
    // } else {
    //   res.status(404).json({error: "The transaction with ID was NOT FOUND"});  
    // }
    
module.exports = transactions;
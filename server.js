// DEPENDENCIES
const app = require("app.js");

// CONFIG
require("dotenv").config();
const PORT = process.env.PORT;

// LISTEN
app.listen(PORT, () => {
    console.log(`💎💎💎 Listening on Port ${PORT} 💎💎💎`);
});





// Your server should incorporate at least one table that, at minimum, includes:
// id - A unique number for each item
// item_name- string - the name of the transaction (ie: income, savings, cat food, etc.)
// amount -number - the amount of the transaction
// date- string - the date should be a simple string. As a bonus activity, use the date object and date input field and format it to be human-readable
// from - string - who this transaction was with (ie. employer, bank, pet store, grocery store, etc)
// category - string - what category does this fall into (income, savings, pets, food, etc)
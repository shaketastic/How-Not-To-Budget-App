// DEPENDENCIES
const app = require("./app.js");

// CONFIG dotenv
require("dotenv").config();
const PORT = process.env.PORT;

// LISTEN for Ports
app.listen(PORT, () => {
    console.log(`💎💎💎 Listening on Port ${PORT} 💎💎💎`);
});


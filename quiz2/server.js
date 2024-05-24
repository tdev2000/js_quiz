const express = require("express");
const cors = require("cors");
const app = express();
//Use cors middleware
const path = require("path");
var randomstring = require("randomstring");

const PORT = 3000;

//API call - http://localhost:3000/
app.get("/", (req, res) => {
    console.log("api call received !");
    res.sendFile(path.join(__dirname, "/public/index.html"));
});



// app listen
app.listen(PORT, () => {
    console.log("App is running on : " + PORT);
})


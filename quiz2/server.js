const express = require("express");
const cors = require("cors");
const app = express();
//Use cors middleware
const path = require("path");
var randomstring = require("randomstring");

const PORT = 3000;

let stringArr = [];
let selectedArr = [];

//API call - http://localhost:3000/
app.get("/", (req, res) => {
  console.log("api call received !");
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

//API call -  http://localhost:3000/api/get-longest-string/
app.get("/api/get-longest-string", (req, res) => {
  const username = req.query.username;
  const password = req.query.password;

  console.log(username, password);

  for (let index = 0; index < 10; index++) {
    stringArr.push(randomstring.generate(Math.floor(Math.random() * 20) + 1));
  }


  let longestCharacterValue = 0;
  for (let index = 0; index < stringArr.length; index++) {
    if ( stringArr[index].length > longestCharacterValue ) {
        longestCharacterValue = stringArr[index].length;
    }
  }

  for (let index = 0; index < stringArr.length; index++) {
    if (stringArr[index].length == longestCharacterValue) {
       selectedArr.push(stringArr[index]);
    }
  }
  res.send({status:"success", response1: stringArr, response2: selectedArr})
});

// app listen
app.listen(PORT, () => {
  console.log("App is running on : " + PORT);
});

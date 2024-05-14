let express = require('express');
let app = express();

console.log("Hello World");

let indexPath = __dirname + "/views/index.html";
let pubPath = __dirname + "/public";

app.get("/", function(req, res){
    res.sendFile(indexPath);
})

app.use("/public", express.static(pubPath));

app.get("/json", function(req, res){
    res.json({"message": "Hello json"});
})

































 module.exports = app;

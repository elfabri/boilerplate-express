let express = require('express');
let app = express();
require('dotenv').config();

console.log("Hello World");

let indexPath = __dirname + "/views/index.html";
let pubPath = __dirname + "/public";

app.use("/", function(req, res, next) {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
})

app.use("/public", express.static(pubPath));

app.get("/", function(req, res){
    res.sendFile(indexPath);
})

app.get("/json", function(req, res){
    if (process.env.MESSAGE_STYLE == "uppercase") {
	res.json({"message": "HELLO JSON"});
    } else {
	res.json({"message": "Hello json"});
    }
})

app.get("/now", function(req, res, next) {
    req.time = new Date().toString();
    next();
}, function(req, res) {
    res.json({"time": `${req.time}`});
})

app.get("/:word/echo", function(req, res) {
    res.json({"echo": `${req.params.word}`});
})

app.get("/name", function(req, res) {
    let firstname = req.query.first;
    let lastname = req.query.last;
    res.json({"name": `${firstname} ${lastname}`});
})

 module.exports = app;

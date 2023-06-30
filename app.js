// for web application deployment
const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

//instance of express module
const app = express();

app.use(express.static("public"));

//telling express to use body parser
app.use(bodyParser.urlencoded({extended : true}));

//Static resource pointer when deployed in web need to add a folder for adding static files
app.use(express.static("public"));

// on receiving a get request on starting the page
app.get("/", (req, res)=>{
	res.sendFile(__dirname + "/index.html");
});

// when some information is sent from browser to the server
app.post("/", (req,res)=>{
	//browser sends body object through req which could be parsed through .body. library for accessing objects of the request
	const personName = req.body.personName;
	const mailID = req.body.mailId;
	const projectName = req.body.projectName;
	const suggestion = req.body.suggestion;

});

app.listen(process.env.PORT || 3000, (req,res)=>{
	console.log("local Server started in port 3000");
});

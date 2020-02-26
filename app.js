var express = require("express");
var bodyParser = require("body-parser");


var app = express();
app.use(bodyParser.urlencoded({extended : true}));

app.use(express.static(__dirname + '/public'));


app.get("/lawyer_form_intake",function(req,res){
	res.render("lawyer_form_intake.ejs");
});


app.listen( process.env.PORT || 8000 , function(){
	console.log("SERVER 8000 HAS STARTED");
});

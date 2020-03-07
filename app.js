var express = require("express");
var bodyParser = require("body-parser");

var global_variable_for_the_form_text;

var app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(__dirname + '/assests'));
app.use(express.static(__dirname + '/public'));

app.get("/",function(req,res){
	res.render("home.ejs");
})

app.get("/lawyer_form_intake",function(req,res){
	res.render("lawyer_form_intake.ejs");
});
;
app.get("/test",function(req,res){
	res.render("test.ejs");
});

app.post("/add_questions_to_the_form",function(req,res){

	// console.log(req.body);
	global_variable_for_the_form_text = req.body.yummy;
	res.render("adding_questions.ejs",{
		"set_of_questions" : 0,
		"form_text" : global_variable_for_the_form_text,
		"signal_for_page" : 1,
	});
});

app.post("/constuct_a_question",function(req,res){
	res.render("adding_questions.ejs",{
		"form_text" : global_variable_for_the_form_text,
		"signal_for_page" : 0,
	});
});

app.post("/saving_the_new_doc",function(req,res){
	console.log(req.body.span_induced_doc);
	global_variable_for_the_form_text = req.body.span_induced_doc;
	res.render("adding_questions.ejs",{
		"form_text" : global_variable_for_the_form_text,
		"signal_for_page" : 0,
	});
});

app.listen( process.env.PORT || 8000 , function(){
	console.log("SERVER 8000 HAS STARTED");
});

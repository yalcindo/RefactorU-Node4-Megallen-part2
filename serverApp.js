
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');

var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());


}
var locations = {
		 "Seville" :
		 {
		 	name:"Seville",
		 	desc: "Good stuff happens",
		 	next:"Canary"
		 },
		 "Canary"  : 
		 {
		 	name:"Canary",
		 	desc:"Canaries are all over",
		 	next:"StraitOfMegallen"
		 },
		 "StraitOfMegallen" :
		 { 
		 	name:"StraitOfMegallen",
		 	desc:"he just found a new palce",
		 	next:"Guam"
		 },

		 "Guam" :
		 {
		 	name:"Guam",
		 	desc:"Ha ha it is the USA boy.",
		 	next:"Philippines"
		 },

		 "Philippines" : 
		 {
		 	name:"Philippines",
		 	desc:" WElcome capital city Manilla ",
		 	next:"Seville"
		 }
	};

	app.get("/places",function(req,res){
		var place=req.query.city;
         var objLocation;
		if(locations[place])
		{
			objLocation=locations[place];
		}

      res.send(objLocation);
	});

app.get('/', function(req, res){
	
  res.render("index",{title:"Seville"} )
});




http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

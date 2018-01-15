//importing modules

var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');


var app = express();

const route = require('./routes/route');

//connect do MongoDB
mongoose.connect('mongodb://localhost:27017/contactlist');

//if connection is made, display message
mongoose.connection.on('connected',()=>{
	console.log('Connected to MongoDB @ port 27017');
});

//if connection fails, display message
mongoose.connection.on('error',(err)=>{
	if(err){
		console.log('Error in MongoDB Connection: ' +err);
	}
});

// port number
const port = 3000;

// adding middleware == cors
app.use(cors());

//body - parser
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/api', route);


//testing server

app.get('/',(req, res)=>{
	res.send('foobar');
});

app.listen(port,()=>{
	console.log('Connection started at port:'+port);
});
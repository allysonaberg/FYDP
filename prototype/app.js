const express = require('express')
const {spawn} = require('child_process')
const bodyParser = require('body-parser')
const sqlite3 = require('sqlite3').verbose();
require('dotenv/config')
var DB = require('./db/db_methods')

const app = express()
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

const port = process.env.PORT || 5000;
const apiKey = process.env.API_KEY;
const apiPassword = process.env.API_PASSWORD;

	
app.get('/', (req, res) => {
	DB.readFromDB()
	var dataToSend;
	// spawn new child process to call the python script
	const python = spawn('python', ['python_test.py']);
	python.stdout.on('data', function (data) {
	 console.log('grabbing data from script ...');
	 dataToSend = data.toString();
	});
	// in close event we are sure that stream from child process is closed
	python.on('close', (code) => {
		var fakedata = "this is fakedata"
		res.render('./index.html', {data: fakedata});
		console.log(dataToSend)
	});
})

app.post('/', (req, res) => {
	console.log(req.body)
});

//START
app.listen(port, () => {
	console.log("listening at port" + port)
})

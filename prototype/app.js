const express = require('express')
const {spawn} = require('child_process')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config();

const app = express()
const port = 5000;
const apiKey = process.env.API_KEY;
const apiPassword = process.env.API_PASSWORD;


app.get('/', (req, res) => {
	var dataToSend;
	// spawn new child process to call the python script
	const python = spawn('python', ['python_test.py']);
	python.stdout.on('data', function (data) {
	 console.log('grabbing data from script ...');
	 dataToSend = data.toString();
	});
	// in close event we are sure that stream from child process is closed
	python.on('close', (code) => {
	// send data to browser
	res.send(dataToSend)
	console.log(dataToSend)
	});
	
})

app.get('/index', (req, res) => {
	res.sendFile('./index.html', {root: __dirname});
});
//START
app.listen(port, () => {
	console.log("listening at port" + port)
})


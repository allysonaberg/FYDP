const express = require('express')
const {spawn} = require('child_process')
const bodyParser = require('body-parser')
var mongoose = require('mongoose');

require('dotenv/config')

const app = express()
app.use(bodyParser.json())
const port = 5000;
const apiKey = process.env.API_KEY;
const apiPassword = process.env.API_PASSWORD;

mongoose.Promise = global.Promise;

var OrderSchema = new mongoose.Schema({
    date: String,
    footprint: String
})

var Order = mongoose.model("Order", OrderSchema)

//NAME: FYDP, PW: password1


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

app.post('/', (req, res) => {
	console.log(req.body)
	console.log(mongoose.connection.readyState)
	var order = new Order({
		date: req.body.order_date,
		footprint: req.body.footprint
	});

	order.save()
		.then(item => {
			res.send("SAVED")
		})
		.catch(err => {
			console.log("ERRPR")
		})
});

app.get('/index', (req, res) => {
	res.sendFile('./index.html', {root: __dirname});
});


mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true});


//START
app.listen(port, () => {
	console.log("listening at port" + port)
})

module.exports = mongoose.model('Orders', OrderSchema);
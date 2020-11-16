const express = require('express')
const {spawn} = require('child_process')
const bodyParser = require('body-parser')
const sqlite3 = require('sqlite3').verbose();

require('dotenv/config')

const app = express()
app.use(bodyParser.json())
const port = process.env.PORT || 5000;
const apiKey = process.env.API_KEY;
const apiPassword = process.env.API_PASSWORD;

/* Database object */
let db = new sqlite3.Database('./db/pickled_herring.db', (err) => {
	if (err) {
	  return console.error(err.message);
	}
	console.log('Connected to the in-memory SQlite database.');
  });


let sql = `SELECT * FROM footprints`;

/* First returned row only */
db.get(sql, (err, row) => {
	if (err) {
		console.error(err.message);
	}
		row ? console.log(row.client_id, row.date, row.grams_carbon) : console.log(`No data found.`);

	});


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
	// var order = new Order({
	// 	date: req.body.order_date,
	// 	footprint: req.body.footprint
	// });

	// order.save()
	// 	.then(item => {
	// 		res.send("SAVED")
	// 	})
	// 	.catch(err => {
	// 		console.log("ERRPR")
	// 	})
});

app.get('/index', (req, res) => {
	res.sendFile('./index.html', {root: __dirname});
});





//START
app.listen(port, () => {
	console.log("listening at port" + port)
})


/* Close the database connection */
db.close((err) => {
	if (err) {
	  return console.error(err.message);
	}
	console.log('Close the database connection.');
});
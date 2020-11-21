const express = require('express')
const bodyParser = require('body-parser')
require('dotenv/config')

const app = express()
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

const port = process.env.PORT || 5000;

	
app.get('/', (req, res) => {	
	res.render(__dirname+'/views/index.html');
})

app.get('/getFootprint', (req, res) => {
	res.set('Cache-Control', 'private, max-age=43200'); // Cache for half a day
	const exec = require("child_process").execSync;

	var result = exec("python3 "+ __dirname +"'/../Modelling/CarbonFootprint/main.py'");
	result = result.toString();
	res.send(result);
})


app.post('/', (req, res) => {
	console.log(req.body)
});

//START
app.listen(port, () => {
	console.log("listening at port " + port)
})

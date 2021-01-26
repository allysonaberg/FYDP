const axios = require('axios').default;
const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const { v4: uuidv4 } = require('uuid');
require('dotenv/config');
const dbMethods = require('./db/db_methods')

const app = express()
app.set('view engine', 'html')
app.engine('html', require('ejs').renderFile)
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const port = process.env.PORT || 5000;
const SCOPES = 'read_orders' // Comma-separated list of permission scopes to request to Shopify
const ACCESS_MODE = 'per-user' // Value for Shopify token online-access mode 

app.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login' }));

	
app.get('/shopify', (req, res) => {
	//GET requests will have the following format: <url>?hmac={}&shop={}&timestamp={}	
	var hmac = req.query.hmac;
	var shop = req.query.shop;
	var timestamp = req.query.timestamp;

	var api_key = process.env.API_KEY;
	var scopes = SCOPES;
	var redirect_uri = req.protocol + '://' + req.get('host') + '/authenticate';
	var nonce = uuidv4();
	var access_mode = ACCESS_MODE;

	var shopifyLoginUrl = `https://{shop}.myshopify.com/admin/oauth/authorize? \
		client_id=${api_key} \
		&scope=${scopes} \
		&redirect_uri=${redirect_uri} \ 
		&state=${nonce} \
		&grant_options[]=${access_mode}`
	
	res.redirect(shopifyLoginUrl);
								   
	// Store in db.
	dbMethods.storeNonce(shop, nonce);
})

app.get('/authenticate', (req, res) => {
	// Where Shopify will redirect the client to with the following url:
	// ...?code={authorization_code}
	// &hmac=da9d83c171400a41f8db91a950508985
	// &timestamp=1409617544
	// &state={nonce}
	// &shop={hostname}

	let code = req.query.code;
	let hmac = req.query.hmac;
	let timestamp = req.query.timestamp;
	let state = req.query;
	let shop = req.query.shop;	

	console.log(hmac);
	console.log(shop);
	console.log(timestamp);
	console.log(code);
	console.log(state);

	// First check that hostname is a valid hostname
	let re = /\A([a-zA-Z0-9][a-zA-Z0-9\-]*)\.myshopify\.com\z/;
	let match = shop.match(re);
	if (match) {
		let store_name = match[1];
		// Check that the nonce is the same as the stored one, and that it is not expired.
		if (dbMethods.getNonce(store_name) != null) {
			// TODO: check that hmac is valid: https://shopify.dev/tutorials/authenticate-with-oauth#verification

			// If all security checks pass, then you can exchange the access code for a permanent access token 
			// by sending a request to the shop’s access_token endpoint
			let url = `https://${store_name}.myshopify.com/admin/oauth/access_token`

			axios.post(url, {
				client_id: process.env.API_KEY,
				client_secret: process.env.API_SECRET_KEY,
				code: code
			  })
			  .then(function (response) {
				console.log(response);
			  })
			  .catch(function (error) {
				console.log(error);
			  });
		}
		
	}

	// If we're here, we failed to authenticate. Ask them to authenticate again.
	res.redirect('/shopify');

})

app.get('/', (req, res) => {
	res.redirect('/home');
})

app.get('/home', (req, res) => {
	res.render(__dirname+'/views/index.html');
})


app.get('/getFootprint', (req, res) => {
	res.set('Cache-Control', 'private, max-age=43200'); // Cache for half a day
	const exec = require("child_process").execSync;

	var result = exec("python3 "+ __dirname +"'/../Modelling/CarbonFootprint/main.py'");
	result = result.toString();
	res.send(result);
})


//START
app.listen(port, () => {
	console.log("listening at port " + port)
})

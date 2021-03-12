/* IMPORTS */
require('isomorphic-fetch');

//const axios = require('axios').default;
//const express = require('express');
//const bodyParser = require('body-parser');
//const passport = require('passport');
//const { v4: uuidv4 } = require('uuid');
const dotenv = require('dotenv');
const Koa = require('koa');
const koaRouter = require("koa-router");
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth');
const { verifyRequest } = require('@shopify/koa-shopify-auth');
const session = require('koa-session');

/****************************************************************************************/

/* CONSTANTS */

//const dev = process.env.NODE_ENV !== 'production';
const app = new Koa();
const router = new koaRouter();
dotenv.config();
const SHOPIFY_API_SECRET_KEY = process.env.SHOPIFY_API_SECRET_KEY;
const SHOPIFY_API_KEY = process.env.SHOPIFY_API_KEY;
const debug = process.env.DEBUG == "true" ? true : false;
const port = process.env.PORT || 5000;
const SCOPES = ['read_orders, read_products'] // Comma-separated list of permission scopes to request to Shopify
const ACCESS_MODE = 'per-user' // Value for Shopify token online-access mode 
const serve = require("koa-static"); // to serve static pages
const mount = require("koa-mount"); // to mount the front-end
const cors = require('koa-cors');
const { raw } = require('body-parser');



/****************************************************************************************/


/* APP SETTUP */
app.keys = [SHOPIFY_API_SECRET_KEY];

/* Get the front-end client */
const static_pages = new Koa();
static_pages.use(serve(__dirname + "../client/build")); //serve the build directory
app.use(mount("/", static_pages));

app
  // sets up secure session data on each request
  .use(session({secure: true, sameSite: 'none'}, app))
  .use(cors())

if (!debug) {
	// sets up shopify auth
	app.use(createShopifyAuth({
		apiKey: SHOPIFY_API_KEY,
		secret: SHOPIFY_API_SECRET_KEY,
		scopes: SCOPES,
		afterAuth(ctx) {
		const {shop, accessToken} = ctx.session

		console.log('We did it!', accessToken);

		ctx.redirect(`/?shop= ${shop}`);
		},
	}),
	)
	.use(
	verifyRequest()
	)  
}

router.get("/", (ctx, next) => {
	ctx.body = 'Hello World!';
	ctx.res.statusCode = 200;
})

router.get("/product", async (ctx, next) => {
	parsed_products = []
	const product_parser = require("./product/product");
	
	if (debug) {
		/* Get dummy raw products */
		var raw_products = require('./content/products');

		/* Parse each product's material breakdown and calculate score */
		await Promise.all(raw_products.map(async (raw_product) => {
			var parsed_product = await product_parser(raw_product);

			parsed_products.push(parsed_product);
		}));
	}
	else {
		// Send API request to get products from shop.
	}
	ctx.res.statusCode = 200;
	ctx.body = parsed_products;
})


app.use(router.routes()).use(router.allowedMethods());

/*
app.get('/', (req, res) => {
	res.redirect('/home');
});


app.get('/home', (req, res) => {
	res.render(__dirname+'/views/index.html');
});


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
				client_id: SHOPIFY_API_KEY,
				client_secret: SHOPIFY_API_SECRET_KEY,
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


app.get('/getFootprint', (req, res) => {
	res.set('Cache-Control', 'private, max-age=43200'); // Cache for half a day
	const exec = require("child_process").execSync;

	var result = exec("python3 "+ __dirname +"'/../Modelling/CarbonFootprint/main.py'");
	result = result.toString();
	res.send(result);
})

*/


//START
app.listen(port, () => {
	console.log("listening at port " + port)
})

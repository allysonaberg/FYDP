const express = require('express')
const bodyParser = require('body-parser')
const Shopify = require('shopify-api-node')
const dotenv = require('dotenv')
dotenv.config();


const app = express()
const port = 3000;
const apiKey = process.env.API_KEY;
const apiPassword = process.env.API_PASSWORD;

//ROUTING
const shopifyRoute = require('./routes/shopify')

//MIDDLEWARE
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
// app.use('/', shopifyRoute) //use this later


//START
app.listen(port, () => {
	console.log("listening at port" + port)
})

const shopify = new Shopify({
	shopName: 'fydp',
	apiKey: apiKey,
	password: apiPassword
});

shopify.product
  .list({ limit: 5 })
  .then((orders) => console.log(orders))
  .catch((err) => console.error(err));

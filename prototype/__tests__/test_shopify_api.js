
const dotenv = require('dotenv').config({path:__dirname+'/.env'});
const SHOPIFY_API_SECRET_KEY = process.env.SHOPIFY_API_SECRET_KEY;
const STORE_NAME = process.env.SHOP_DOMAIN;
const axios = require("axios");

/* Tests for integration with Shopify */
const URL = `https://${STORE_NAME}/admin/api/2021-01/products.json`
console.log(URL);
describe('Send request to Shopify', function() {
    describe('Verify that response is received', function() {
  
      test('should have status code 200', function() {
        return axios.get(
                URL, 
                {
                    'X-Shopify-Access-Token':  SHOPIFY_API_SECRET_KEY
                }
            ).then(
                (promise) => {
                    console.log(promise)
                    expect(promise.status).toBe(200);
                },
                (error) => { console.log(JSON.stringify(error)); }
            );
      });
    })
});
# FYDP


The prototype is node.js & heroku-based, its easiest to use npm as the package manager and install the following dependencies:
-express
-nodemon
-body-parser
-shopify-api-node
-dotenv

You will also need to create a .env file in the prototype folder to holder your API_KEY and API_PASSWORD (get from the shopify admin panel)

To run:
`cd [working_directory]/FYDP/prototype`and
`npm start`

## Database Operations
We are currently using sqlite as our database
To access/insert/edit, run the following from root directory
```
sqlite3
```

Now you are in the sqlite shell. 
To open the db:
```
.open prototype/db/pickled_herring.db
```

To see all tables
```
.tables
```.

To describe a table

```
.schema ?TABLE?
```

To see all current materials and their statistics
```
SELECT * FROM materials;
```
const { db } = require('../models/orders');

const sqlite3 = require('sqlite3').verbose();

function readFromDB() {
	/* Database object */
	let db = new sqlite3.Database('./db/pickled_herring.db', (err) => {
		if (err) {
		return console.error(err.message);
		}
		console.log('Connected to the in-memory SQlite database - READ.');
	});


	let sql = `SELECT * FROM orders`;

	rowData = []

	/* First returned row only */
	db.all(sql, (err, rows) => {
		if (err) {
			console.error(err.message);
		}

		rows.forEach((row) => {
			console.log(row)
			rowData.push(row)
		});
	});

	/* Close the database connection */
	db.close((err) => {
		if (err) {
		return console.error(err.message);
		}

		return rowData
		console.log('Close the database connection.');
	});

}

function writeToDB(dataArray) {
	/* Database object */
	let db = new sqlite3.Database('./db/pickled_herring.db', (err) => {
		if (err) {
		return console.error(err.message);
		}
		console.log('Connected to the in-memory SQlite database. - WRITE');
	});

	db.run('CREATE TABLE IF NOT EXISTS orders (client_id integer NOT NULL, date text NOT NULL, grams_carbon text NOT NULL);')

	for(var i = 0; i < dataArray.length; i++) {
		db.run('INSERT INTO orders VALUES (?, ?, ?)', [1, dataArray[i][0], dataArray[i][1]], function(err) {
			if (err) {
				console.log("error inserting into table")
			}
		})
	}

	db.close((err) => {
		if (err) {
		return console.error(err.message);
		}
		console.log('Close the database connection.');
	});
}


module.exports = { readFromDB, writeToDB }
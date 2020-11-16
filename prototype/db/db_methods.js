const sqlite3 = require('sqlite3').verbose();

function readFromDB() {
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

	/* Close the database connection */
	db.close((err) => {
		if (err) {
		return console.error(err.message);
		}
		console.log('Close the database connection.');
	});

}

function writeToDB() {
	/* Database object */
	let db = new sqlite3.Database('./db/pickled_herring.db', (err) => {
		if (err) {
		return console.error(err.message);
		}
		console.log('Connected to the in-memory SQlite database.');
	});

	
}



module.exports = { readFromDB, writeToDB }
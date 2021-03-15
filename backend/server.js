'use strict';

const express = require('express');
const cors = require('cors');
const mariadb = require('mariadb/callback');
const bodyparser = require('body-parser');

const { PORT, DB_HOST, DB_PORT, DB_USER, DB_PWORD, DB_NAME } = require('./config');


const app = express();
app.use(cors());
app.use(express.json());
// app.use(express.static('public'));
app.use(bodyparser.json());


let dbConnection = mariadb.createConnection({
	host: DB_HOST,
	port: DB_PORT,
	user: DB_USER,
	password: DB_PWORD,
	database: DB_NAME
})
let port = PORT;
let server;

dbConnection.connect((err) => {
	if (!err) {
		console.log(`Orgo app is connected to OrgoDB. Connection id is ` + dbConnection.threadId);	
	}
	else {
		console.log('Orgo app is not connected due to error: ' + err);
	}
})

app.listen(port, () => {
	console.log(`Orgo app is listening on port ${port}`);
})



module.exports = { app };
const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'express'
});

connection.connect((err) => {
	if(err) throw err;
	console.log('Connecté à la base express !')
});

module.exports = connection;
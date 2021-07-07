const express = require('express');
const cors = require('cors');
const database = require("./db");

const app = express();
var corsOptions = {
	origin: "http://localhost:8080"
};

app.use(cors(corsOptions));
app.use(express.json());

/*app.use((req, res) => {
	console.log("Launching Server...");
	res.status(200);
	res.json({
		message: "Premier message"
	});
});*/

app.get('/categories', (req, res) => {
	database.query('SELECT * FROM category', (err, result) => {
		if(err) throw err;
		const categories = JSON.stringify(result);
		return res.end(categories, function(err){
			if(err) throw err;
		});
	});
});

app.get('/subcategories:categoryId', (req, res) => {
	let id = req.params.categoryId;
	database.query('SELECT subcategory.id AS id, subcategory.name AS name, subcategory.image AS image, category.name AS categoryName FROM subcategory INNER JOIN category ON category.id = category_id WHERE category_id = ' + id, (err, result) => {
		if(err) throw err;
		const categories = JSON.stringify(result);
		return res.end(categories, function(err){
			if(err) throw err;
		});
	});
});

app.get('/products:subcategoryId', (req, res) => {
	let id = req.params.subcategoryId;
	database.query('SELECT product.id AS id, product.name AS name, product.description AS description, product.image AS image, product.price AS price, category.id AS categoryId, subcategory.name AS subcategoryName, category.name AS categoryName FROM product INNER JOIN subcategory ON subcategory.id = subcategory_id INNER JOIN category ON category.id = subcategory.category_id WHERE subcategory_id = ' + id, (err, result) => {
		if(err) throw err;
		const categories = JSON.stringify(result);
		return res.end(categories, function(err){
			if(err) throw err;
		});
	});
});

app.get('/product:id', (req, res) => {
	let id = req.params.id;
	database.query('SELECT * FROM product WHERE id = ' + id, (err, result) => {
		if(err) throw err;
		const categories = JSON.stringify(result);
		return res.end(categories, function(err){
			if(err) throw err;
		});
	});
});

app.get('/users', (req, res) => {
	database.query('SELECT * FROM users', (err, result) => {
		if(err) throw err;
		const categories = JSON.stringify(result);
		return res.end(categories, function(err){
			if(err) throw err;
		});
	});
});

app.post('/user', (req, res) => {
	let email = req.body.email;
	let mdp = req.body.mdp;
	let nom = req.body.nom;
	let prenom = req.body.prenom;
	database.query('INSERT INTO users (email, mdp, nom, prenom) VALUES ("' + email + '","' + mdp + '","' + nom + '","' + prenom + '")', (err, result) => {
		if(err) throw err;
		const categories = JSON.stringify(result);
		return res.end(categories, function(err){
			if(err) throw err;
		});
	});
});

module.exports = app;
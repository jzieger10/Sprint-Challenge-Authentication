const axios = require("axios");
const bcrypt = require("bcryptjs");
// const knex = require("knex");
// const knexConfig = require("../knexfile.js");
const db = require("../database/dbConfig.js");

const { authenticate } = require("../auth/authenticate");

module.exports = server => {
	server.post("/api/register", register);
	server.post("/api/login", login);
	server.get("/api/jokes", authenticate, getJokes);
};

function register(req, res) {
	const userInfo = req.body;

	userInfo.password = bcrypt.hashSync(userInfo.password, 12);

	db("users")
		.insert(userInfo)
		.then(ids => {
			res.status(201).json(ids);
		})
		.catch(err =>
			res.status(500).json({
				err,
				message:
					"There has been an error on the Register POST endpoint",
			})
		);
}

function login(req, res) {
	// implement user login
}

function getJokes(req, res) {
	const requestOptions = {
		headers: { accept: "application/json" },
	};

	axios
		.get("https://icanhazdadjoke.com/search", requestOptions)
		.then(response => {
			res.status(200).json(response.data.results);
		})
		.catch(err => {
			res.status(500).json({
				message: "Error Fetching Jokes",
				error: err,
			});
		});
}

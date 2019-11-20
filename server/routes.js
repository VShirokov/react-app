const express = require('express');
const router = express.Router();
const cors = require('cors');
const app = express();
const sequelize = require('./db');
const Sequelize = require('sequelize');
const sequelizeString = new Sequelize('postgres://harry:mypassword@127.0.0.1:5432/dev_db', {});
const models = require('./database/models');
const Post = require('./database/models').Post;
const User = require('./database/models').User;
const api = require('./api/index.js');
// app.use(cors());

app.use(cors({
	origin: 'http://localhost:3636',
	//credentials: true,
  }));


router.get('/api/hello', (req, res) => {
	res.json('hello world');
});

api(app, models);

router.get('/api/user/read', (req, res) => {
	User.findAll().then( (result) => res.json(result) );
});

router.post("/api/user/create", (req, res) =>
	User.create({
	  username: req.body.username,
	  email: req.body.email,
	  password: req.body.password
	}).then( (result) => res.json(result) )
	.then(console.log(res))
	.catch((e) => console.log(`create error - ${e}`))
);

module.exports = router;

const express = require('express');
const router = express.Router();
const cors = require('cors');
const app = express();
const sequelizeString = require('./db');

// app.use(cors());

app.use(cors({
	origin: 'http://localhost:3636',
	//credentials: true,
  }));


router.get('/api/hello', (req, res) => {
	res.json('hello world');
});

module.exports = router;

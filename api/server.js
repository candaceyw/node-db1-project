const express = require('express');
const accountsRouter = require('../accountsRouter');
const server = express();
const cors = require('cors');

server.use(express.json());
server.use(cors());

server.use('/api/accounts', accountsRouter);

server.get('/', (req, res) => {
	res.status(200).json('Success');
});

module.exports = server;

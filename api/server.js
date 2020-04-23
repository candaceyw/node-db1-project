const express = require('express');
const accountsRouter = require('../accountsRouter');
const server = express();

server.use(express.json());
server.use('/api/accounts', accountsRouter);

server.get('/', (req, res) => {
	res.status(200).json('Success');
}); //end server.get

module.exports = server;

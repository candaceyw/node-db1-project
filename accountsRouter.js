const express = require('express');
const db = require('./data/dbConfig');

const router = express.Router();

// GET all acounts
router.get('/', async (req, res, next) => {
	try {
		const accounts = await db.select('*').from('accounts');
		res.json(accounts);
	} catch (error) {
		next(error);
	}
});

// GET accounts by ID
router.get('/:id', async (req, res, next) => {
	try {
		const account = await db('accounts').where('id', req.params.id).first();
		res.json(account);
	} catch (error) {
		next(error);
	}
});

// POST new account to db
router.post('/', async (req, res, next) => {
	try {
		const payload = req.body;
		const [id] = await db('accounts').insert(payload);
		const account = await db('accounts').where('id', id).first();
		res.json(account);
	} catch (error) {
		next(error);
	}
});

// PUT update an account
router.put('/:id', async (req, res, next) => {
	try {
		const payload = req.body;
		await db('accounts').where('id', req.params.id).update(payload);
		const updateAccount = await db('accounts')
			.where('id', req.params.id)
			.first();
		res.json(updateAccount);
	} catch (error) {
		next(error);
	}
});

// DELETE account
router.delete('/:id', async (req, res, next) => {
	try {
		await db('accounts').where('id', req.params.id).del();
		res.status(204).end();
	} catch (error) {
		next(error);
	}
});

module.exports = router;

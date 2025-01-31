const express = require('express');
const router = express.Router();

const authorsController = require('../controllers/authors');

router.get('/', authorsController.getAll);

router.get('/:id', authorsController.getSingle);

router.post('/', authorsController.createauthor);

router.put('/:id', authorsController.updateauthor);

router.delete('/:id', authorsController.deleteauthor);

module.exports = router;
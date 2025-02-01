const express = require('express');
const router = express.Router();

const authorsController = require('../controllers/authors');
const validation = require('../middleware/validate');

router.get('/', authorsController.getAll);

router.get('/:id', authorsController.getSingle);

router.post('/', validation.saveAuthor, authorsController.createauthor);

router.put('/:id', validation.saveAuthor, authorsController.updateauthor);

router.delete('/:id', authorsController.deleteauthor);

module.exports = router;
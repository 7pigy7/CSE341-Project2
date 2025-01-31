const express = require('express');
const router = express.Router();

const authorsController = require('../controllers/authors');

router.get('/', authorsController.getAll);

router.get('/:id', authorsController.getSingle);

router.post('/', authorsController.createContact);

router.put('/:id', authorsController.updateContact);

router.delete('/:id', authorsController.deleteContact);

module.exports = router;
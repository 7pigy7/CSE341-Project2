const express = require('express');
const router = express.Router();

const authorsController = require('../controllers/authors');
const validation = require('../middleware/validate');
const { isAuthenticated } = require("../middleware/authenticate");

router.get('/', authorsController.getAll);

router.get('/:id', authorsController.getSingle);

router.post('/', validation.saveAuthor, authorsController.createauthor);

router.put('/:id', validation.saveAuthor, authorsController.updateauthor);

router.delete('/:id', isAuthenticated, authorsController.deleteauthor);

module.exports = router;
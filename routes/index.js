const router = require('express').Router();
const bodyParser = require('body-parser');

router.use('/', require('./swagger'));

router.get('/', (req, res) => {
   //#swagger.tags=['Hello World']
    res.send('Hello World');
});

router.use('/books', require('./books'));
router.use('/authors', require('./authors'));

module.exports = router;
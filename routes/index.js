const express = require('express');
const router = require('express').Router();
const bodyParser = require('body-parser');
const passport = require('passport');

router.use('/', require('./swagger'));

// router.get('/', (req, res) => {
//    //#swagger.tags=['Hello World']
//     res.send('Hello World');
// });

router.use('/books', require('./books'));
router.use('/authors', require('./authors'));

router.get('/login', passport.authenticate('github'), (req, res) => {});

router.get('/logout', function(req, res, next) {
    req.logout(function(err) {
        if (err) { return next(err);}
        res.redirect('/');
    });
});

module.exports = router;
const express = require('express');
const router = express.Router();
const movie = require('../models/Movie.model')
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req, res, next) => {
    movie.find()
        .then((movieFromDB) => {
            console.log(movieFromDB)
            res.render("movies", { movieList: movieFromDB })
        })
        .catch((err) => {
            next(err)
        });
})
module.exports = router;

const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model') // on crée la constante Movie pour pouvoir appeler Movie.find()

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


//route pour la liste des films
router.get('/movies',(req,res,next)=> {
    Movie.find()
    .then(allMoviesFromDB=>{
        res.render('movies',{movies : allMoviesFromDB})
    })
    .catch(err=>{console.log('ERROR',err)
        next(err)
    })
})

//route pour le détail d'un film en récupérant l'id de celui ci
router.get('/movies/:id',(req,res,next)=>{
    Movie.findById(req.params.id)
        .then(movieFromDB=>{
            console.log('movieFromDB :',movieFromDB)
            res.render('movie-details',{movie:movieFromDB})
        })
        .catch(err=>{
            console.log('ERROR:',err)
            next(err)
        })
})
    
    

module.exports = router;

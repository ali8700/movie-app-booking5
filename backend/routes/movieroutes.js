const express = require('express');
const movieRouter = express.Router();
const { addMovie,getAllMovies,getMovieById} = require('../controllers/moviecontroller');

movieRouter.get('/', getAllMovies);//localhost:5010/movie
movieRouter.get('/:id',getMovieById);
movieRouter.post('/',addMovie);//localhost:5010/movie






module.exports= movieRouter;
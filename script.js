"use strict";
 
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastSeenMovie  = prompt('Один из последних просмотренных фильмов?','');
const movieRating = +prompt('На сколько оцените его?','');

personalMovieDB.movies[lastSeenMovie] = movieRating;

console.log(personalMovieDB);
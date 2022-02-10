"use strict";

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const movie = prompt("Один из последних просмотренных фильмов?", ""),
    rating = +prompt("На сколько оцените его?", "");
  if (
    movie != null &&
    rating != null &&
    movie != "" &&
    rating != "" &&
    movie.length < 50
  ) {
    personalMovieDB.movies[movie] = rating;
    console.log("done");
  } else {
    console.log("error");
    i--;
  }
}

console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count > 31) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}

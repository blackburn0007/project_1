"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: function () {
    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.movies)
    ) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  rememberMyFilms: function () {
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
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 31) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDB: function () {
    if (!personalMovieDB.private) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (!personalMovieDB.private) {
      return (personalMovieDB.private = true);
    } else {
      return (personalMovieDB.private = false);
    }
  },
  writeYourGenres: function () {
    for (let index = 0; index < 3; index++) {
      const genre = prompt(`Ваш любимый жанр под номером ${index + 1}`);
      if (genre != null && genre != "") {
        personalMovieDB.genres[index] = genre;
      } else {
        index--;
      }
    }
    return personalMovieDB.genres.forEach((genre, index) => {
      console.log(`Любимый жанр ${index + 1} - это ${genre}`);
    });
  },
};

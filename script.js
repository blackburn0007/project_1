"use strict";

let numberOfFilms;

function start() {
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

// start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

function rememberMyFilms() {
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
}

// rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count > 31) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

// detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
  for (let index = 0; index < 3; index++) {
    personalMovieDB.genres[index] = prompt(
      `Ваш любимый жанр под номером ${index + 1}`
    );
  }
}
writeYourGenres();

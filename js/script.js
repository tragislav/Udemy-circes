"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const nameOfMovie = prompt('Один из последних просмотренных фильмов?', '');
    const markOfMovie = prompt('На сколько оцените его?', '');

    personalMovieDB.movies[nameOfMovie] = markOfMovie;
}

console.log(JSON.stringify(personalMovieDB));
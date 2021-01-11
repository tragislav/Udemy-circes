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

    if ((nameOfMovie != null) && (markOfMovie != null) && (nameOfMovie != '') && (markOfMovie != '') && (nameOfMovie.length < 50)) {
        personalMovieDB.movies[nameOfMovie] = markOfMovie;
        console.log('Done');
    } else {
        console.log('Error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(JSON.stringify(personalMovieDB));
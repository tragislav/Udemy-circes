"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while ((numberOfFilms == '') || (numberOfFilms == null) || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {

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
}

function detectPersonalLevel() {

    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

function showMyDB(hidden) {
    // версия с курса
    if(!hidden) {
        console.log(JSON.stringify(personalMovieDB));
    } else {
        console.log('А вот и нет!');
    }

    // моя версия, функция была сделана без передаваемого аргумента.
    /*if(personalMovieDB.privat === false) {
        console.log(JSON.stringify(personalMovieDB));
    } else {
        console.log('А вот и нет!');
    }*/
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
    
}

start();
rememberMyFilms();
writeYourGenres();
detectPersonalLevel();
showMyDB(personalMovieDB.privat);


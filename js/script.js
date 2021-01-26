"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while ((this.count == '') || (this.count == null) || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {

        if (this.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (this.count >= 10 && this.count < 30) {
            console.log("Вы классический зритель");
        } else if (this.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(JSON.stringify(personalMovieDB));
        } else {
            console.log('А вот и нет!');
        }
    },
    toggleVisibleMyDB: function () {
        if (this.privat) {
            this.privat = false;
        } else {
            this.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            // let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');

            // if (genre === '' || genre == null) {
            //     console.log('You wrote uncorect info or you wrote nothing');
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = genre;
            // }

            let genres = prompt(`Write you favorite genres`, '').toLowerCase();
            if (genres === '' || genres == null) {
                console.log('You wrote uncorect info or you wrote nothing');
                i--;
            } else {
                this.genres = genres.split(', ');
                this.genres.sort();
            }
        }
        this.genres.forEach((item, i) => {
            console.log(`"Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.writeYourGenres();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.showMyDB(personalMovieDB.false);
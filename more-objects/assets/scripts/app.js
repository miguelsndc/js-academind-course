/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable no-useless-return */

const addMovieBtn = document.getElementById('add-movie-btn');
const searchMovieBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if (!movieList.length) {
    movieList.classList.remove('visible');
  }

  movieList.classList.add('visible');

  movieList.innerHTML = '';

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement('li');
    const { info } = movie;
    // const { getFormattedTitle } = movie;
    let text = `${info.title} - `;

    Object.keys(info).forEach((key) => {
      if (key !== 'title' && key !== '_title') {
        text += `${key}: ${info[key]}`;
      }
    });

    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (!extraName.trim() || !extraValue.trim()) {
    return;
  }

  const newMovie = {
    info: {
      set title(val) {
        if (!title.trim()) {
          this._title = 'DEFAULT';
        }
        this._title = val;
      },
      get title() {
        return this._title.toUpperCase();
      },
      [extraName]: extraValue,
    },
    id: Math.random(),
  };

  newMovie.info.title = title;

  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchMovieBtn.addEventListener('click', searchMovieHandler);

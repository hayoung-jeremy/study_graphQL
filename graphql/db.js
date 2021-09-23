let movies = [
  {
    id: 1,
    title: "Star Wars",
    score: 4,
  },
  {
    id: 2,
    title: "Star Wars II",
    score: 10,
  },
  {
    id: 3,
    title: "Star Wars III",
    score: 9,
  },
  {
    id: 4,
    title: "Star Wars IV",
    score: 6,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => movie.id === id);
  return filteredMovies[0];
};

export const addMovie = (title, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    title,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

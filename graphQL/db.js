import fetch from "node-fetch";

const API_URL = "https://yts.mx/api/v2/list_movies.json";

export const getMovies = async (limit, rating) => {
  const res = await fetch(`${API_URL}`);
  const json = await res.json();
  return json.data.movies;
};

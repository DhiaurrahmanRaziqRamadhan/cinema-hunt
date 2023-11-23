import axios from "axios"

const apiKey = import.meta.env.VITE_APIKEY;
const baseURL = import.meta.env.VITE_BASEURL;

export const getMovieList = async () => {
  const movie = await axios.get(`${baseURL}/3/movie/popular?api_key=${apiKey}`)
  // console.log({ movie: movie })
  return movie.data.results
};

export const searchMovie = async(q) => {
  const search = await axios.get(`${baseURL}/3/search/movie?query=${q}&api_key=${apiKey}`)
  return search.data
}
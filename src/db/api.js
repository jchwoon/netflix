const API_KEY = "6078d0a6fa66331d9093efadf42e7900";
const BASE_PATH = "https://api.themoviedb.org/3";

export const FetchMovie = () => {
  return fetch(
    `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&language=kr&page=1&region=kr`
  ).then((response) => response.json());
};

export const FetchMovieDetail = (id) => {
  return fetch(`${BASE_PATH}//movie/${id}?api_key=${API_KEY}&language=kr`).then(
    (response) => response.json()
  );
};

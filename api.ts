import { MovieData, MovieDetail } from "./typings";

export async function getMovies() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=8c70d9d68c54a7072be9893577f091d3&language=en-US&page=1"
  );
  const resJSON: MovieData = await res.json();

  return resJSON;
}

export async function getMovieDetails(id: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=8c70d9d68c54a7072be9893577f091d3&language=en-US`
  );
  const resJSON: MovieDetail = await res.json();

  return resJSON;
}

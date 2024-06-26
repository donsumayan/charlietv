import wretch from "@/lib/wretch";
import { TopRatedResponse } from "../types/TopRatedResponse";
import { MovieDetails } from "@/types/MovieDetail";

export const fetchMovieDetails = async (movieId: number | string) => {
  const movieDetails = await wretch()
    .get(`/movie/${movieId}`)
    .json<MovieDetails>();

  return movieDetails;
};

import wretch from "@/lib/wretch";
import { TopRatedResponse } from "../types/TopRatedResponse";
import { Genre } from "@/types/Genre";

const fetchGenres = () =>
  wretch()
    .get("/genre/movie/list")
    .json<{ genres: Genre[] }>()
    .then()
    .catch(() => ({ genres: [] }));

export const fetchMovies = async (page = 1) => {
  const topRatedMoviesResponse = await wretch()
    .options({ query: { language: "en", page } })
    .get("/movie/top_rated")
    .json<TopRatedResponse>();

  const { genres = [] } = await fetchGenres();
  const genreNames = genres.reduce<{ [key: string]: string }>(
    (acc, genre) => ({ ...acc, [genre.id]: genre.name }),
    {},
  );

  const movieItems = topRatedMoviesResponse.results.map(
    ({ genre_ids, ...movie }) => ({
      ...movie,
      genres: genre_ids.map((id) => genreNames[id]),
    }),
  );

  return {
    ...topRatedMoviesResponse,
    results: movieItems,
  };
};

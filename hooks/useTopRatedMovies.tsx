import { useCallback, useEffect, useState } from "react";
import { fetchMovies } from "../services/fetchMovies";
import { MovieItem } from "@/types/Movie";

export const useTopRatedMovies = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<MovieItem[]>([]);

  const loadMovies = useCallback(async () => {
    const { results } = await fetchMovies(page);
    setMovies((_movies) => [..._movies, ...results]);
    setPage(page + 1);
  }, [page]);

  const reset = useCallback(async () => {
    const { results } = await fetchMovies(1);
    setMovies(results);
    setPage(1);
  }, []);

  useEffect(() => {
    loadMovies();
  }, []);

  return { movies, loadMovies, reset };
};

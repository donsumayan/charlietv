import { useCallback, useEffect, useState } from "react";
import { fetchMovies } from "../services/fetchMovies";
import { MovieItem } from "@/types/Movie";

export const useTopRatedMovies = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState<MovieItem[]>([]);
  const [error, setError] = useState<Error>();

  const loadMovies = useCallback(async () => {
    try {
      setLoading(true);
      const { results } = await fetchMovies(page);
      setMovies((_movies) => [..._movies, ...results]);
      setPage(page + 1);
    } catch (err) {
      if (err instanceof Error) {
        const details = JSON.parse(err.message) as {
          status_code: string;
          status_message: string;
        };

        const message = `Could not fetch movies. ${details.status_message}`;
        setError(new Error(message));
      }
    } finally {
      setLoading(false);
    }
  }, [page]);

  const reset = useCallback(async () => {
    try {
      setLoading(true);
      const { results } = await fetchMovies(1);
      setMovies(results);
      setPage(1);
    } catch (err) {
      if (err instanceof Error) {
        const details = JSON.parse(err.message) as {
          status_code: string;
          status_message: string;
        };

        const message = `Could not fetch movies. ${details.status_message}`;
        setError(new Error(message));
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadMovies();
  }, []);

  return { movies, loadMovies, reset, error, loading };
};

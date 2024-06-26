import { Movie } from "./Movie";

export type TopRatedResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

import { MovieList } from "@/components/MovieList";
import { useTopRatedMovies } from "@/hooks/useTopRatedMovies";
import { SafeAreaContainer } from "../components/SafeAreaContainer";
import { EnvProvider } from "@/components/EnvProvider";
import { ErrorHandler } from "@/components/ErrorHandler";

export default function Index() {
  const { movies, loadMovies, reset, error } = useTopRatedMovies();

  return (
    <SafeAreaContainer>
      <EnvProvider>
        {/* handling it like this since hooks wont throw errors */}
        {error ? (
          <ErrorHandler error={error} />
        ) : (
          <MovieList
            movies={movies}
            onEndReached={loadMovies}
            onRefresh={reset}
          />
        )}
      </EnvProvider>
    </SafeAreaContainer>
  );
}

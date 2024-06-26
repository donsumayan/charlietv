import { SafeAreaView, StatusBar } from "react-native";
import { MovieList } from "@/components/MovieList";
import { useTopRatedMovies } from "@/hooks/useTopRatedMovies";
import { Colors } from "@/constants/Colors";

export default function Index() {
  const { movies, loadMovies, reset } = useTopRatedMovies();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: Colors.CoffeeCraving.Taupe,
      }}
    >
      <MovieList movies={movies} onEndReached={loadMovies} onRefresh={reset} />
    </SafeAreaView>
  );
}

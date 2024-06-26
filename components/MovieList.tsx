import { MovieItem } from "@/types/Movie";
import { FlashList, ListRenderItem } from "@shopify/flash-list";
import { useCallback, useState } from "react";
import { RefreshControl, StyleSheet, View } from "react-native";
import { MovieGenre } from "./MovieGenre";
import { MovieTitle } from "./MovieTitle";
import { MovieOverview } from "./MovieOverview";
import { MovieRating } from "./MovieRating";
import { MoviePoster } from "./MoviePoster";

type props = {
  movies: MovieItem[];
  onEndReached?: () => Promise<void>;
  onRefresh?: () => Promise<void>;
};
export const MovieList = (props: props) => {
  const { movies = [], onEndReached, onRefresh } = props;
  const [refreshing, setRefreshing] = useState(false);

  const doRefresh = useCallback(async () => {
    try {
      setRefreshing(true);
      await onRefresh?.();
    } catch (err) {
      if (err instanceof Error)
        console.log("Error! Could not refresh list", err?.message);
    } finally {
      setRefreshing(false);
    }
  }, [onRefresh]);

  return (
    <FlashList
      data={movies}
      estimatedItemSize={300}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={doRefresh} />
      }
      onEndReached={onEndReached}
      renderItem={RenderItem}
    />
  );
};

const RenderItem: ListRenderItem<MovieItem> = ({ index, item: movie }) => (
  <View style={styles.RenderItemContainer}>
    <View style={styles.RenderItemCard}>
      <MoviePoster movie={movie} />
      <View style={styles.RenderItemDetails}>
        <MovieTitle movie={movie} />
        <MovieGenre movie={movie} />
        <MovieRating movie={movie} />
        <MovieOverview movie={movie} />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  RenderItemContainer: { padding: 20, flex: 1, gap: 16 },
  RenderItemCard: {
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
    minHeight: 150,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16,
    elevation: 24,
  },
  RenderItemDetails: {
    flex: 1,
    marginLeft: 130,
    alignItems: "flex-start",
    gap: 5,
  },
});

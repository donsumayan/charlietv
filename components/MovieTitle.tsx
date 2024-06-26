import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { MovieItem } from "@/types/Movie";
import { useRouter } from "expo-router";
import { Pressable } from "react-native";

export const MovieTitle = ({ movie }: { movie: MovieItem }) => {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => {
        router.navigate(
          `/movie/${movie.id}?backdropPath=${movie.backdrop_path}`
        );
      }}
    >
      <ThemedText
        type="defaultSemiBold"
        style={{ color: Colors.CoffeeCraving.Serenity, paddingTop: 5 }}
        adjustsFontSizeToFit={true}
        numberOfLines={2}
      >
        {movie.title}
      </ThemedText>
    </Pressable>
  );
};

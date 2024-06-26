import { MovieItem } from "@/types/Movie";
import { Text, View } from "react-native";

export const MovieGenre = ({ movie }: { movie: MovieItem }) => (
  <View style={{ flexDirection: "row", gap: 5 }}>
    {movie.genres?.map((genre) => (
      <View
        key={genre}
        style={{
          padding: 5,
          paddingVertical: 3,
          borderRadius: 4,
          backgroundColor: "#83746E",
        }}
      >
        <Text style={{ color: "white", fontSize: 10 }}>{genre}</Text>
      </View>
    ))}
  </View>
);

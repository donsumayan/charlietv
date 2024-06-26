import { MovieItem } from "@/types/Movie";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const MovieRating = ({ movie }: { movie: MovieItem }) => (
  <View
    style={{
      alignItems: "center",
      flexDirection: "row",
      paddingHorizontal: 5,
      paddingVertical: 2,
      backgroundColor: "#98B7D6",
      gap: 5,
      borderRadius: 4,
    }}
  >
    <AntDesign name="star" size={12} color="#EEBE35" />
    <Text style={{ color: "#1F232C", fontSize: 10 }}>
      {Math.round((movie.vote_average + Number.EPSILON) * 100) / 100}
    </Text>
  </View>
);

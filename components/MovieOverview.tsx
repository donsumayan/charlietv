import { MovieItem } from "@/types/Movie";
import { useState } from "react";
import { Pressable, Text } from "react-native";

export const MovieOverview = ({ movie }: { movie: MovieItem }) => {
  const [expand, setExpand] = useState(false);

  return (
    <Pressable onPress={() => setExpand(!expand)}>
      <Text
        numberOfLines={expand ? 20 : 4}
        style={{
          overflow: "hidden",
          fontSize: 12,
          paddingRight: 15,
          paddingBottom: 10,
        }}
      >
        {movie.overview}
      </Text>
    </Pressable>
  );
};

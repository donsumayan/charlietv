import { MovieItem } from "@/types/Movie";
import { Image } from "expo-image";
import { useState } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";

export const RenderComponent = (props: { movie: MovieItem }) => {
  const { movie } = props;
  const [active, setActive] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        setActive(!active);
      }}
      activeOpacity={0.8}
      style={{
        overflow: "hidden",
        height: active ? Dimensions.get("window").height - 300 : 300,
        width: "100%",
      }}
    >
      <Image
        source={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        contentFit="cover"
        transition={500}
        style={{
          overflow: "hidden",
          height: "100%",
          width: "100%",
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            // alignItems: "flex-end",
          }}
        >
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            {movie.title}
          </Text>
        </View>
      </Image>
    </TouchableOpacity>
  );
};

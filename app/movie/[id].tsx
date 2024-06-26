import { fetchMovieDetails } from "@/services/fetchMovieDetails";
import { MovieDetails } from "@/types/MovieDetail";
import { Image } from "expo-image";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";

const Movie = () => {
  const params = useLocalSearchParams();

  const [movieDetails, setMovieDetails] = useState<MovieDetails>();

  useEffect(() => {
    // force type because expo router does not have an easy way of doing this
    const { id } = params as unknown as { id: string };
    fetchMovieDetails(id).then(setMovieDetails);
  }, [params]);

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={`https://image.tmdb.org/t/p/original/${params?.backdropPath}`}
        contentFit="cover"
        contentPosition="center"
        style={{
          height: "100%",
          width: "100%",
          zIndex: 0,
          position: "absolute",
        }}
        transition={500}
      />

      <View
        style={{
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        <View
          style={{
            backgroundColor: "rgba(254, 254, 254, 0.8)",
            borderRadius: 10,
            padding: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              opacity: 10,
              fontWeight: "bold",
            }}
          >
            This Page is WIP 🚧👷🏾
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "rgba(254, 254, 254, 0.8)",
            borderRadius: 10,
            padding: 10,
            marginTop: 10,
            height: 300,
            width: Dimensions.get("screen").width - 20,
          }}
        >
          <ScrollView>
            <Text
              style={{
                fontSize: 10,
                opacity: 10,
                fontWeight: "bold",
              }}
            >
              Detail dump:{"\n"}
              {!movieDetails ? "loading" : JSON.stringify(movieDetails)}
            </Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Movie;

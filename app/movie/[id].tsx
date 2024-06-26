import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

const Movie = () => {
  const params = useLocalSearchParams();

  return <Text>Movie {JSON.stringify(params)}</Text>;
};

export default Movie;

import { MovieItem } from "@/types/Movie";
import { Image } from "expo-image";

export const MoviePoster = ({ movie }: { movie: MovieItem }) => (
  <Image
    source={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
    contentFit="cover"
    transition={1000}
    style={{
      height: 150,
      width: 130,
      top: -10,
      left: -10,
      borderRadius: 10,
      overflow: "hidden",
      position: "absolute",
    }}
  />
);

import { MovieItem } from "@/types/Movie";
import { ListRenderItem } from "@shopify/flash-list";
import { View } from "react-native";
import { RenderComponent } from "./RenderComponent";

export const RenderItem2: ListRenderItem<MovieItem> = ({
  index,
  item: movie,
}) => {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <RenderComponent movie={movie} />
    </View>
  );
};

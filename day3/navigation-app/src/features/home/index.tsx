import { FlatList, View } from "react-native";
import { Item } from "./item";

const data = [
  {
    id: "1",
    username: "First User",
  },
  {
    id: "2",
    username: "Second User",
  },
  {
    id: "3",
    username: "Third User",
  },
];

export const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

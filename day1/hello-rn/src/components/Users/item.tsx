import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import type { User } from "./";

type IProps = {
  user: User;
  removeUserById: (id: string) => void;
};

export const UserItem = ({ user, removeUserById }: IProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.text}>{user.name}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => removeUserById(user.id)}>
        <Text>Remove</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#898AC4",
    padding: 12,
  },
  item: {},
  text: {
    fontSize: 22,
  },
});

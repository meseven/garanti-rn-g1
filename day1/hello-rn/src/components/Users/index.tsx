import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { UserItem } from "./item";
import { useState } from "react";
import 'react-native-get-random-values'
import { nanoid } from "nanoid";

export type User = {
  id: string;
  name: string;
  age: number;
};

const data: User[] = [
  {
    id: "1",
    name: "Ahmet",
    age: 22,
  },
  {
    id: "2",
    name: "Filiz",
    age: 30,
  },
];

export const Users = () => {
  const [users, setUsers] = useState(data);

  const handleAddNewUser = () => {
    setUsers([
      {
        id: nanoid(),
        name: `User ${users.length + 1}`,
        age: Math.floor(Math.random() * 50) + 20,
      },
      ...users,
    ]);
  };

  const handleRemoveAll = () => {
    setUsers([]);
  };

  const removeUserById = (id: string) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  console.log(users)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.count}>Total: {users.length}</Text>
        <View style={styles.btnGroup}>
          <Button title="Add new" onPress={handleAddNewUser} />
          <Button title="Remove all" onPress={handleRemoveAll} />
        </View>
      </View>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <UserItem user={item} removeUserById={removeUserById} />
        )}
        keyExtractor={(item) => String(item.id)}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  count: {
    fontSize: 22,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    borderBottomWidth: 2,
    borderBottomColor: "#666",
  },
  btnGroup: {
    flexDirection: "row",
  },
});

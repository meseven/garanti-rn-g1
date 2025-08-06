import { StaticScreenProps, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { RootStackParamList } from "../types/navigation";
import React, { useEffect, useState } from "react";
import { Button } from "@react-navigation/elements";

export type DetailScreenProps = StaticScreenProps<RootStackParamList["Detail"]>;

export function DetailScreen({ route }: DetailScreenProps) {
  const [count, setCount] = useState(0);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { id, username } = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount((c) => c + 1)}>+</Button>
      ),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Count: {count}</Text>
      <Text>
        {id} - {username}
      </Text>
      <Button onPress={() => navigation.navigate("Home")}>Go to Home</Button>
      <Button onPress={() => navigation.goBack()}>Go Back</Button>
    </View>
  );
}

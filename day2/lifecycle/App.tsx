import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { Counter } from "./src/Counter";
import { useState } from "react";

export default function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button title="Show/Hide" onPress={() => setIsVisible(!isVisible)} />
      {isVisible && <Counter />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

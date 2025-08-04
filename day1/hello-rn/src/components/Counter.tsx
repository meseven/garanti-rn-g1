import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <Button title="Increase" onPress={handleIncrease} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 52,
    textAlign: "center",
  },
});

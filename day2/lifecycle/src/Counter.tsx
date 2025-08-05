import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [increaseCount, setIncreaseCount] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("setInterval çalıştı");
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handlePress = () => {
    setCount(count + increaseCount);
  };

  return (
    <View>
      <Text style={styles.text}>{count}</Text>
      <Button title="Arttır" onPress={handlePress} />

      <Text style={styles.increaseCountText}>+{increaseCount}</Text>

      <View style={styles.btnList}>
        <Button title="+1" onPress={() => setIncreaseCount(1)} />
        <Button title="+5" onPress={() => setIncreaseCount(5)} />
        <Button title="+10" onPress={() => setIncreaseCount(10)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    textAlign: "center",
  },
  btnList: {
    flexDirection: "row",
  },
  increaseCountText: {
    fontSize: 28,
    textAlign: "center",
    marginTop: 30,
  },
});

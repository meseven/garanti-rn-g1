import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Flex() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <View style={styles.box3}>
          <Text>Box</Text>
        </View>
        <View style={styles.box4}>
          <Text>Box</Text>
        </View>
        <View style={styles.box5}>
          <Text>Box</Text>
        </View>
      </View>
      <View style={styles.box2}>
        <Text>Box</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    flex: 1,
  },
  box1: {
    backgroundColor: "yellow",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  box2: {
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  box3: {
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  box4: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  box5: {
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

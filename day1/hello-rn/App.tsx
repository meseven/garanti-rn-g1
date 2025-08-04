// import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Users } from "./src/components/Users";
// import { Paragraph } from "./src/components/Paragraph";
// import { Profile } from "./src/components/Profile";
// import { Counter } from "./src/components/Counter";
// import { User } from "./src/components/User";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={styles.container}>
      {/* <Button title={isVisible ? "Gizle" : "Göster"} onPress={handleToggle} />
      {isVisible && <Counter />}
      <User name="Metehan" age={29} /> */}

      <SafeAreaView style={styles.container}>
        <Users />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#A2AADB",
    flex: 1,
  },
});

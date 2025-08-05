import { StyleSheet, View } from "react-native";
import { Settings } from "./src/components/settings";
import { ChangeLang } from "./src/components/change-lang";
import { ChangeTheme } from "./src/components/change-theme";

export default function App() {
  return (
    <View style={styles.container}>
      <Settings />
      <ChangeLang />
      <ChangeTheme />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    textAlign: "center",
  },
});

import { Button, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../context/theme-context";

export const ChangeTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <View>
      <Text style={styles.text}>Change Theme Component</Text>
      <Text style={styles.text}>Aktif Tema: {theme}</Text>

      <View>
        <Button
          title={`Set ${theme === "dark" ? "light" : "dark"}`}
          onPress={toggleTheme}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    textAlign: "center",
  },
});

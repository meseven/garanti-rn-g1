import { Button, StyleSheet, Text, View } from "react-native";
import { useThemeStore } from "../store/use-theme.store";

export const ChangeTheme = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

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

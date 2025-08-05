import { StyleSheet, Text, View } from "react-native";
import { ChangeLangButtons } from "./change-lang-buttons";
import { useLangStore } from "../store/use-lang.store";
import { useThemeStore } from "../store/use-theme.store";

export const Settings = () => {
  const lang = useLangStore((state) => state.lang);
  const theme = useThemeStore((state) => state.theme);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings Component</Text>
      <Text style={styles.text}>Aktif dil: {lang}</Text>
      <Text style={styles.text}>Aktif tema: {theme}</Text>
      <ChangeLangButtons />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 22,
    textAlign: "center",
  },
});

import { StyleSheet, Text, View } from "react-native";
import { ChangeLangButtons } from "./change-lang-buttons";
import { useLang } from "../context/lang-context";
import { useTheme } from "../context/theme-context";

export const Settings = () => {
  const { lang } = useLang();
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings Component</Text>
      <Text style={styles.text}>Aktif dil: {lang}</Text>
      <Text style={styles.text}>Aktif tema: {theme}</Text>
      <ChangeLangButtons  />
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

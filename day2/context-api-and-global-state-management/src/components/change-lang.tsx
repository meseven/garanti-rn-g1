import { StyleSheet, Text, View } from "react-native";
import { useLang } from "../context/lang-context";
import { ChangeLangButtons } from "./change-lang-buttons";

export const ChangeLang = () => {
  const { lang } = useLang();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Change Lang. Component</Text>
      <Text style={styles.text}>Aktif dil: {lang}</Text>
      <ChangeLangButtons />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  text: {
    fontSize: 22,
    textAlign: "center",
  },
});

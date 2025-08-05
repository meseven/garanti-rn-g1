import { StyleSheet, Text, View } from "react-native";
import { ChangeLangButtons } from "./change-lang-buttons";
import { useLangStore } from "../store/use-lang.store";

export const ChangeLang = () => {
  const lang = useLangStore((state) => state.lang);

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

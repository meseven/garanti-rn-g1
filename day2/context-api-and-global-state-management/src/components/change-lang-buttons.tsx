import { Button, StyleSheet, View } from "react-native";
import { useLang } from "../context/lang-context";

const langs = ["tr-TR", "en-US", "de-DE"] as const;

export const ChangeLangButtons = () => {
  const { changeLang } = useLang();

  return (
    <View style={styles.langList}>
      {langs.map((lang) => (
        <Button key={lang} title={lang} onPress={() => changeLang(lang)} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  langList: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

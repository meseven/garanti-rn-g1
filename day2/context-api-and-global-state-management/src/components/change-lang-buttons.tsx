import { Button, StyleSheet, View } from "react-native";
import { useLangStore } from "../store/use-lang.store";

const langs = ["tr-TR", "en-US", "de-DE"] as const;

export const ChangeLangButtons = () => {
  const setLang = useLangStore((state) => state.setLang);

  return (
    <View style={styles.langList}>
      {langs.map((lang) => (
        <Button key={lang} title={lang} onPress={() => setLang(lang)} />
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

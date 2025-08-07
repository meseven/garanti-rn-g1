import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

type IProps = {
  title?: string;
};

export const Spinner = ({ title }: IProps) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} />
      {title && <Text style={styles.title}>{title}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    marginTop: 12,
    fontSize: 18,
  },
});

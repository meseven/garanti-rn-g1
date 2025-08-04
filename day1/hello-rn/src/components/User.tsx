import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

type IProps = {
  name: string;
  age: number;
};

export function User(props: IProps) {
  const [data, setData] = useState(props);

  const handleClick = () => {
    setData({ ...data, age: 30 });
  };

  return (
    <View>
      <Text style={styles.text}>{data.name}</Text>
      <Text style={styles.text}>{data.age}</Text>
      <Button title="Değiştir" onPress={handleClick} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    textAlign: "center",
  },
});

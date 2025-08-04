import { Button, Text, View, TouchableOpacity, StyleSheet } from "react-native";

export type User = {
  name: string;
  surname: string;
  age: number;
  job: string;
  hobbies: string[];
};

type IProps = {
  data: User;
  sayHi: (values: User) => void;
};

export const Profile = ({ data, sayHi }: IProps) => {
  return (
    <View>
      <Text>
        {data.name} {data.surname}
      </Text>
      <Text>{data.age}</Text>
      <Text>{data.job}</Text>
      <Text>Hobiler</Text>
      {data.hobbies.map((item, i) => (
        <Text key={i}>{item}</Text>
      ))}

      <Button title="Click Me" onPress={() => sayHi(data)} />
      <TouchableOpacity style={styles.btn} onPress={() => sayHi(data)}>
        <Text style={styles.btnText}>Click Me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    padding: 8,
    borderWidth: 1,
    marginTop: 12,
  },
  btnText: {
    textAlign: "center",
  },
});

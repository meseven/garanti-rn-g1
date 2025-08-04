import { Text, View } from "react-native";

type IProps = {
  content: string;
};

export const Paragraph = (props: IProps) => {
  return (
    <View>
      <Text>{props.content}</Text>
    </View>
  );
};

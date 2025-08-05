import { Text } from "react-native";

type IProps = {
  children: React.ReactNode;
};

export const Paragraph = ({ children }: IProps) => {
  return <Text>{children}</Text>;
};

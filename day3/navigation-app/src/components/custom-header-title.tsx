import { Image } from "expo-image";

export const CustomHeaderTitle = () => {
  return (
    <Image
      style={{ width: 35, height: 35 }}
      source={require("../../assets/logo.png")}
    />
  );
};

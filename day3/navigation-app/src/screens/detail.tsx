import { StaticScreenProps } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../types/navigation";
import React from "react";
import { UserDetail } from "../features/user-detail";

export type DetailScreenProps = StaticScreenProps<RootStackParamList["Detail"]>;

export function DetailScreen({ route }: DetailScreenProps) {
  const { id } = route.params;

  return <UserDetail id={id} />;
}

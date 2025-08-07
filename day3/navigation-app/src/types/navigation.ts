import { User } from "./user";

export type RootStackParamList = {
  Home: undefined;
  Detail: Pick<User, "id" | "name">;
};

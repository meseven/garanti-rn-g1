import { FlatList } from "react-native";
import { Item } from "./item";
import { Spinner } from "../../components/spinner";
import { ApiError } from "../../components/api-error";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../api/endpoints";

export const Users = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  if (isLoading) {
    return <Spinner title="Loading Users..." />;
  }

  if (error) {
    return <ApiError message={error.message} />;
  }

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Item user={item} />}
      keyExtractor={(item) => String(item.id)}
    />
  );
};

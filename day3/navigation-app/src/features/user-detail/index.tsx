import { StyleSheet, Text, View } from "react-native";
import { Spinner } from "../../components/spinner";
import { ApiError } from "../../components/api-error";
import { useQuery } from "@tanstack/react-query";
import { getUserById } from "../../api/endpoints";

type IProps = {
  id: number;
};

export const UserDetail = ({ id }: IProps) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users", id],
    queryFn: () => getUserById(id),
  });

  if (isLoading) {
    return <Spinner title="Loading Users..." />;
  }

  if (error) {
    return <ApiError message={error.message} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data?.name}</Text>
      <Text>{JSON.stringify(data, null, 2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
});

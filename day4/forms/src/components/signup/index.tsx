import { Controller, useForm } from "react-hook-form";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { resolver, SignupFormData } from "./schema";

export const Signup = () => {
  const { control, formState, handleSubmit, setError } = useForm({
    defaultValues: {
      name: "Mehmet",
      email: "mehmet@test.com",
      password: "password",
      confirmPassword: "password",
    },
    resolver,
  });

  const onSubmit = async (data: SignupFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if(data.email === 'mehmet@test.com'){
      setError("email", {
        type: "manual",
        message: "This email is already taken",
      });
      return;
    }

    alert("Form submitted successfully!");
  };

  return (
    <View style={styles.container}>
      <View style={styles.item_container}>
        <Text style={styles.label}>Name</Text>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextInput
              style={[styles.input, formState.errors.name && styles.inputError]}
              placeholder="name"
              value={field.value}
              onChangeText={field.onChange}
            />
          )}
        />
        {formState.errors.name && (
          <Text style={styles.error}>{formState.errors.name.message}</Text>
        )}
      </View>
      <View style={styles.item_container}>
        <Text style={styles.label}>E-mail</Text>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextInput
              style={[
                styles.input,
                formState.errors.email && styles.inputError,
              ]}
              placeholder="email"
              inputMode="email"
              keyboardType="email-address"
              autoCapitalize="none"
              value={field.value}
              onChangeText={field.onChange}
            />
          )}
        />
        {formState.errors.email && (
          <Text style={styles.error}>{formState.errors.email.message}</Text>
        )}
      </View>
      <View style={styles.item_container}>
        <Text style={styles.label}>Password</Text>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextInput
              style={[
                styles.input,
                formState.errors.password && styles.inputError,
              ]}
              placeholder="password"
              secureTextEntry
              value={field.value}
              onChangeText={field.onChange}
            />
          )}
        />
        {formState.errors.password && (
          <Text style={styles.error}>{formState.errors.password.message}</Text>
        )}
      </View>
      <View style={styles.item_container}>
        <Text style={styles.label}>Re-type Password</Text>
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <TextInput
              style={[
                styles.input,
                formState.errors.confirmPassword && styles.inputError,
              ]}
              placeholder="re-type password"
              secureTextEntry
              value={field.value}
              onChangeText={field.onChange}
            />
          )}
        />
        {formState.errors.confirmPassword && (
          <Text style={styles.error}>
            {formState.errors.confirmPassword.message}
          </Text>
        )}
      </View>
      <TouchableOpacity
        style={[styles.btn, formState.isSubmitting && styles.disabledBtn]}
        onPress={handleSubmit(onSubmit)}
        disabled={formState.isSubmitting}
      >
        <Text style={styles.btnText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    padding: 20,
  },
  input: {
    borderWidth: 1,
    padding: 12,
    fontSize: 22,
    borderRadius: 8,
  },
  inputError: {
    borderColor: "red",
  },
  label: {
    fontWeight: 600,
    fontSize: 22,
  },
  item_container: {
    width: "100%",
    marginBottom: 10,
  },
  btn: {
    backgroundColor: "lightblue",
    padding: 12,
    width: "100%",
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 8,
  },
  disabledBtn: {
    backgroundColor: "#ccc",
  },
  btnText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: 600,
  },
  error: {
    color: "red",
    marginTop: 5,
    fontSize: 16,
  },
});

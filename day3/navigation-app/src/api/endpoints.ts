import axios from "axios";
import { api } from "./client";
import { User } from "../types/user";

export const getUsers = async () => {
  try {
    const response = await api.get<User[]>("/users");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};

export const getUserById = async (id: number) => {
  try {
    const response = await api.get<User>(`/users/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch user");
  }
};

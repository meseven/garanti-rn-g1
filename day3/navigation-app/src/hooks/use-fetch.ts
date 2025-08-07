import axios from "axios";
import { useEffect, useState } from "react";
import { api } from "../api/client";

export const useFetch = <T = any>(
  endpoint: string
): {
  data: T | null;
  loading: boolean;
  error: string | null;
} => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await api(endpoint);
      setData(res.data as T);
    } catch {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
  };
};

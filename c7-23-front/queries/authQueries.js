import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

import postLogin from "../api/postLogin";
import postRegister from "../api/postRegister";

import useAuthStore from "../store/authStore";

export function useLogin() {
  const authStore = useAuthStore();
  const router = useRouter();

  const { mutate, isLoading, isError, error } = useMutation(async (data) => {
    const { userData = {}, token = "_" } = await postLogin(data);
    authStore.setCurrentUser(userData);
    authStore.setToken(token);

    // TODO: Waiting for back changes to enabled this
    // MyTurnAPI.headers.Authorization = token;

    router.push("/admin/dashboard");
  });
  const codeHttp = error?.response?.status;
  console.log("mensaje", error?.response?.status);
  return { mutate, isLoading, isError, codeHttp };
}

export function useRegister() {
  const authStore = useAuthStore();
  const router = useRouter();

  const { mutate, isLoading, isError, error } = useMutation(async (data) => {
    const { userData = {}, token = "_" } = await postRegister(data);

    authStore.setCurrentUser(userData);
    authStore.setToken(token);

    // TODO: Waiting for back changes to enabled this
    // MyTurnAPI.headers.Authorization = token;

    router.push("/admin/dashboard");
  });
  const codeHttp = error?.response?.status;
  return { mutate, isLoading, isError, codeHttp };
}

export function useLogOut() {
  const queryClient = useQueryClient();
  const authStore = useAuthStore();
  const router = useRouter();

  return () => {
    authStore.setCurrentUser(null);
    authStore.setToken(null);

    queryClient.clear();

    router.push("/");
  };
}

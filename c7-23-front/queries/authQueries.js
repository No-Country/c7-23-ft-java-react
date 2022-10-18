import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

import postLogin from "../api/postLogin";
import postRegister from "../api/postRegister";

import { MyTurnAPI } from "../config";
import useAuthStore from "../store/authStore";

export function useLogin() {
  const authStore = useAuthStore();
  const router = useRouter();

  return useMutation(async (data) => {
    const { userData = {}, token = "_" } = await postLogin(data);

    authStore.setCurrentUser(userData);
    authStore.setToken(token);

    // TODO: Waiting for back changes to enabled this
    // MyTurnAPI.headers.Authorization = token;

    router.push("/admin/dashboard");
  });
}

export function useRegister() {
  const authStore = useAuthStore();
  const router = useRouter();

  return useMutation(async (data) => {
    const { userData = {}, token = "_" } = await postRegister(data);

    authStore.setCurrentUser(userData);
    authStore.setToken(token);

    // TODO: Waiting for back changes to enabled this
    // MyTurnAPI.headers.Authorization = token;

    router.push("/admin/dashboard");
  });
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

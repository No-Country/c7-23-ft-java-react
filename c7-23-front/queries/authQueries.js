import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

import postLogin from "../api/postLogin";
import postRegister from "../api/postRegister";

import { MyTurnAPI } from "../config";
import useAuthStore from "../store/authStore";

export function useLogin() {
  const authStore = useAuthStore();
  const router = useRouter();

  return useMutation(async (data) => {
    const { userData = {}, token = "" } = await postLogin(data);

    // authStore.setCurrentUser(userData);
    // authStore.setToken(token);

    // MyTurnAPI.headers.Authorization = token;

    router.push("/admin/dashboard");
  });
}

export function useRegister() {
  const authStore = useAuthStore();
  const router = useRouter();

  return useMutation(async (data) => {
    const { userData = {}, token = "" } = await postRegister(data);

    // authStore.setCurrentUser(userData);
    // authStore.setToken(token);

    // MyTurnAPI.headers.Authorization = token;

    router.push("/admin/dashboard");
  });
}

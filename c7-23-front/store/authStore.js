import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const useAuthStore = create()(
  devtools(
    persist(
      (set) => ({
        currentUser: null,
        token: null,
        setCurrentUser: (currentUser) => set({ currentUser }),
        setToken: (token) => set({ token }),
      }),
      { name: "auth-storage" }
    )
  )
);

export default useAuthStore;

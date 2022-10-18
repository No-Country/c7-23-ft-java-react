import { useEffect } from "react";
import { useRouter } from "next/router";

import useAuthStore from "../store/authStore";

export default function withAuthPage(Page) {
  return function Wrapper(pageProps) {
    const authStore = useAuthStore();
    const router = useRouter();

    useEffect(() => {
      if (!authStore.currentUser) {
        router.push("/login");
      }
    }, [authStore, router]);

    return <Page {...pageProps} />;
  };
}

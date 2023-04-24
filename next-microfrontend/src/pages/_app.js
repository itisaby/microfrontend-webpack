import { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/") {
      router.push("/home");
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;

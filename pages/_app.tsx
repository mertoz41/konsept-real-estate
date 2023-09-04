import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "@/contexts/auth";
function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;

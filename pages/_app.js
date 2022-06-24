import NavBar from "../components/NavBar";
import { AuthContextProvider } from "../context/AuthContext";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthContextProvider>
      <NavBar />
        <Component {...pageProps} />
      </AuthContextProvider>
    </>
  );
}

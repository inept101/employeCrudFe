import "../styles/globals.css";
import { UserContextProvider } from "../context/users/contex";

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  );
}

export default MyApp;

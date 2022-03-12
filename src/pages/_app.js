import "../../styles/globals.css";
import { store } from "../redux/store/store";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import Master from "../components/master";

function MyApp({ Component, pageProps }) {
  const route = useRouter();
  const currentRoute = route.pathname;

  const component = () => {
    if (currentRoute == "/login") {
      return <Component {...pageProps} />;
    } else {
      return (
        <Master>
          <Component {...pageProps} />
        </Master>
      );
    }
  };

  return <Provider store={store}>{component()}</Provider>;
}

export default MyApp;

import "../../styles/globals.css";
import "aos/dist/aos.css";
import Aos from "aos";
import { store } from "../redux/store/store";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import Master from "../components/master";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const route = useRouter();
  const currentRoute = route.pathname;

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

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

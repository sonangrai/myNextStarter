import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import Global from "../styled/Global.styled";
import { theme } from "../styled/Theme";
import store from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    // The theme Provide
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {/* The Globals */}
        <Global />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;

import { ThemeProvider } from "styled-components";
import Global from "../styled/Global.styled";
import { theme } from "../styled/Theme";

function MyApp({ Component, pageProps }) {
  return (
    // The theme Provide
    <ThemeProvider theme={theme}>
      {/* The Globals */}
      <Global />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

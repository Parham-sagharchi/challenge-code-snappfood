import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "@/core/themes/default.theme";
import GlobalStyles from "@/core/themes/global.style";
import { Provider } from "react-redux";
import { store } from "@/store";
import { iransans } from "@/utils/loadFonts";

import "@/configs/i18n";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={iransans.className}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </main>
  );
};

export default App;

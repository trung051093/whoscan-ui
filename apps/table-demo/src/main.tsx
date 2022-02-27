import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import { I18nextProvider } from "react-i18next";

// @ts-ignore
import { i18n } from "@whoscan/locales";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />
          <SnackbarProvider maxSnack={3}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </SnackbarProvider>
        </QueryClientProvider>
      </Provider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

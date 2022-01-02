import { StyledEngineProvider } from "@mui/material/styles"; // <-- import this component, and wrap your App.
import { i18n } from "@whoscan/locales";
import { I18nextProvider } from "react-i18next";
import { QueryClientProvider, QueryClient } from "react-query";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";
import "./global.css";

const queryClient = new QueryClient()

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <React.Suspense fallback={<CircularProgress />}>
      <QueryClientProvider client={queryClient}>
        <I18nextProvider i18n={i18n}>
          <StyledEngineProvider injectFirst>
            <Story />
          </StyledEngineProvider>
        </I18nextProvider>
      </QueryClientProvider>
    </React.Suspense>
  ),
];

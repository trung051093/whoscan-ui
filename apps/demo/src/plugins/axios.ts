import Axios, { AxiosResponse, AxiosError } from 'axios';
import { CookieServices } from '../services';
import { CookiesName } from '../common';

const bootstrap = async () => {
  console.log("import.meta.env:", import.meta.env);
  Axios.defaults.baseURL = import.meta.env.VITE_APP_API_BASE_URL as string;

  Axios.interceptors.request.use(
    (config: any) => {
      if (CookieServices.getCookie(CookiesName.ACCESS_TOKEN)) {
        config.headers.common = {
          ...config.headers.common,
          Authorization: `Bearer ${CookieServices.getCookie(CookiesName.ACCESS_TOKEN)}`,
        };
      }
      if (CookieServices.getCookie(CookiesName.REFRESH_TOKEN)) {
        config.headers.common = {
          ...config.headers.common,
          'X-Refresh-Token': `${CookieServices.getCookie(CookiesName.REFRESH_TOKEN)}`,
        };
      }
      return config;
    },
    (error) => {
      return error;
    },
  );

  Axios.interceptors.response.use(
    (response: AxiosResponse) => {
      if (Axios.defaults.headers.common['x-new-access-token']) {
        CookieServices.setCookie(
          CookiesName.ACCESS_TOKEN,
          Axios.defaults.headers.common['x-new-access-token'],
          Number(Axios.defaults.headers.common['x-new-exp']),
        );
      }
      if (Axios.defaults.headers.common['x-new-refresh-token']) {
        CookieServices.setCookie(
          CookiesName.REFRESH_TOKEN,
          Axios.defaults.headers.common['x-new-refresh-token'],
          Number(Axios.defaults.headers.common['x-new-exp']),
        );
      }

      return response;
    },
    (error: AxiosError) => {
      if (error.response?.data?.exception) {
        throw error.response.data.exception;
      }

      if (error.response?.data) {
        throw error.response.data;
      }
      throw error;
    },
  );
};

bootstrap();

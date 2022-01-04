import Axios, { AxiosRequestConfig } from 'axios';
import { BaseListingModel } from '../models';

export abstract class BaseService {

  public static baseUrl: string = import.meta.env.VITE_APP_API_BASE_URL as string;

  async post<T, Result = any>(
    path: string,
    data: T,
    config?: AxiosRequestConfig,
  ): Promise<Result> {
    const result: Result | any = await Axios.post(path, data, {
      ...config,
    });
    if (result.status < 200 || result.status > 299) {
      return Promise.reject(result);
    }

    return result.data;
  }

  async put<T, Result = any>(
    path: string,
    data: T,
    config?: AxiosRequestConfig,
  ): Promise<Result> {
    const result: Result | any = await Axios.put(path, data, config);

    if (result.status < 200 || result.status > 299) {
      return Promise.reject(result);
    }

    return result.data;
  }

  async patch<T, Result = any>(
    path: string,
    data: T,
    config?: AxiosRequestConfig,
  ): Promise<Result> {
    const result: Result | any = await Axios.patch(path, data, config);

    if (result.status < 200 || result.status > 299) {
      return Promise.reject(result);
    }

    return result.data;
  }

  async get(path: string, params?: any, config?: AxiosRequestConfig) {
    const parsedParams: any = {};
    if (params) {
      for (const key in params) {
        if (Array.isArray(params[key])) {
          const arrayParamsStr = params[key].join();
          parsedParams[key] = arrayParamsStr;
        } else if (params[key] && params[key] !== '')
          parsedParams[key] = params[key];
      }
    }
    const result: any = await Axios.get(path, {
      params: parsedParams,
      ...config,
    });

    if (result && result.headers && result.headers['x-pagination-index']) {
      return new BaseListingModel(result.headers, result.data);
    }

    return result && result.data;
  }

  async delete(
    path: string,
    params?: { [key: string]: any },
    config?: AxiosRequestConfig,
  ) {
    return await Axios.delete(path, { ...config, params });
  }
}

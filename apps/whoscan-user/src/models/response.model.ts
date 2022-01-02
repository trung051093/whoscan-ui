export interface IErrorResponseModel {
  response?: {
    code: string;
  };
  statusCode?: number;
  message?: Array<string> | string;
  error?: object | string;
}
